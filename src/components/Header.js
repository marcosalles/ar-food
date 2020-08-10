import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import {
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
} from './HeaderComponents';

class Header extends React.Component {

	render() {
		const tiposDeComida = [
			'lasanha',
			'abobrinha',
			'brigadeiro',
			'quindin',
			'quiabo',
			'torresmo',
			'pão de queijo',
			'batata frita',
		];
		const tipoDeComida = tiposDeComida[Math.floor(Math.random() * tiposDeComida.length)];
		return (
			<Container>
				<Nav>
					<List>
						<NavListItem><NavLink href="#">Entregador</NavLink></NavListItem>
						<NavListItem><NavLink href="#">Restaurante</NavLink></NavListItem>
						<NavListItem><NavLink href="#">Carreiras</NavLink></NavListItem>
						<NavListItem><NavLink href="#">iFood Empresas</NavLink></NavListItem>
					</List>
					<Button>Entrar</Button>
				</Nav>
				<LogoWrapper>{Logo}</LogoWrapper>
				<SearchContainer>
					<Title>Nunca foi tão fácil pedir <Highlight>{tipoDeComida}</Highlight></Title>
					<SubTitle>Descubra restaurantes e mercados perto de você</SubTitle>
					<SearchFieldWrapper>
						<SearchField placeholder="Buscar endereço e número"/>
						<Button color="#fff" bgColor="#ea1d2c" hoverBgColor="#ca0d0c">Buscar</Button>
					</SearchFieldWrapper>
					<List>
						<li><HashtagLink href="">#mercado</HashtagLink></li>
						<li><HashtagLink href="">#pizza</HashtagLink></li>
						<li><HashtagLink href="">#lanche</HashtagLink></li>
						<li><HashtagLink href="">#comidajaponesa</HashtagLink></li>
						<li><HashtagLink href="">#comidaarabe</HashtagLink></li>
					</List>
				</SearchContainer>
			</Container>
		);
	}
}

export default Header;

const Logo = (<svg class="icon-brand icon-brand--primary" viewBox="0 0 95 51" fill="#ea1d2c" xmlns="http://www.w3.org/2000/svg"><path d="M0 28.7h7.2l4-19.9H4L0 28.7zM5.5 7H14l1.4-7H6.9L5.5 7zM10 34.3h7.2l4.4-21.5H27l.8-4h-5.3l.2-.9c.3-1.7.9-3.6 3.6-3.6 1.6 0 3.1.1 4.6.8l.8-4.2C30 .3 28.2 0 26.5 0c-5.8 0-9.8 3.4-11.3 8.8h-2.5l-.8 4h2.5L10 34.3z"></path><path d="M32.8 29.1c8.5 0 14.4-7.7 14.4-14 0-4.7-4.3-6.7-8.5-6.7-9.3 0-14.4 8.3-14.4 14 0 4.7 4.4 6.7 8.5 6.7m22.8 0c8.5 0 14.4-7.7 14.4-14 0-4.7-4.4-6.7-8.6-6.7-9.3 0-14.4 8.3-14.4 14 0 4.7 4.5 6.7 8.6 6.7m26.1-.4h7.1L94.6.4h-7.2l-1.7 8.4-3-.3c-7 0-13.4 9-13.4 15.4 0 2.6 1.7 5.2 4.6 5.2 4.1 0 7-2 8.2-4h.4l-.8 3.6zM59.5 43.6a27.8 27.8 0 0 1-20 6.3C30 49.3 23.2 42 22 34.3h.4c2.2 4.8 7.5 9.3 14 10 6.6.8 14.5-2.2 18.8-6.3l-4.8-3.7h14.5l-3.2 15.4-2.1-6z"></path></svg>);
