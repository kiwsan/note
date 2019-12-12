import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import suggestionStyles from './suggestion.module.scss'

const Suggestion = () => {
    return (
        <div className={suggestionStyles.suggestion__content}>
            <h5>Suggestion</h5>
        </div>
    )
}

export default Suggestion