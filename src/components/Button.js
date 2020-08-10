import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	font-size: 13px;
	padding: 12px 40px;
	border: 1px solid #c6c6c6;
	border-radius: 4px;
	text-decoration: none;
	cursor: pointer;
	background-color: ${props => props.bgColor ? props.bgColor : '#fff'};
	color: ${props => props.color ? props.color : '#ea1d2c'};
	:hover {
		background-color: ${props => props.hoverBgColor ? props.hoverBgColor : '#ea1d2c'};
		color: ${props => props.hoverColor ? props.hoverColor : '#fff'};
	}
`;

export default Button;
