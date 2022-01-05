import React, { useState } from 'react';

import { MainContainer } from './components/styles';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
	const [tasks, setTasks] = useState([
		{
			id: '1',
			title: 'Estudar Programação',
			completed: false,
		},
		{
			id: '2',
			title: 'Ler Livros',
			completed: true,
		},
	]);

	return (
		<MainContainer>
			<AddTask />
			<Tasks tasks={tasks} />
		</MainContainer>
	);
};

export default App;
