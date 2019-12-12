import React from 'react'

import popularPostStyles from './popular-post.module.scss'
import Skeleton from '@material-ui/lab/Skeleton';

const PopularPost = () => {

    return (
        <div>
            <p>Popular post</p>

            <div>
                <Skeleton variant="text" />
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="rect" width={210} height={118} />
            </div>
        </div>
    )
}

export default PopularPost