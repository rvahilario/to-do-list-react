import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainContainer } from './components/styles';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';

const App = () => {
	const [tasks, setTasks] = useState([]);

	const handleTaskClick = (taskId) => {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) return { ...task, completed: !task.completed };

			return task;
		});

		setTasks(newTasks);
	};

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

	const handleTaskDeletion = (taskId) => {
		const newTasks = tasks.filter((task) => task.id !== taskId);

		setTasks(newTasks);
	};

	return (
		<BrowserRouter>
			<MainContainer>
				<Header />
				<Routes>
					<Route
						path="/"
						exact
						render={() => (
							<>
								<AddTask handleTaskAddition={handleTaskAddition} />
								<Tasks
									tasks={tasks}
									handleTaskClick={handleTaskClick}
									handleTaskDeletion={handleTaskDeletion}
								/>
							</>
						)}
					/>
				</Routes>
			</MainContainer>
		</BrowserRouter>
	);
};

export default App;
