import React, {Component} from 'react';
import './App.css';
import AddColorForm from './Components/AddColorForm'
import ColorList from './Components/ColorList'

const App = ({ store }) =>
	<div className="app">
		<AddColorForm store={store} />
		<ColorList store={store} />
	</div>
export default App
