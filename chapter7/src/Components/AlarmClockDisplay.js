import React from 'react';
import ReactDOM from 'react-dom';

const AlarmClockDisplay = ({hours, minutes, seconds, ampm}) =>
	<div className="clock">
		<span>{hours}</span>
		<span>:</span>
		<span>{minutes}</span>
		<span>:</span>
		<span>{seconds}</span>
		<span>{ampm}</span>
	</div>

const oneSecond = () => 1000
const getCurrentTime = () => new Date()
const clear = () => console.clear()
const log = message => console.log(message)

const compose = (...fns) =>
 (arg) =>
	fns.reduce(
		(composed, f) => f(composed),
	arg
) 

const serializeClockTime = date => ({
	hours: date.getHours(),
	minutes: date.getMinutes(),
	seconds: date.getSeconds()
})

const civilianHours = clockTime => ({
	...clockTime,
	hours: (clockTime.hours > 12) ?
	clockTime.hours - 12 :
	clockTime.hours
})

const appendAMPM = clockTime => ({
	...clockTime,
	ampm: (clockTime.hours >= 12) ? "PM" : "AM"
})

const display = target => time => target(time)

const formatClock = format =>
	time =>
		format.replace("hh", time.hours)
		.replace("mm", time.minutes)
		.replace("ss", time.seconds)
		.replace("tt", time.ampm)

const prependZero = key => clockTime => ({
	...clockTime,
	[key]: (clockTime[key] < 10) ?
		"0" + clockTime[key] :
		clockTime[key]
})

const convertToCivilianTime = clockTime =>
	compose(
		appendAMPM,
		civilianHours
	)(clockTime)

const doubleDigits = civilianTime =>
	compose(
		prependZero("hours"),
		prependZero("minutes"),
		prependZero("seconds")
	)(civilianTime)

const startTicking = () =>
	setInterval(
		compose(
			clear,
			getCurrentTime,
			serializeClockTime,
			convertToCivilianTime,
			doubleDigits,
			formatClock("hh:mm:ss tt"),
			render(AlarmClockDisplay)
		),
		oneSecond()
	)

const render = Component => civilianTime =>
	<Component {...civilianTime} />

export { startTicking };
