import React from 'react';
import { useHistory } from 'react-router-dom';
import { RiDeleteBinLine, RiInformationLine } from 'react-icons/ri';

import { ButtonTask, TaskContainer } from './styles';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
	const history = useHistory();

	const handleDetailsClick = () => {
		history.push(`/${task.title}`);
	};

	return (
		<TaskContainer
			style={task.completed ? { borderLeft: '6px solid #0a7' } : {}}
		>
			<div onClick={() => handleTaskClick(task.id)}>{task.title}</div>
			<div>
				<ButtonTask onClick={() => handleDetailsClick()}>
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
