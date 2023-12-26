import styled from 'styled-components';
import { RegularVideoPic } from '../regularVideoItem/RegularVideoItem.styles';

export const StyledWatchVideoContents = styled.div`
	width: 100%;
	height: 94.2vh;
	display: grid;
	gap: 1.5vw;
	grid-template-columns: 71.5vw 24vw ;
  padding: 0 1.5vw;
  overflow: scroll;
  /* background-color: blue; */

`;

export const WatchVideoContainer = styled.div`
	width: 100%;
	padding-top: 1.5rem;
	/* background-color: red; */
`;

export const VideoDetails = styled.div`
	width: 100%;
	display: flex;
  flex-direction: column;
  margin-top: 1rem;
	/* background-color: red; */

  .videoScreenTitle{
    font-size: 20px;
  }
`;

export const VideoDescription = styled.div`
	width: 100%;
	background-color: ${({ theme: { grey2 } }) => grey2};
	padding: 1rem;
	border-radius: 1rem;
	margin-top: 1rem;
	/* color: ${({ theme: { background } }) => background}; */
  line-height: 1.5rem;
`;

export const VideoScreen = styled.div`
	width: 100%;
  height: 44rem;
	/* background-color: red; */
  border-radius: 1rem;
  overflow:hidden;
`;

export const MoreVideosContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 1.5rem;
`;

export const VideoDetailsActions = styled.div`
	display: flex;
	align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const VideoDetailsInfo = styled.div`
	display: flex;
	align-items: center;
	/* justify-content: space-between; */
`;

export const SubscribeButton = styled.div`
	padding: 0.4rem 0.6rem;
  border-radius: 200rem;
  background-color: ${({theme: {text}})=>text};
  color: ${({theme: {background}})=>background};
  margin-left: 2rem;
`;

export const UserAccount = styled.div`
	display: flex;
	flex-direction: column;
  margin-left: 1rem;
  gap: .2rem;

	.name {
		font-weight: 600;
	}
	.subscribers {
		font-size: 13px;
		color: ${({ theme: { grey3 } }) => grey3};
	}
	/* justify-content: space-between; */
`;

export const DetailsActions = styled.div`
	display: flex;
	align-items: center;
  gap: .5rem;
	/* justify-content: space-between; */
`;

export const DetailsActionButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	background-color: ${({ theme: { grey2 } }) => grey2};
	color: ${({ theme: { text } }) => text};
	border-radius: 100rem;
	padding: 0.4rem 0.6rem;

	.divider {
		border-left: 1px solid ${({ theme: { grey3 } }) => grey3};
	}
	/* justify-content: space-between; */
`;