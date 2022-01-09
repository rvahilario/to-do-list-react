import React from 'react';

import Task from './Task';
import { TasksStyled } from './styles';

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
	return (
		<TasksStyled>
			{tasks.map((task) => (
				<Task
					key={task.id}
					task={task}
					handleTaskClick={handleTaskClick}
					handleTaskDeletion={handleTaskDeletion}
				/>
			))}
		</TasksStyled>
	);
};

export default Tasks;
