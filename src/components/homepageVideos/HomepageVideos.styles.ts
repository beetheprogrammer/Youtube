import styled from 'styled-components';

export const StyledHomePage = styled.div`
	height: auto;
	/* overflow-y: scroll; */
`;

export const StyledHomepageVideos = styled.div`
	/* background-color: green; */
	overflow-y: scroll ;
	/* height: 100%; */
	height: 88.7vh;
	padding: 1.6rem 0;
	padding-right: 1.5rem;
`;

export const RegularVideoThumbnailsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	column-gap: 1rem;
	row-gap: 3rem;
`;

