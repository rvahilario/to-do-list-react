import React from 'react';
import { useHistory } from 'react-router-dom';
import { RiDeleteBinLine, RiInformationLine } from 'react-icons/ri';

import {
	ButtonTask,
	TaskContainer,
	TaskButtonContainer,
	TaskTitle,
} from './styles';

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
	const history = useHistory();

	const handleDetailsClick = () => {
		history.push(`/${task.id}/${task.title}`);
	};

	return (
		<TaskContainer
			style={task.completed ? { borderLeft: '6px solid #0a7' } : {}}
		>
			<TaskTitle onClick={() => handleTaskClick(task.id)}>
				{task.title}
			</TaskTitle>
			<TaskButtonContainer>
				<ButtonTask onClick={() => handleDetailsClick()}>
					<RiInformationLine />
				</ButtonTask>
				<ButtonTask onClick={() => handleTaskDeletion(task.id)}>
					<RiDeleteBinLine />
				</ButtonTask>
			</TaskButtonContainer>
		</TaskContainer>
	);
};

export default Task;
