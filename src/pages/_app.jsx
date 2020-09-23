import Head from "next/head";
import GlobalStyles from "../styles/globalStyles";

const App = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>Teste de UI</title>

				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
			</Head>
			<GlobalStyles />

			<Component {...pageProps} />
		</>
	);
};
export default App;
