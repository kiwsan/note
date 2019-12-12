import React from 'react'

import Suggestion from './suggestion'
import Footer from './footer'

import navbarLeftStyles from './navbar-left.module.scss'

import profileImage from './images/profile.jpg'
import facebookImage from './images/facebook.png'
import twitterImage from './images/twitter.png'
import instagramImage from './images/instagram.png'

const NavbarLeft = () => {
    return (
        <div className={navbarLeftStyles.navbar_left}>
            <div className={navbarLeftStyles.profile__content}>
                <img src={profileImage} alt="Profile" className={navbarLeftStyles.circle__image} />
                <h2>Notes for me</h2>
                <p>
                    Web developer, currently focusing on Angular, Java, Kotlin, and .NET Technologies.
                </p>

                <div className={navbarLeftStyles.social__media}>
                    <a href="/"><img src={facebookImage} alt="Facebook"></img></a>
                    <a href="/"><img src={instagramImage} alt="Instagram"></img></a>
                    <a href="/"><img src={twitterImage} alt="Twitter"></img></a>
                </div>
            </div>

            <Suggestion />
            <Footer />
        </div>
    )
}

export default NavbarLeft