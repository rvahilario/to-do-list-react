import React from 'react';
import { useParams } from 'react-router-dom';

import {
	BackButtonContainer,
	ButtonStyled,
	TaskDetailsContainer,
} from './styles';

const TaskDetails = () => {
	const params = useParams();

	return (
		<>
			<BackButtonContainer>
				<ButtonStyled>Voltar</ButtonStyled>
			</BackButtonContainer>
			<TaskDetailsContainer>
				<h2>{params.taskTitle}</h2>
				<p>
					Labore sunt quis deserunt sunt deserunt ea excepteur consequat esse.
					Aute elit minim aute in veniam duis amet ad aute voluptate aliqua
					aliqua. Irure eiusmod occaecat cupidatat elit elit tempor nisi amet.
					Ut ad irure cupidatat incididunt pariatur sint ea in aute mollit ad
					eiusmod. Consectetur aliquip tempor ea eiusmod consequat. Quis dolore
					esse exercitation deserunt cillum consequat. Dolore velit ut excepteur
					nostrud in nulla dolor quis nostrud.
				</p>
			</TaskDetailsContainer>
		</>
	);
};

export default TaskDetails;
