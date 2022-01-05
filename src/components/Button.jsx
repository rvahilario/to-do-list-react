import React from 'react';
import { ButtonStyled } from './styles';

const Button = ({ nameButton, onClick }) => {
	return <ButtonStyled onClick={onClick}>{nameButton}</ButtonStyled>;
};

export default Button;
