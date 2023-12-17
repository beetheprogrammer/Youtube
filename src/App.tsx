import React from "react";
import { AppContainer, GlobalStyle } from "./App.style";
import { THEMES } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import Header from "./components/header/Header";
import { useAppContext } from "./context/App.context";
import ToolTips from "./components/tooltips/ToolTips";
import Body from "./components/body/Body";
import WatchVideoContents from "./components/watchVideoContents/WatchVideoContents";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	const { theme } = useAppContext();

	return (
		<ThemeProvider theme={THEMES[theme]}>
			<GlobalStyle />
			<ToolTips />
			<AppContainer>
				<Header />
				<Routes>
					<Route path="/" element={<Body />}></Route>
					<Route path="/:id" element={<WatchVideoContents />} />
				</Routes>
				{/* <Body/> */}
				{/* <WatchVideoContents /> */}
			</AppContainer>
		</ThemeProvider>
	);
}

export default App;
