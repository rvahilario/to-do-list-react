import React from 'react';
import { RiDeleteBinLine, RiInformationLine } from 'react-icons/ri';

import { RemoveTask, TaskContainer } from './styles';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
	return (
		<TaskContainer
			style={task.completed ? { borderLeft: '6px solid #0a7' } : {}}
		>
			<div onClick={() => handleTaskClick(task.id)}>{task.title}</div>
			<div>
				<RemoveTask onClick={() => handleTaskDeletion(task.id)}>
					<RiDeleteBinLine />
				</RemoveTask>
			</div>
		</TaskContainer>
	);
};

export default Task;
