import styled, { css } from "styled-components";

export const StyledRegularVideoItem = styled.div<{ $smallView?: boolean}>`
	width: 100%;
	/* height: 15.5rem; */
	display: flex;
	flex-direction: column;
	gap: 0.7rem;
	/* background-color: blue; */

	&:hover {
		cursor: pointer;
	}

	${({ $smallView }) =>
		$smallView &&
		css`
			flex-direction: row;
			height: auto;
		`}
`;

export const RegularThumbnail = styled.div<{
	$smallView?: boolean;
	$smallMenu?: boolean;
}>`
	/* background-color: grey; */
	width: 100%;
	height: 12.2rem;
	border-radius: 0.8rem;
	position: relative;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		border-radius: inherit;
		object-fit: cover;
	}

	${({ $smallView }) =>
		$smallView &&
		css`
			height: 6rem;
			width: 19rem;
		`}

	${({ $smallMenu }) =>
		$smallMenu &&
		css`
			height: 13.7rem;
		`}
`;

export const RegularVideoContent = styled.div<{ $smallView?: boolean }>`
	/* background-color: purple; */
	width: 100%;
	display: grid;
	grid-template-columns: 2.3rem 1fr;
	gap: 0.7rem;

	${({ $smallView }) =>
		$smallView &&
		css`
			display: flex;
		`}
`;

export const RegularVideoPic = styled.div<{ $smallView?: boolean }>`
	width: 2.3rem;
	height: 2.3rem;
	border-radius: 1000rem;
	background-color: purple;

	img {
		width: 100%;
		height: 100%;
		border-radius: inherit;
		object-fit: cover;
	}

	${({ $smallView }) =>
		$smallView &&
		css`
			display: none;
		`}
`;

export const RegularVideoTitleSubtitle = styled.div<{ $smallView?: boolean }>`
	margin-top: 0.2rem;

	.videoItemTitle {
		font-size: 16px;
		/* font-weight: bold; */
	}

	.name {
		font-size: 14px;
		margin: 0.5rem 0 0.2rem 0;
		color: ${({ theme: { grey3 } }) => grey3};
	}

	.details {
		font-size: 14px;
		color: ${({ theme: { grey3 } }) => grey3};
		display: flex;
		align-items: center;
		gap: 0.2rem;
	}

	.dot {
		font-size: 8px;
	}

	${({ $smallView }) =>
		$smallView &&
		css`
			.videoItemTitle {
				font-size: 14px;
				/* font-weight: bold; */
			}

			.name {
				font-size: 12px;
			}

			.details {
				font-size: 12px;
			}
		`}
`;

export const Time = styled.div`
	background-color: ${({ theme: { background } }) => background};
	width: max-content;
	padding: 0.15rem 0.25rem;
	border-radius: 0.3rem;
	position: absolute;
	bottom: 0.3rem;
	right: 0.3rem;

	p {
		font-size: 13px;
	}
`;
