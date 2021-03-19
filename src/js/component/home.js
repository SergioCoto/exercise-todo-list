import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { ToDoList } from "./toDoList.js";
//create your first component
export function Home() {
	return (
		<>
			<ToDoList />
		</>
	);
}
