import React from 'react'
import { Grid, Typography, CardContent, Card } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Card.module.css';

const CardComponent = ({ cardTitle, valueData, lastUpdate, cardSubtitle, className }) => {
    return (
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, className)}>
            <CardContent>
                <Typography color='textSecondary' gutterBottom>
                {cardTitle}
                </Typography>
                <Typography variant='h5' component='h2'>
                <CountUp start={0} end={valueData} duration={2.75} separator="," />
                </Typography>
                <Typography color='textSecondary'>
                {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant='body2' component='p'>
                {cardSubtitle}
                </Typography>
            </CardContent>
        </Grid>
    )
}

export default CardComponent
