import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
				id: uuidv4(),
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
