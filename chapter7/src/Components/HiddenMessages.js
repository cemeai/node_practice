import React, { Component } from 'react'
import { MESSAGES } from '../constants'
import Expandable from './Expandable'

const ShowHideMessage = ({children, collapsed, hide, expandCollapse}) =>
	<p onClick={expandCollapse} style={{cursor: 'pointer'}}>
		{(collapsed) ?
			children.replace(/[a-zA-Z0-9]/g, "x") :
			children}
	</p>
const HiddenMessage = Expandable(ShowHideMessage)

class HiddenMessages extends Component {
	constructor(props) {
		super(props)
		this.state = {
			messages: MESSAGES,
			showing: -1
		}
	}
 
	componentWillMount() {
		this.interval = setInterval(() => {
			let { showing, messages } = this.state
			showing = (++showing >= messages.length) ?
			-1 :
			showing
			this.setState({showing})
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	render() {
		const { messages, showing } = this.state
		return (
			<div className="hidden-messages">
				{messages.map((message, i) =>
					<HiddenMessage key={i}
						hide={(i!==showing)}>
						{message}
					</HiddenMessage>
				)}
			</div>
		)
	}
}

export default HiddenMessages;
