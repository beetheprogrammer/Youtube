import React from "react";
import {
	RegularVideoThumbnailsContainer,
	StyledHomePage,
	StyledHomepageVideos,
} from "./HomepageVideos.styles";
import { useAppContext } from "../../context/App.context";
import RegularVideoItem from "../regularVideoItem/RegularVideoItem";
import VideoShorts from "../videoShorts/VideoShorts";

const HomepageVideos = () => {
	const { isMenuSmall, videos } = useAppContext();

	console.log("VIDEOS", videos);
	const FIRST_VIDEOS_SECTION = videos.slice(0, 8)

	const SECOND_VIDEOS_SECTION = videos.slice(8, 20);

	const THIRD_VIDEOS_SECTION = videos.slice(20, 28);

	return (
		<StyledHomepageVideos>
			<RegularVideoThumbnailsContainer>
				{FIRST_VIDEOS_SECTION.map((video) => (
					<RegularVideoItem video={video} smallMenu={isMenuSmall} />
				))}
			</RegularVideoThumbnailsContainer>
			<VideoShorts videos={SECOND_VIDEOS_SECTION} />
			<RegularVideoThumbnailsContainer>
				{THIRD_VIDEOS_SECTION.map((video) => (
					<RegularVideoItem video={video} smallMenu={isMenuSmall} />
				))}
			</RegularVideoThumbnailsContainer>
		</StyledHomepageVideos>
	);
};

export default HomepageVideos;
