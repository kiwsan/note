import React from 'react'

import { Link } from 'gatsby'

import navbarBottomStyles from './navbar-bottom.module.scss'

import homeImage from './images/ic_home.png'
import settingImage from './images/ic_more_horizon.png'
import menuImage from './images/ic_menu.png'

const NavbarBottom = () => {
    return (
        <div className={navbarBottomStyles.navbar__bottom}>
            <div className={navbarBottomStyles.menu__left}>
                <Link to="/"><img src={homeImage} alt="Home"></img></Link>
            </div>
            <div className={navbarBottomStyles.menu__middle}>
                <Link to="/"><img src={menuImage} alt="Menu"></img></Link>
            </div>
            <div className={navbarBottomStyles.menu__right}>
                <Link to="/"><img src={settingImage} alt="Setting"></img></Link>
            </div>

        </div>
    )
}

export default NavbarBottom