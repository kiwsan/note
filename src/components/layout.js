import React from 'react'

import NavbarLeft from './navbar-left'
import NavbarRight from './navbar-right'
import NavbarTop from './navbar-top'
import NarbarBottom from './navbar-bottom'

import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyles.page__content}>
            <div className={layoutStyles.navbar__left}>
                <NavbarLeft />
            </div>

            <div className={layoutStyles.main__content}>
                <NavbarTop />

                <div className={layoutStyles.render__content}>
                    {props.children}
                </div>

                <NarbarBottom />
            </div>

            <div className={layoutStyles.navbar__right}>
                <NavbarRight />
            </div>
        </div>
    )
}

export default Layout
