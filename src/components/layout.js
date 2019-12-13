import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import layoutStyles from './layout.module.scss'
import NavbarLeft from './navbar-left'
import NavbarTop from './navbar-top'
import Footer from "./footer";

import topLogoImage from './images/top-logo.png'

const Layout = (props) => {
    return (

        <Container className={layoutStyles.page__container}>
            <Row>

                <Col sm={4}><NavbarLeft></NavbarLeft></Col>
                <Col sm={8}>

                    <img src={topLogoImage}/>

                    <NavbarTop></NavbarTop>

                    <div className="mt-5">
                        {props.children}
                    </div>

                    <div className="pt-4">
                        <Footer />
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default Layout
