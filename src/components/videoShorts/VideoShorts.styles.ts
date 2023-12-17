import styled from 'styled-components';

export const StyledVideoShorts = styled.div`
	width: 100%;
	/* background-color: green; */
	margin-top: 2rem ;
`;

export const MoreLessContainer = styled.div`
	width: 100%;
	/* background-color: #eee; */
  display: flex;
  justify-content: center;
  border-top: 1px solid ${({ theme: { divider } }) => divider};
  margin-top: 2.5rem;
  margin-bottom: .5rem;
`;

export const MoreLessButton = styled.button`
	border: 1px solid ${({ theme: { divider } }) => divider};
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	padding: 0.5rem 0rem;
	width: 23.5rem;
	background-color: ${({ theme: { background } }) => background};
	border-radius: 100rem;
	transform: translateY(-50%);

	&:hover {
		background-color: ${({ theme: { grey2 } }) => grey2};
		cursor: pointer;
	}

	.icon {
		color: ${({ theme: { text } }) => text};
	}
`;

export const ShortVideosContainer = styled.div<{ $isMenuSmall: boolean }>`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	column-gap: 1rem;
	row-gap: 1.5rem;
	margin-top: 1.5rem;
`;

export const VideoShortsHeading = styled.div`
	display: flex;
  align-items: center;

  p{
    font-size: 22px;
    margin-left: .5rem;
    font-weight: bold;
  }
`;