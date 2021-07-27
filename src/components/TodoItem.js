import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem = (props) => {
	const deleteHandler = () => {
		props.onDelete(props.id);
	};

	const completeHandler = () => {
		props.onComplete(props.id);
	};

	return (
		<li className={classes.todoItem}>
			<span className={`${props.isCompleted && classes.completed}`}>
				<span>{props.children}</span>
			</span>
			<div>
				<button type='button' onClick={completeHandler}>
					<i
						className={`fa fa-check ${classes['fa-check']} ${
							props.isCompleted && classes['fa-check-completed']
						}`}></i>
				</button>
				<button type='button' onClick={deleteHandler}>
					<i className={`fa fa-trash ${classes['fa-trash']}`}></i>
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
