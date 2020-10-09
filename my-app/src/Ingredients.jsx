import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';

const liStyle= {
	color: 'red'
}

const Ingredients = ({ingredients}) => (
	<ul>
		{ingredients.map((ingredient,i) => 
			<li key={i}>
				{ingredient.amount} {ingredient.measurement} of {ingredient.name}
			</li>
		)}
	</ul>
)

export default Ingredients