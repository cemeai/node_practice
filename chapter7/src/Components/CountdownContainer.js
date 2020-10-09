import React from 'react'
import ReactDOM from 'react-dom';
import { Dispatcher } from 'flux'
import { EventEmitter } from 'events'
import Countdown from './Countdown'

class CountdownDispatcher extends Dispatcher {

	handleAction(action) {
		console.log('dispatching action:', action)

		this.dispatch({
			source: 'VIEW_ACTION',
			action
		})
	}
}

class CountdownStore extends EventEmitter {

	constructor(count = 5, dispatcher) {
		super()
		this._count = count
		this.dispatcherIndex = dispatcher.register(
			this.dispatch.bind(this)
		)
	}

	get count() {
		return this._count
	}

	dispatch(payload) {
		const { type, count } = payload.action

		switch(type) {

			case "TICK":
				this._count = this._count - 1
				this.emit("TICK", this._count)
				return true

			case "RESET":
				this._count = count
				this.emit("RESET", this._count)
				return true
		}
	}
}

const CountdownContainer = ({count, tick, reset}) => {

	let aux_count = count

	const countdownActions = dispatcher =>
	({
		tick(currentCount) {
			dispatcher.handleAction({
				type: 'TICK',
				count: currentCount - 1
			})
		},
		reset(count) {
			dispatcher.handleAction({
				type: 'RESET',
				count
			})
		}
	})

	const appDispatcher = new CountdownDispatcher()
	const actions = countdownActions(appDispatcher)
	const store = new CountdownStore(count, appDispatcher)

	//console.log(count)
	/*const render = count => ReactDOM.render(
		<Countdown count={count} {...actions} />,
		document.getElementById('react-container')
	)*/

	store.on("TICK", () => aux_count = store.count)
	store.on("RESET", () => aux_count = store.count)

	return (
		<Countdown count={aux_count} {...actions} />
	)
}

export default CountdownContainer;