import React from 'react';

import { TaskContainer } from './styles';

const Task = ({ task }) => {
	return <TaskContainer>{task.title}</TaskContainer>;
};

export default Task;
