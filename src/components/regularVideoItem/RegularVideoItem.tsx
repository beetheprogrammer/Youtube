import React, { useState } from "react";
import {
	RegularThumbnail,
	RegularVideoContent,
	RegularVideoPic,
	RegularVideoTitleSubtitle,
	StyledRegularVideoItem,
	Time,
} from "./RegularVideoItem.styles";
import { Text } from "../../utils/Text.styles";
import { Video } from "pexels";
import { getTitle } from "../../utils/videos";
import ReactPlayer from "react-player";
import { useAppContext } from "../../context/App.context";

interface IRegularVideoItemProps {
	video: Video;
	smallView? : boolean;
	smallMenu? : boolean;
}

const RegularVideoItem = ({
	video,
	smallView,
	smallMenu,
}: IRegularVideoItemProps) => {
	const [playTrailer, setPlayTrailer] = useState(false);
	const TITLE_LENGTH = 50;
	const { setVideoToWatch } = useAppContext();

	return (
		<StyledRegularVideoItem
			onMouseOver={() => setPlayTrailer(true)}
			onMouseOut={() => setPlayTrailer(false)}
			$smallView={smallView}
			onClick={() => setVideoToWatch(video.id)}
		>
			<RegularThumbnail $smallView={smallView} $smallMenu={smallMenu}>
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
						url={video.video_files[0].link}
					/>
				)}
				<Time>
					<Text>
						{Math.floor(video.duration / 60)}:{video.duration % 60}
					</Text>
				</Time>
			</RegularThumbnail>
			<RegularVideoContent $smallView={smallView}>
				<RegularVideoPic $smallView={smallView}>
					<img src={video.image} alt="thumbnail" />
				</RegularVideoPic>
				<RegularVideoTitleSubtitle $smallView={smallView}>
					<Text className="videoItemTitle">
						{getTitle(video.url).slice(0, TITLE_LENGTH)}
						{getTitle(video.url).length > TITLE_LENGTH && "..."}
					</Text>
					<Text className="name">{video.user.name}</Text>
					<Text className="details">
						{video.duration}M views <span className="dot">&#9679;</span> 2 hours
						ago
					</Text>
				</RegularVideoTitleSubtitle>
			</RegularVideoContent>
		</StyledRegularVideoItem>
	);
};

export default RegularVideoItem;
