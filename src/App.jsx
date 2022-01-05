import React, { useState } from 'react';

import { MainContainer } from './components/styles';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
	const [tasks, setTasks] = useState([]);

	const handleTaskAddition = (taskTitle) => {
		const newTasks = [
			...tasks,
			{
				title: taskTitle,
				id: Math.random(10),
				completed: false,
			},
		];

		setTasks(newTasks);
	};

	return (
		<MainContainer>
			<AddTask handleTaskAddition={handleTaskAddition} />
			<Tasks tasks={tasks} />
		</MainContainer>
	);
};

export default App;
