import React from 'react'

import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import image from './images/image.png';
import styles from './App.module.css';

class App extends React.Component {
state = {
    data: {},
    country: ''
    }

    async componentDidMount(){
        const data = await fetchData();

        this.setState({ data })
    }

    handleCountryChange = async (country) => {
        console.log(country)
        const data = await fetchData(country);
        console.log(data)
        
        this.setState({ data, country: country })
    }

    render() {
        const { data, country } = this.state;

       return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt='COVID19' />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div> 
        )
    }
}

export default App
