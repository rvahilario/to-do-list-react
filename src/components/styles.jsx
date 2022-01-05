import styled from 'styled-components';

export const TaskContainer = styled.div`
	background-color: #444;
	margin: 8px 0;
	padding: 15px 20px;
	display: flex;
	border-radius: 5px;
	justify-content: space-between;
	color: #eee;
	align-items: center;
	cursor: pointer;
`;

export const MainContainer = styled.div`
	max-width: 500px;
	margin: 30px auto;
	overflow: auto;
	min-height: 300px;
	border: 2px solid #0a7;
	padding: 30px;
	border-radius: 10px;
`;

export const AddTaskContainer = styled.div`
	margin: 15px 0;
	width: 100%;
	display: flex;
`;

export const AddTaskInput = styled.input`
	height: 40px;
	padding: 0 10px;
	border-radius: 5px;
	border: none;
	flex: 2;
	background-color: #444;
	color: #eee;
	font-size: 16px;
`;

export const ButtonStyled = styled.button`
	background-color: #0a7;
	height: 40px;
	padding: 0 10px;
	border-radius: 5px;
	width: 100%;
	font-size: 16px;
	color: #444;
	font-weight: bold;
	cursor: pointer;
	border: none;
`;

export const AddButtonContainer = styled.div`
	margin-left: 10px;
	flex: 1;
`;
