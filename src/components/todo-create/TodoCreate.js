import './TodoCreate.css';
import { useState } from 'react';

const TodoCreate = (props) => {
	const [getInputTodo, setInputTodo] = useState('')

	const handleInputTodo = (event) => {
		setInputTodo(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		// it will send to parent component which is Todo.js
		const newTodo = {
			id: Math.floor(Math.random() * 100) + 1,
			title: getInputTodo,
		}

		props.onCreateTodo(newTodo);
		setInputTodo('');
	}

	return (
		<form className="todo-form" onSubmit={handleSubmit}>
			<input type="text" value={getInputTodo} onChange={handleInputTodo} />	
			<button type="submit">Add</button>
		</form>
	)
}

export default TodoCreate;