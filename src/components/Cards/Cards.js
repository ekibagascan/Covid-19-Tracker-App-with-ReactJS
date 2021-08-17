import React from 'react'
import { Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CardComponent from './Card/Card';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed){
        return 'Loading...';
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <CardComponent
                 className={styles.infected}
                 cardTitle="Infected"
                 valueData={confirmed.value}
                 lastUpdate={lastUpdate}
                 cardSubtitle="Number of active cases from COVID-19"
                 />
                <CardComponent
                 className={styles.recovered}
                 cardTitle="Recovered"
                 valueData={recovered.value}
                 lastUpdate={lastUpdate}
                 cardSubtitle="Number of recovered from COVID-19"
                 />
                <CardComponent
                 className={styles.deaths}
                 cardTitle="Deaths"
                 valueData={deaths.value}
                 lastUpdate={lastUpdate}
                 cardSubtitle="Number of deaths cases from COVID-19"
                 />
            </Grid>
        </div>
    )
}

export default Info
