import React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import indexStyles from './index.module.scss';

const IndexPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title,
                            date
                        },
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Head title="Home" />
            <ol className={indexStyles.posts}>

                {data.allMarkdownRemark.edges.map((edge, index) => {

                    return (
                        <li key={index} className={indexStyles.post}>
                            <Link to={`/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )

                })}

            </ol>
        </Layout>
    )
}

export default IndexPage
