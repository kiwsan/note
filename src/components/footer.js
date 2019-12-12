import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer__content}>
      <p>© 2019 <a href="https://kiwsan.com/" target="_blank">{data.site.siteMetadata.author}</a>, personal blog</p>
    </footer>
  )
}

export default Footer