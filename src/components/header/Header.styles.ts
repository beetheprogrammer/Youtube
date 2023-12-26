import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.div`
	width: 100%;
	height: 5.8vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1rem;
`;

export const HeaderMoreSection = styled.div`
	display: flex;
	align-items: center;
	gap: 0.85rem;
	position: relative;
`;

export const LeftSection = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	/* svg {
		color: ${({ theme: { text } }) => text};
	} */
`;

export const LogoSection = styled(Link)`
	display: flex;
	align-items: center;
	gap: 0.2rem;
	text-decoration: none;
`;

export const SearchSection = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const SearchBar = styled.div`
	display: grid;
	grid-template-columns: 1fr 3.5rem;
	/* background-color: red; */
	width: 33.5vw;
	border-radius: 100rem;
	border: 1px solid ${({ theme: { grey2 } }) => grey2};
	background-color: ${({ theme: { grey2 } }) => grey2};
	overflow: hidden;
	/* height: 2.5rem; */

	input {
		background-color: ${({ theme: { background } }) => background};
		color: ${({ theme: { text } }) => text};
    font-size: inherit;
    padding-left: 1rem;
	}
	/* height: 2rem; */
`;
