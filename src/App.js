import React, { useState, useEffect } from 'react';
import './App.css';
import FilterTodo from './components/FilterTodo';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList';

function App() {
	const getLocalStorage = () => {
		const todoList = localStorage.getItem('todoList');

		return todoList ? JSON.parse(todoList) : [];
	};

	const [todoList, setTodoList] = useState(getLocalStorage());
	const [filterTodo, setFilterTodo] = useState('all');

	console.log(JSON.stringify(todoList));

	useEffect(() => {
		localStorage.setItem('todoList', JSON.stringify(todoList));
	}, [todoList]);

	const addTodoHandler = (inputTodo) => {
		setTodoList((prevState) => {
			const updatedList = [...prevState];
			updatedList.unshift({
				text: inputTodo,
				id: Math.random().toString(),
				isCompleted: false,
			});
			return updatedList;
		});
	};

	const deleteTodoHandler = (id) => {
		setTodoList((prevState) => {
			const updatedList = prevState.filter((item) => item.id !== id);
			// console.log(updatedList);
			return updatedList;
		});
	};

	const completeTodoHandler = (id) => {
		setTodoList((prevState) => {
			const updatedList = prevState.map((item) => {
				if (item.id === id) {
					return { ...item, isCompleted: !item.isCompleted };
				}
				return item;
			});

			return updatedList;
		});
	};

	const filterChangeHandler = (filter) => {
		setFilterTodo(filter);
	};

	const filteredTodo = todoList.filter((todo) => {
		if (filterTodo === 'all') {
			return todo;
		} else if (filterTodo === 'completed') {
			return todo.isCompleted === true;
		} else {
			return todo.isCompleted === false;
		}
	});

	return (
		<div className='App'>
			<FormInput onAddTodo={addTodoHandler} />
			<div className='container'>
				{todoList.length > 0 && (
					<FilterTodo
						onFilterChange={filterChangeHandler}
						selectedFilter={filterTodo}
					/>
				)}
				{todoList.length > 0 ? (
					<TodoList
						list={filteredTodo}
						onDeleteTodo={deleteTodoHandler}
						onCompleteTodo={completeTodoHandler}
					/>
				) : (
					<h3>No Todo found. Add one?</h3>
				)}
			</div>
		</div>
	);
}

export default App;
