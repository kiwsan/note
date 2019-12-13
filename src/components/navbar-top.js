import React from 'react'

import navbarTopStyles from './navbar-top.module.scss'

import notificationImage from './images/ic_notifications.png'
import searchImage from './images/ic_zoom.png'

import { Navbar, Nav } from 'react-bootstrap'

const NavbarTop = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="/">HOME</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">ABOUT</Nav.Link>
                    <Nav.Link href="/">CONTACT ME</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="https://github.com/kiwsan" target="_blank">GITHUB</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarTop
