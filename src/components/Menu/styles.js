import styled from "styled-components";

export const Container = styled.nav`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 15px 0px;
	border-bottom: 1px solid #CBD5E0;
	color: #FFFFFF;
	position: relative;

	::first-child {
		width: 60px;
	}

	@media (min-width: 768px) {
		grid-template-columns: 60px 1fr 1fr;
	}
`;

export const ListMenu = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: flex-start;

	background: #fff;
	position: absolute;
	right: 16px;
	top: 90px;
	z-index: 10;
	width: 165px;
	padding-left: 10px;
	transition: all 0.3s linear;
	visibility: ${props => props.openMenu ? "visible" : "hidden"};

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		width: auto;
		position: static;
		background-color: transparent;
		visibility: visible;
	}

`;

export const ListMenuItem = styled.li`
	padding: 8px 0;
	font-weight: 400;

	a {
		color: #2D3748;
		:hover {
			color: #667EEA;
		}
	}

	@media (min-width: 768px) {
		margin-right: 24px;

		a {
			color: #FFFFFF;
		}
	}
`;

export const SignIn = styled.div`
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: flex-start;

	width: 165px;
	position: absolute;
	top: 226px;
	right: 16px;
	background-color: #fff;
	padding-left: 10px;
	z-index: 10;

	border-bottom-right-radius: 4px;
	border-bottom-left-radius: 4px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, .10);

	transition: all 0.3s linear;
	visibility: ${props => props.openMenu ? "visible" : "hidden"};

	a {
		font-weight: 400;
		color: #2D3748;
		padding: 8px 0;

		:hover {
			color: #667EEA;
		}
	}

	@media (min-width: 768px) {
		width: auto;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		background-color: transparent;
		box-shadow: none;
		position: static;
		visibility: visible;

		a {
			color: #FFFFFF;
		}

		a:last-child {
			padding: 12px 18px;
			border: 1px solid #FFFFFF;
			text-align: center;
			font-weight: 500;
			margin-left: 24px;
			border-radius: 4px;
			:hover {
				border-color: #667EEA;
			}
		}
	}
`;

export const OpenMenu = styled.div`
	button {
		color: #FFFFFF;
		float: right;
		margin-top: 17px;
		background: transparent;
		outline: none;
		margin-right: 1px;
	}

	@media (min-width: 768px) {
		display: none;
	}
`;
