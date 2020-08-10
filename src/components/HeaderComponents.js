import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px 24px;
	font-family: 'Roboto', sans-serif;
	background-color: #eeeced;
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: flex-end;
	align-items: 'center';
`;

const List = styled.ul`
	display: flex;
	flex-direction: row;
`;

const NavListItem = styled.li`
	display: flex;
	align-items: center;
	margin-right: 32px;
`;

const NavLink = styled.a`
	font-size: 13px;
	text-decoration: none;
	color: #3e3e3e;
	padding: 12px 0;
	:hover {
		color: #ea1d2c;
	}
`;

const LogoWrapper = styled.div`
	width: 100px;
	align-items: center;
	margin-top: 24px;
	margin-bottom: 72px;
`;

const Title = styled.h1`
	font-size: 30px;
	font-weight: 500;
	margin-bottom: 24px;
	letter-spacing: 2px;
`;

const SubTitle = styled.p`
	justify-self: 'center';
	margin-bottom: 24px;
`;

const Highlight = styled.em`
	color: #ea1d2c;
`;

const SearchContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SearchFieldWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	margin-bottom: 24px;
`;

const SearchField = styled.input`
	flex: 1;
	margin-right: 12px;
	border-radius: 4px;
	border: none;
	padding: 0 8px;
`;

const HashtagLink = styled.a`
	border: 1px solid #c6c6c6;
	margin: 8px;
	color: #717171;
	font-size: 12px;
	text-decoration: none;
	border-radius: 4px;
	padding: 4px;
`;

export {
	Container,
	Nav,
	List,
	NavListItem,
	NavLink,
	LogoWrapper,
	Title,
	SubTitle,
	Highlight,
	SearchContainer,
	SearchFieldWrapper,
	SearchField,
	HashtagLink,
};
