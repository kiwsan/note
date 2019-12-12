import React from 'react'

import { Link } from 'gatsby'

import navbarRightStyles from './navbar-right.module.scss'

import homeImage from './images/ic_home.png'
import menuImage from './images/ic_menu.png'
import coffeeImage from './images/ic_free_breakfast.png'
import settingImage from './images/ic_more_horizon.png'

const NavbarRight = () => {
    return (
        <div className={navbarRightStyles.navbar__right}>
            <div className={navbarRightStyles.menu__top}>
                <Link to="/"><img src={homeImage} alt="Home"></img></Link>
            </div>
            <div className={navbarRightStyles.menu__middle}>
                <div className={navbarRightStyles.menu__middle__content}>
                    <Link to="/"><img src={menuImage} alt="Menu 1"></img></Link>
                    <Link to="/"><img src={menuImage} alt="Menu 2"></img></Link>
                    <Link to="/"><img src={menuImage} alt="Menu 3"></img></Link>
                </div>
            </div>
            <div className={navbarRightStyles.menu__bottom}>
                <div className={navbarRightStyles.menu__bottom__content}>
                    <Link to="/"><img src={coffeeImage} alt="Coffee"></img></Link>
                    <Link to="/"><img src={settingImage} alt="Setting"></img></Link>
                </div>
            </div>
        </div>
    )
}

export default NavbarRight