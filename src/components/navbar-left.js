import React from 'react'

import PopularPost from '../templates/popular-post'

import navbarLeftStyles from './navbar-left.module.scss'

import profileImage from './images/profile.jpg'
import facebookImage from './images/facebook.png'
import twitterImage from './images/twitter.png'
import instagramImage from './images/instagram.png'

import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const NavbarLeft = () => {
    return (
        <div className={navbarLeftStyles.navbar_left}>
            <div className={navbarLeftStyles.profile__content}>
                <img src={profileImage} alt="Profile" className={navbarLeftStyles.circle__image} />
                <h2>NOTE FOR ME</h2>
                <p>
                    Web developer, currently focusing on Angular, Java, Kotlin, and .NET Technologies.
                </p>

                <div className={navbarLeftStyles.social__media}>
                    <a href="/"><img src={facebookImage} alt="Facebook"/></a>
                    <a href="/"><img src={instagramImage} alt="Instagram"/></a>
                    <a href="/"><img src={twitterImage} alt="Twitter"/></a>
                </div>
            </div>

            <InputGroup className="mt-4 mb-4">
                <FormControl
                    placeholder="Search..."
                    aria-label="Search..."
                    aria-describedby="search-addon"
                />
                <InputGroup.Append>
                     <Button variant="outline-secondary">
                        <FontAwesomeIcon icon={faSearch} />
                     </Button>
                </InputGroup.Append>
            </InputGroup>

            <PopularPost />
        </div>
    )
}

export default NavbarLeft
