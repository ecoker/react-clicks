import * as React from "react";
import { Component } from 'react';
import 'Styles/App.scss';
import Clicker from 'Components/Clicker.jsx'

class App extends Component {
    constructor(props) {
		super(props)
		this.state = {
			appClicks: 0
		}
		this.incrementAppClicks = this.incrementAppClicks.bind(this)
	}
	incrementAppClicks() {
    	this.setState({
      		appClicks: (this.state.appClicks + 1)
    	})
  	}
	render() {
        return (
            <div className="app">
				<h1>Total: { this.state.appClicks }</h1>
				<Clicker incrementAppClicks={ this.incrementAppClicks }/>
				<Clicker incrementAppClicks={ this.incrementAppClicks }/>
				<Clicker incrementAppClicks={ this.incrementAppClicks }/>
			</div>
        );
    }
}

export default App;