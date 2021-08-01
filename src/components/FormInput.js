import React, { useState } from 'react';

import classes from './FormInput.module.css';

const FormInput = (props) => {
	const [enteredTodo, setEnteredTodo] = useState('');
	const [isValid, setIsValid] = useState(true);

	const inputChangeHandler = (event) => {
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		}
		setEnteredTodo(event.target.value);
	};

	// const inputBlurHandler = () => {
	// 	if (enteredTodo.trim().length === 0) {
	// 		setIsValid(false);
	// 	}
	// };

	const submitHandler = (event) => {
		event.preventDefault();
		if (enteredTodo.trim().length === 0) {
			setIsValid(false);
			return;
		}
		props.onAddTodo(enteredTodo);

		setEnteredTodo('');
	};
	return (
		<form onSubmit={submitHandler}>
			<label htmlFor='addTodo'>Add a Todo</label>
			<div className={classes.addTodo}>
				<input
					type='text'
					id='addTodo'
					onChange={inputChangeHandler}
					// onBlur={inputBlurHandler}
					value={enteredTodo}
					className={`${!isValid && classes.invalid}`}
					autoFocus
				/>
				<button>
					<i className={`fa fa-plus ${classes['fa-plus']}`}></i>
				</button>
			</div>
			{!isValid && <p>Please enter a valid todo</p>}
		</form>
	);
};

export default FormInput;
