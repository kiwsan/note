import React from 'react'

import Layout from '../components/layout'

import { Link } from 'gatsby'

import notFoundStyles from './404.module.scss'
import SEO from "../components/seo";

const NotFound = () => {

    return (
        <Layout>
            <SEO title="Page not found." />

            <h2>Page not found.</h2>
            <Link className={notFoundStyles.link} to="/">back to home page</Link>
        </Layout>
    )
}

export default NotFound
