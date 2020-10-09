import React, { Component } from 'react';
import Color from './Color'
import PropTypes from 'prop-types'
import { rateColor, removeColor } from '../reducers'

const ColorList = ({ store }) => {
	const { colors, sort } = store.getState()
	const sortedColors = [...colors]
	return (
		<div className="color-list">
			{(colors.length === 0) ?
				<p>No Colors Listed. (Add a Color)</p> :
				sortedColors.map(color =>
					<div style={{display: 'inline-block', minWidth: '45%', margin: '0 2%'}}>
						<Color key={color.id} {...color}
							onRate={(rating) => store.dispatch(rateColor(color.id, rating))}
							onRemove={() => store.dispatch(removeColor(color.id))} />
					</div>
				)
			}
		</div>
	)
}

ColorList.propTypes = {
	store: PropTypes.object
}

export default ColorList
