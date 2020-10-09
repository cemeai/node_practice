import React, {Component} from 'react';

const Expandable = ComposedComponent =>
	class Expandable extends Component {

		constructor(props) {
			super(props)
			const collapsed = (props.hidden && props.hidden === true) ?
												true : false
			this.state = {collapsed}
			this.expandCollapse = this.expandCollapse.bind(this)
		}

		expandCollapse() {
			let collapsed = !this.state.collapsed
			this.setState({collapsed})
		}

		render() {
			return (
				<ComposedComponent {...this.state} {...this.props} 
					expandCollapse={this.expandCollapse}
				/>
			)
		}
	}

export default Expandable