import styled from "styled-components";

export const Page = styled.div`
	width: 100%;
	height: 600px;
	display: flex;

	::before {
		content: '';
		background: url("background.svg") no-repeat;
		background-position: top center;
		background-size: cover;
		position: absolute;
		width: 100%;
		min-height: 567px;
		max-height: 575px;
		top: 0;
		z-index: -1;
	}

	@media (min-width: 768px) {
		::before {
			min-height: 84vh;
		}
	}
`;

export const Container = styled.div`
	max-width: 1000px;
	margin: 0 auto;

	display: flex;
	flex-flow: column;
	justify-content: flex-start;
	align-items: center;
	padding: 0 12px;
`;

export const Title = styled.h1`
	font-size: 3rem;
	font-weight: bold;
	color: var(--color-primary);
	margin-top: 42px;
	margin-bottom: 16px;
	text-align: center;

	@media (min-width: 720px) {
		margin-top: 75px;
		font-size: 4rem;
	}
`;

export const Description = styled.p`
	font-size: 1.5rem;
	color: var(--color-text-description);
	margin-bottom: 25px;
	text-align: center;

	@media (min-width: 720px) {
		margin-bottom: 50px;
		font-size: 1.875rem;
	}
`;

export const TravelsForm = styled.form`
	width: 100%;
	border-radius: 10px;
	background: var(--color-primary);
	box-shadow: 0 20px 25px rgba(0, 0, 0, .10);

	div:first-child {
		padding-bottom: 0;
	}
	div + div:nth-child(2) {
		padding-top: 0;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 16px;
	}

	@media (min-width: 768px) {
		.grid {
			grid-auto-rows: 1fr 1fr;
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 1000px) {
		max-width: 1000px;
		.grid {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
`;

export const FieldGroup = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: center;
	padding: 16px;

	@media (min-width: 768px) {
		padding: 24px;
	}
`;

export const Field = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: flex-start;

	label {
		cursor: auto;
		padding: 0;
		margin: 0;
		color: var(--color-text-form);
		font-size: 0.875rem;
		font-weight: 500;
	}
`;

export const FieldContent = styled.div`
	width: 100%;
	background: var(--color-input-background);
	border: 1px solid var(--color-border);
	display: flex;
	flex-direction: row;
	padding: 12px;
	border-radius: 4px;

	:hover,
	:focus-within {
		border: 1px solid var(--color-button-background);
		box-shadow: 0 0 4px var(--color-button-background);
	}
`;

export const Label = styled.label`
	cursor: pointer;
	display: block;
	position: relative;
	padding-left: 30px;
	margin-bottom: 12px;
	margin-right: 6px;
	font-size: 0.875rem;
	line-height: 30px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	:hover input ~ span {
		background-color: var(--color-button-background);
	}

	input:checked ~ span:after {
		display: block;
	}

	span:after {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: var(--color-primary);
		margin: auto;
	}

	@media (min-width: 370px) {
		margin-right: 10px;
		font-size: 1rem;
	}

	@media (min-width: 768px) {
		padding-left: 35px;
		margin-right: 16px;
	}
`;

export const Checkbox = styled.input`
	cursor: pointer;
	position: absolute;
	opacity: 0;
	height: 0;
	width: 0;

	:checked ~ span {
		background-color: var(--color-button-background);
	}
`;

export const Checked = styled.span`
	border-radius: 50%;
	position: absolute;
	top: 0;
	left: 0;
	height: 28px;
	width: 28px;
	background-color: var(--color-input-background);
	border: 3px solid var(--color-border);

	display: flex;
	justify-content: center;
	align-items: center;

	:after {
		content: "";
		position: absolute;
		display: none;
	}
`;

export const Footer = styled.div`
	width: 100%;
	background: var(--color-footer);
	border-bottom-right-radius: 10px;
	border-bottom-left-radius: 10px;
	position: relative;
	bottom: 0;


	display: flex;
	align-items: flex-end;
	justify-content: flex-end;

	padding: 16px;

	@media (min-width: 768px) {
		padding: 24px;
	}
`;

export const SearchTravel = styled.button`
	outline: none;
	background: var(--color-button-background);
	border-radius: 4px;
	color: var(--color-primary);
	display: flex;
	align-items: center;
	padding: 12px 16px;
	font-size: 1rem;
	font-weight: 500;

	opacity: 4;

	svg {
		margin-right: 8px;
	}

	:hover {
		opacity: 1;
	}
`;
