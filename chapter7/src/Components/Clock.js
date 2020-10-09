import React, { Component } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { getClockTime } from '../lib/clock'

console.log(getClockTime())

class Clock extends Component {
	constructor() {
		super()
		this.state = {
			clock: getClockTime()
		}
	}

	componentDidMount() {
		console.log("Starting Clock")
		this.ticking = setInterval(() =>
			this.setState({clock: getClockTime()})
			, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.ticking)
		console.log("Stopping Clock")
	}

	render() {
		const clock = this.state.clock
		return (
			<div className="clock">
				<span>{clock}</span>	
				<button onClick={this.props.onClose}>x</button>
			</div>
		)
	} 
}

export default Clock;
