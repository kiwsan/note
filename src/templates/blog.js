import React from 'react'
import {graphql} from 'gatsby'

import blogStyles from './blog.module.scss'

import Layout from '../components/layout'

import Head from '../components/head'
import SEO from "../components/seo";

export const query = graphql`
query (
    $slug: String!
  ){
    markdownRemark(
      fields: {
        slug: {
          eq: $slug
        }
      }
    ){
      frontmatter{
        title,
        date
      },
      html
    }
  }
`

const Blog = (props) => {
    const title = props.data.markdownRemark.frontmatter.title;

    return (
        <Layout>
            <SEO title={title} keywords={[`blog`]} />
            <Head title={title}/>

            <div className={blogStyles.blog__content}>

                <h1>{title}</h1>
                <p>{props.data.markdownRemark.frontmatter.date}</p>

                <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
            </div>
        </Layout>
    )
}

export default Blog
