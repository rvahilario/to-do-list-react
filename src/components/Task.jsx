import React from 'react';

import { RemoveTask, TaskContainer } from './styles';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
	return (
		<TaskContainer
			style={task.completed ? { borderLeft: '6px solid #0a7' } : {}}
		>
			<div onClick={() => handleTaskClick(task.id)}>{task.title}</div>
			<div>
				<RemoveTask onClick={() => handleTaskDeletion(task.id)}>X</RemoveTask>
			</div>
		</TaskContainer>
	);
};

export default Task;
