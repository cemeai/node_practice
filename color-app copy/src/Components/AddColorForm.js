import React from 'react';			

const AddColorForm = ({onNewColor=f=>f}) => {

	let _title, _color

	const submit = e => {
		e.preventDefault();
		onNewColor(_title.value, _color.value)
		_title.value = '';
		_color.value = '#000000';
		_title.focus();
	}
	
	return (
		<form onSubmit={submit}>
			<input 
				style={{width:'70%', height: '30px'}}
				ref={input => _title = input}
				type="text" 
				placeholder="color title..." 
				required/>
			<input
				style={{width:'10%', height: '30px'}}
				ref={input => _color = input}
				type="color" 
				required/>
			<button
				style={{width:'10%', height: '30px'}}
			>ADD</button>
		</form>
	)
}

export default AddColorForm