import React from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';

const liStyle= {
	color: 'red'
}

const Instructions = ({title, steps}) => (
	<div>
		<h4>{title}</h4>
		{steps.map((step,i) => 
			<p key={i}>{step}</p>
		)}
	</div>
)

export default Instructions