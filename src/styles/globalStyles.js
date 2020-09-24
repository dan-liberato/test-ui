import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	:root {
		--color-primary: #FFFFFF;
		--color-text-title: #2D3748;
		--color-text-description: #AAFAFF;
		--color-text-form: #4A5568;
		--color-input-background: #F7FAFC;
		--color-button-background: #667EEA;
		--color-border: #CBD5E0;
		--color-footer: #EDF2F7;
	}

	*,
	::before,
	::after {
		box-sizing: border-box;
		border-width: 0;
		border-style: solid;
		border-color: #e2e8f0;
		padding: 0;
		margin: 0;
	}
	html,
	body {
		line-height: 1.15;
    	-webkit-text-size-adjust: 100%;
		font-family: 'Roboto', sans-serif;
	}

	a {
		cursor: pointer;
		color: inherit;
		text-decoration: inherit;
	}

	img,
	video {
		max-width: 100%;
		height: auto;
	}

	img,
	svg {
		display: block;
		vertical-align: middle;
	}

	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: inherit;
		font-size: 100%;
		line-height: 1.15;
		margin: 0;
		padding: 0;
		line-height: inherit;
		color: inherit;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: inherit;
		font-weight: inherit;
	}

	button, input {
		overflow: visible;
	}

	button,
	[role="button"] {
		cursor: pointer;
	}

	input::placeholder,
	textarea::placeholder {
		color: #a0aec0;
	}

	ol,
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
`;
export default GlobalStyle;
