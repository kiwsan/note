import React from 'react'

import navbarTopStyles from './navbar-top.module.scss'

import notificationImage from './images/ic_notifications.png'
import searchImage from './images/ic_zoom.png'

const NavbarTop = () => {
    return (
        <div className={navbarTopStyles.navbar__top}>
            <div className={navbarTopStyles.menu__left}>
                <a href="/">
                    <img src={notificationImage} alt="Notification"></img>
                </a>
            </div>
            <nav className={navbarTopStyles.menu__right}>
                <ul>
                    <li>
                        <a href="/">
                            <img src={searchImage} alt="Search"></img>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavbarTop