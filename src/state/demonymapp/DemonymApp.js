import React, { Component } from 'react';
import './demonymApp.css'

import Demonym from './Demonym';
import CountrySelector from './CountrySelector';


class DemonymApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            selected: null
        };
    }
    setSelected(selected) {
        this.setState({
            selected
        });
    }
    componentDidMount() {
        fetch('https://country.register.gov.uk/records.json?page-size=5000')
            .then(response => response.json())
            .then(data => {
                const countries = Object.keys(data)
                    .map(key => data[key].item[0]);
                this.setState({
                    countries
                });
            })
            .catch(err => {
                // this catch handles the error condition
                this.setState({
                    error: err.message
                });
            });
    }
    
    render() {
        const demon = this.state.selected
            ? <Demonym name={this.state.selected['citizen-names']} country={this.state.selected.name} />
            : <div className="demonym_app__placeholder">Select a country above</div>;

        const error = this.state.error
            ? <div className="demonym_app__error">{this.state.error}</div>
            : "";

        return (
            <div className="demonym_app">
                <CountrySelector countries={this.state.countries} changeHandler={selected => this.setSelected(selected)} />
                {demon}
            </div>
        );
    }
}

export default DemonymApp;