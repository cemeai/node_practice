import React from 'react';
import './App.css';
// import { unmountComponentAtNode } from 'react-dom'
import { HISTORIC_DATA_SKIING } from './constants'
// import MemberList from './Components/MemberList'
// import Clock from './Components/Clock'
import HiddenMessages from './Components/HiddenMessages'
import DataComponent from './Components/DataComponent'
import Timeline from './Components/Timeline'
import CountdownContainer from './Components/CountdownContainer'
import { startTicking } from './Components/AlarmClockDisplay'

// const target = document.getElementById('root')

const PeopleList = ({data}) =>
	<ol className="people-list">
		{console.log(data)}
		{data.results.map((person, i) => {
			const {first, last} = person.name
			return <li key={i}>{first} {last}</li>
		})}
	</ol>

//how to pass the count???
const RandomMeUsers = DataComponent(PeopleList, 
	`https://randomuser.me/api/?`)

//startTicking()

function App() {
  return (
    <div className="App">
			<CountdownContainer count={10} />
    </div>
  );
}

/*return (
	<div className="App">
		<Timeline name="History of Skiing" data={HISTORIC_DATA_SKIING} />
		<RandomMeUsers params={{results: 10}} />
		<HiddenMessages />
	</div>
);*/

export default App;
