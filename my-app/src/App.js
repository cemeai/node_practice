import React from 'react';
import './App.css';
import AddColorForm from './Components/AddColorForm'

function App() {

	const logColor = (title, color) =>
		console.log(`New Color: ${title} | ${color}`)
  return (
		<AddColorForm 
			onNewColor={logColor}/>
  );
}

export default App;
