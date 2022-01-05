import React, { useState } from 'react';

import Tasks from './components/Tasks';
import { MainContainer } from './components/styles';

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
			<Tasks tasks={tasks} />
		</MainContainer>
	);
};

export default App;
