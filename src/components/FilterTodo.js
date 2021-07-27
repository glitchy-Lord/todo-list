import React from 'react';

import classes from './FilterTodo.module.css';

const FilterTodo = (props) => {
	const filterChangeHandler = (event) => {
		props.onFilterChange(event.target.value);
	};
	return (
		<div className={classes.filter}>
			<select value={props.selectedFilter} onChange={filterChangeHandler}>
				<option value='all'>All</option>
				<option value='completed'>Completed</option>
				<option value='incomplete'>Incomplete</option>
			</select>
		</div>
	);
};

export default FilterTodo;
