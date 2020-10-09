import React, {Component} from 'react';
import './App.css';
import { v4 } from 'uuid'
import AddColorForm from './Components/AddColorForm'
import ColorList from './Components/ColorList'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { colors, sort, addColor, rateColor, removeColor } from './reducers'

let store

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		const initialState = {
			colors: [
				{ id: v4(), title: 'Ocean Blue', color: '#0000ff', rating: 0, timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)" },
				{ id: v4(), title: 'Lawn', color: '#7cfc00', rating: 0, timestamp: "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)" },
				{ id: v4(), title: 'Tomato', color: '#ff6347', rating: 0, timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)" },
			],
			sort: "SORTED_BY_TITLE"
		}
		this.addColor = this.addColor.bind(this)
		this.rateColor = this.rateColor.bind(this)
		this.removeColor = this.removeColor.bind(this)

		store = createStore(
			combineReducers({ colors, sort }),
			initialState
		)
		this.state = {
			colors: store.getState().colors
		}
		console.log(this.state)

		store.subscribe(() => 
			this.setState({ colors: store.getState().colors })
		)
	}

	addColor(title, color) {
		store.dispatch( addColor(title, color) )
		/*store.dispatch({
			type: "ADD_COLOR",
			id: v4(),
			title: title,
			color: color,
			timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
		})*/
		 
		/*const colors = [
			...this.state.colors,
			{
				id: v4(),
				title,
				color,
				rating: 0
			}
		]
		this.setState({colors})*/
	}

	rateColor(id, rating) {
		store.dispatch( rateColor(id, rating) )
		 
		/*const colors = this.state.colors.map(color =>
			(color.id !== id) ? color: {...color, rating}
		)
		this.setState({colors})*/
	}

	removeColor(id) {
		store.dispatch( removeColor(id) )
		const colors = this.state.colors.filter(
			color => color.id !== id
		)
		this.setState({colors})
	}

	render() {
		const { addColor, rateColor, removeColor } = this
		const { colors } = this.state

		return (
			<div className="app">
				<AddColorForm onNewColor={addColor}/>
				<ColorList colors={colors} 
					onRate={rateColor}
					onRemove={removeColor} />
			</div>
		)
	}
}

export default App;
