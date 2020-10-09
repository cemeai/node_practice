import C from "./constants"
import { v4 } from 'uuid'

export const color = (state={}, action) => {
	switch (action.type) {
		case C.ADD_COLOR:
			return {
				id: action.id,
				title: action.title,
				color: action.color,
				timestamp: action.timestamp,
				rating: 0
			}
		case C.RATE_COLOR:
			return (state.id !== action.id) ?
				state :
				{
					...state,
					rating: action.rating
				}
		default :
			return state
	}
}

export const colors = (state = [], action) => {
	switch (action.type) {
		case C.ADD_COLOR :
			return [
				...state,
				color({}, action)
			]
		case C.RATE_COLOR :
			return state.map(
				c => color(c, action)
			)
		case C.REMOVE_COLOR :
			return state.filter(
				c => c.id !== action.id
			)
		default:
			return state
	}
}

export const sort = (state="SORTED_BY_DATE", action) => {
	switch (action.type) {
		case C.SORT_COLORS:
			return action.sortBy
				default :
				return state
	}
}

export const removeColor = id => ({
	type: C.REMOVE_COLOR,
	id
})

export const rateColor = (id, rating) => ({
	type: C.RATE_COLOR,
	id,
	rating
})

export const addColor = (title, color) => ({
	type: C.ADD_COLOR,
	id: v4(),
	title,
	color,
	timestamp: new Date().toString()
})
