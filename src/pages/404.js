import React from 'react'

import Layout from '../components/layout'

import { Link } from 'gatsby'

import notFoundStyles from './404.module.scss'

const NotFound = () => {

    return (
        <Layout>
            <h2>Page not found.</h2>
            <Link className={notFoundStyles.link} to="/">back to home page</Link>
        </Layout>
    )
}

export default NotFound