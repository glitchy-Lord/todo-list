import React from 'react';
import TodoItem from './TodoItem';
import classes from './TodoList.module.css';

const TodoList = (props) => {
	const sortTodos = (todos, sortConfig) => {
		return todos.sort((todoA, todoB) => {
			// let date = todoA.date;
			// console.log(date);
			if (sortConfig === 'newest') {
				return todoA.date > todoB.date ? -1 : 1;
			} else {
				return todoA.date < todoB.date ? -1 : 1;
			}
		});
	};
	const sortedTodos = sortTodos(props.list, props.sortConfig);

	return (
		<ul className={classes.todoList}>
			{sortedTodos.map((item) => (
				<TodoItem
					id={item.id}
					key={item.id}
					onDelete={props.onDeleteTodo}
					onComplete={props.onCompleteTodo}
					isCompleted={item.isCompleted}>
					{item.text}
				</TodoItem>
			))}
		</ul>
	);
};

export default TodoList;
