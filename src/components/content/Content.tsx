import React from "react";
import { LoadingBackdrop, StyledContent } from "./Content.styles";
import Categories from "../categories/Categories";
import HomepageVideos from "../homepageVideos/HomepageVideos";
import { useAppContext } from "../../context/App.context";

const Content = () => {
	const { isFetchingVideos } = useAppContext();
	console.log("FETCHING VIDS", isFetchingVideos);
	return (
		<StyledContent>
			{isFetchingVideos && <LoadingBackdrop />}
			<Categories />
			<HomepageVideos />
		</StyledContent>
	);
};

export default Content;
