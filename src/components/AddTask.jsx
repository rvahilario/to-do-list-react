import React, { useState } from 'react';
import Button from './Button';
import {
	AddTaskContainer,
	AddTaskInput,
	AddButtonContainer,
	ButtonStyled,
} from './styles';

const AddTask = ({ handleTaskAddition }) => {
	const [inputData, setInputData] = useState('');

	const handleInputChange = (e) => {
		setInputData(e.target.value);
	};

	const handleAddTaskClick = () => {
		handleTaskAddition(inputData);
		setInputData('');
	};

	return (
		<AddTaskContainer>
			<AddTaskInput
				onChange={handleInputChange}
				value={inputData}
				type="text"
			/>
			<AddButtonContainer>
				<ButtonStyled onClick={handleAddTaskClick}>Adicionar</ButtonStyled>
			</AddButtonContainer>
		</AddTaskContainer>
	);
};

export default AddTask;
