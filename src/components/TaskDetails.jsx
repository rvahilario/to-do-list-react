import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import {
	BackButtonContainer,
	ButtonStyled,
	TaskDetailsContainer,
	TaskDetailsTitle,
	TaskDescription,
} from './styles';

const TaskDetails = () => {
	const params = useParams();
	const history = useHistory();

	const handleBackButtonClick = () => {
		history.goBack();
	};

	return (
		<>
			<BackButtonContainer>
				<ButtonStyled onClick={handleBackButtonClick}>Voltar</ButtonStyled>
			</BackButtonContainer>
			<TaskDetailsContainer>
				<TaskDetailsTitle>{params.taskTitle}</TaskDetailsTitle>
				<TaskDescription>
					Labore sunt quis deserunt sunt deserunt ea excepteur consequat esse.
					Aute elit minim aute in veniam duis amet ad aute voluptate aliqua
					aliqua. Irure eiusmod occaecat cupidatat elit elit tempor nisi amet.
					Ut ad irure cupidatat incididunt pariatur sint ea in aute mollit ad
					eiusmod. Consectetur aliquip tempor ea eiusmod consequat. Quis dolore
					esse exercitation deserunt cillum consequat. Dolore velit ut excepteur
					nostrud in nulla dolor quis nostrud.
				</TaskDescription>
			</TaskDetailsContainer>
		</>
	);
};

export default TaskDetails;
