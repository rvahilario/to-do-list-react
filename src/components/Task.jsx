import React from 'react';
import { RiDeleteBinLine, RiInformationLine } from 'react-icons/ri';

import { ButtonTask, TaskContainer } from './styles';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
	return (
		<TaskContainer
			style={task.completed ? { borderLeft: '6px solid #0a7' } : {}}
		>
			<div onClick={() => handleTaskClick(task.id)}>{task.title}</div>
			<div>
				<ButtonTask onClick={() => handleTaskDeletion(task.id)}>
					<RiInformationLine />
				</ButtonTask>
				<ButtonTask onClick={() => handleTaskDeletion(task.id)}>
					<RiDeleteBinLine />
				</ButtonTask>
			</div>
		</TaskContainer>
	);
};

export default Task;
