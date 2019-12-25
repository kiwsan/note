import React from 'react'

import popularPostStyles from './popular-post.module.scss'
import Skeleton from '@material-ui/lab/Skeleton';

import {Row, Col} from 'react-bootstrap'
import Footer from "../components/footer";

const PopularPost = () => {

    return (
        <div>
            
            <p>Popular post</p>

            <Row>
                <Col sm={4} className="mb-2">
                    <Skeleton variant="rect" height={80}/>
                </Col>
                <Col sm={8} className="mb-2">
                    <Skeleton variant="text" />
                    <Skeleton variant="text" width="80%"/>
                </Col>

                <Col sm={4} className="mb-2">
                    <Skeleton variant="rect" height={80}/>
                </Col>
                <Col sm={8} className="mb-2">
                    <Skeleton variant="text" />
                    <Skeleton variant="text" width="80%"/>
                </Col>

                <Col sm={4} className="mb-2">
                    <Skeleton variant="rect" height={80}/>
                </Col>
                <Col sm={8} className="mb-2">
                    <Skeleton variant="text" />
                    <Skeleton variant="text" width="80%"/>
                </Col>
            </Row>

        </div>
    )
}

export default PopularPost
