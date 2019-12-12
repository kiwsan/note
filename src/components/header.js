import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">
      <h1 className={headerStyles.title}>{data.site.siteMetadata.title}</h1>
                        </Link>      
      <nav>
        <ul className={headerStyles.navList}>
          <li>

          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header