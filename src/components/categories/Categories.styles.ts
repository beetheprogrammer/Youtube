import styled from 'styled-components';

export const StyledCategories = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: blue; */
  display: flex;
  align-items: flex-end;
  /* overflow: scroll; */
  gap: .5rem;
  position: relative;
  padding-bottom: .6rem;
  z-index: 100;
	padding-right: 10rem;
  /* padding: .8rem 1.3rem 0 0; */
  /* height: 100%; */
  
`

export const CategoriesCarousel = styled.div`
	width: 100%;
	overflow-x: scroll;
	margin-bottom: -18px;
	padding-right: 10rem;
`;

export const CategoryItem = styled.div<{ active: boolean }>`
	background-color: ${({ theme: { divider, text }, active }) =>
		active ? text : divider};
	padding: 0.5rem 0.8rem;
	border-radius: 0.5rem;
	white-space: nowrap;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative;
  bottom: -1rem; */
  /* margin-top: 50rem !important; */

	p {
		color: ${({ theme: { background, text }, active }) =>
			active ? background : text} !important;
	}

	&:hover {
		cursor: pointer;
	}
`;