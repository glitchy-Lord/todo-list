import React from 'react';

const SortTodo = (props) => {
	const sortChangeHandler = (event) => {
		props.onSortChange(event.target.value);
	};
	return (
		<>
			<select value={props.selectedSort} onChange={sortChangeHandler}>
				<option value='newest'>Newest</option>
				<option value='oldest'>Oldest</option>
			</select>
		</>
	);
};

export default SortTodo;
