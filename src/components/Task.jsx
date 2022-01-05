import React from 'react';

import { TaskContainer } from './styles';

const Task = ({ task, handleTaskClick }) => {
	return (
		<TaskContainer
			onClick={() => handleTaskClick(task.id)}
			style={task.completed ? { borderLeft: '6px solid #0a7' } : {}}
		>
			{task.title}
		</TaskContainer>
	);
};

export default Task;
