const path = require('path')

//Create node slug and get source-system from *.md files
module.exports.onCreateNode = ({node, actions}) => {
    const {createNodeField} = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

//Render slug node to page
module.exports.createPages = async ({actions, graphql, reporter}) => {
    const {createPage} = actions
    const blogPostTemplate = path.resolve('./src/templates/blog.js')
    const tagTemplate = path.resolve("./src/templates/tags.js")
    const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
    // handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const posts = result.data.postsRemark.edges
    // Create post detail pages
    posts.forEach(({node}) => {
        createPage({
            component: blogPostTemplate,
            path: `/${node.fields.slug}`,
            context: {
                slug: node.fields.slug
            }
        })
    })

    // Extract tag data from query
    const kebabCase = require("lodash.kebabcase")
    const tags = result.data.tagsGroup.group
    // Make tag pages
    tags.forEach(tag => {
        createPage({
            path: `/tags/${kebabCase(tag.fieldValue)}/`,
            component: tagTemplate,
            context: {
                tag: tag.fieldValue,
            },
        })
    })
}
