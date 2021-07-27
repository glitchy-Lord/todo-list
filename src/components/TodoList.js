import React from 'react';
import TodoItem from './TodoItem';
import classes from './TodoList.module.css';

const TodoList = (props) => {
	return (
		<ul className={classes.todoList}>
			{props.list.map((item) => (
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
