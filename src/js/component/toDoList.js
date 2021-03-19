import React, { useState } from "react";

export function ToDoList() {
	const [tasks, setTasks] = useState([]);
	const [task, setTask] = useState("");
	let array = tasks;

	const handleAddToList = event => {
		if (event.keyCode == 13 && task != "") {
			setTasks([...tasks, task]);
			setTask("");
		}
	};

	const handleRemoveToList = event1 => {
		const tempList = [...tasks];
		tempList.splice(event1, 1);
		setTasks(tempList);
	};

	return (
		<div className="card">
			<h1 className="todo-header">To do List</h1>
			<input
				type="text"
				placeholder="What needs to be done?"
				onChange={event => setTask(event.target.value)}
				value={task}
				onKeyUp={handleAddToList}
			/>

			<ul>
				{tasks.map((element, index) => (
					<li key={index}>
						{
							<span>
								<i
									className="fa fa-trash"
									type="button"
									onClick={() =>
										handleRemoveToList(index)
									}></i>
							</span>
						}
						{element}
					</li>
				))}
			</ul>
		</div>
	);
}
