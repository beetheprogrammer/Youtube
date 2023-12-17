import styled from 'styled-components';

export const StyledShortsVideoItem = styled.div`
	display: flex;
	flex-direction: column;

  &:hover{
    cursor: pointer;
  }

	.videoItemTitle {
		font-size: 16px;
    margin-top: .7rem;
    margin-bottom: .3rem;
		/* font-weight: bold; */
	}

	.details {
		font-size: 14px;
		color: ${({ theme: { grey3 } }) => grey3};
		display: flex;
		align-items: center;
		gap: 0.2rem;
	}
`;

export const StyledShortsVideoThumbnail = styled.div`
	height: 24.8rem;
  width: 100%;
  background-color: #cecece;
  border-radius: .8rem;
  overflow: hidden;

  img {
		width: 100%;
		height: 100%;
		border-radius: inherit;
		object-fit: cover;
	}
`;