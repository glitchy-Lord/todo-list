import React from 'react';

const FilterTodo = (props) => {
	const filterChangeHandler = (event) => {
		props.onFilterChange(event.target.value);
	};
	return (
		<>
			<select value={props.selectedFilter} onChange={filterChangeHandler}>
				<option value='all'>All</option>
				<option value='completed'>Completed</option>
				<option value='incomplete'>Incomplete</option>
			</select>
		</>
	);
};

export default FilterTodo;
