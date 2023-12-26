import React, { useState } from "react";
import { StyledShortsVideoItem, StyledShortsVideoThumbnail } from "./ShortsVideoItem.styles";
import { Text } from "../../utils/Text.styles";
import { Video } from "pexels";
import { getLargestVideoHeight, getTitle } from "../../utils/videos";
import ReactPlayer from "react-player";
import { useAppContext } from "../../context/App.context";

interface IShortsVideoItemProps{
  video: Video;
}

const ShortsVideoItem = ({ video }: IShortsVideoItemProps) => {
  const [playTrailer, setPlayTrailer] = useState(false);
	const { setVideoToWatch } = useAppContext();
  const TITLE_LENGTH = 45;

	return (
		<StyledShortsVideoItem
			onMouseOver={() => setPlayTrailer(true)}
			onMouseOut={() => setPlayTrailer(false)}
			onClick={() => setVideoToWatch(video.id)}
		>
			<StyledShortsVideoThumbnail>
				{!playTrailer ? (
					<img src={video.image} alt="thumbnail" />
				) : (
					<ReactPlayer
						width="100%"
						height="100%"
						controls={false}
						volume={1}
						muted={false}
						style={{ height: "100%", width: "100%" }}
						playing={playTrailer}
						url={getLargestVideoHeight(video.video_files).link}
					/>
				)}
			</StyledShortsVideoThumbnail>
			<Text className="videoItemTitle">
				{getTitle(video.url).slice(0, TITLE_LENGTH)}
				{getTitle(video.url).length > TITLE_LENGTH && "..."}
			</Text>
			<Text className="details">{video.duration}M views</Text>
		</StyledShortsVideoItem>
	);
};

export default ShortsVideoItem;
