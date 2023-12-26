import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *:after{
    margin: 0;
    padding: 0;
    border: none;
    font-family: 'Roboto', sans-serif;

    box-sizing: border-box !important;
    -webkit-box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    -ms-box-sizing: border-box !important;
  }

  ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
  }

  -ms-overflow-style: none; /* Internet Explorer 10+ */
	scrollbar-width: none; /* Firefox */

	&::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
      outline: none;
  }

  input::-webkit-input-placeholder {
    color: ${({ theme: { grey3 } }) => grey3} !important;
  }

  input:focus::-webkit-input-placeholder {
      color: ${({ theme: { grey3 } }) => grey3} !important;
  }
`;

export const AppContainer = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: ${(props) => props.theme.background};
	overflow: hidden;
`;
