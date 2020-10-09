import { v4 } from 'uuid'

const stateData = {
	colors: [
		{ id: v4(), title: 'Ocean Blue', color: '#0000ff', rating: 0, timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)" },
		{ id: v4(), title: 'Lawn', color: '#7cfc00', rating: 0, timestamp: "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)" },
		{ id: v4(), title: 'Tomato', color: '#ff6347', rating: 0, timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)" },
	],
	sort: "SORTED_BY_TITLE"
}

export default stateData
