import React, { Component } from 'react'
class Clicker extends Component {
	constructor(props) {
		super(props);
		// Initialize component state
		this.state = {
			clicks: 0
		};
		// bind function to give it access to this.setState
		this.incrementComponentClicks = this.incrementComponentClicks.bind(this);
	}
	incrementComponentClicks(ev) {
		ev.preventDefault();
		this.setState({
			// increment component state
			clicks: (this.state.clicks + 1)
		}, () => {
			// if props.incrementAppClicks is a function, let's execute it
			if (typeof this.props.incrementAppClicks === 'function') this.props.incrementAppClicks();
		})
	}
	render() {
		return <button onClick={this.incrementComponentClicks}>Mine ({this.state.clicks})</button>
	}
}

export default Clicker
