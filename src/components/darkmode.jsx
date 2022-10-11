import React, { useState, setState } from "react";

import "../steel/darkmode.css"

class Darkmode extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            currentTheme: localStorage.getItem('theme') ? localStorage.getItem('theme') : null,
            darkmode: false
        }; 
    }

    switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }    
        this.setState({ darkmode: e.target.checked })
    }

    componentDidMount() {
        if (this.state.currentTheme) {
            document.documentElement.setAttribute('data-theme', this.state.currentTheme);
    
            if (this.state.currentTheme === 'dark') {
                this.setState({ darkmode: true })
            }
        }
    }

    render() {
        return (
            <div>
                <label className="switch">
                    <input type="checkbox" id="darkmode" checked={this.state.darkmode} onChange={(e) => this.switchTheme(e)} />
                    <span className="slider round"></span>
                </label>
                <div>
                    test
                </div>
                <div className="text-primary">
                    je suis primaire
                </div>
            </div>
        )
    }
};

export default Darkmode;