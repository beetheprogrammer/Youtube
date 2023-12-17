import React, { useState } from 'react'
import { MoreLessButton, MoreLessContainer, ShortVideosContainer, StyledVideoShorts, VideoShortsHeading } from './VideoShorts.styles'
import { SiYoutubeshorts } from "react-icons/si";
import { Text } from '../../utils/Text.styles';
import { useAppContext } from '../../context/App.context';
import ShortsVideoItem from '../shortsVideoItem/ShortsVideoItem';
import { Video } from 'pexels';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

interface IVideoShortsProps {
	videos: Video[];
}

const VideoShorts = ({ videos }: IVideoShortsProps) => {
  const [showLess, setShowLess] = useState(true);
  const videosList = showLess ? videos.slice(0, videos.length/2) : videos;

	const { isMenuSmall, text } = useAppContext();

	return (
		<StyledVideoShorts>
			<VideoShortsHeading>
				<SiYoutubeshorts size={25} color="red" />
				<Text>Shorts</Text>
			</VideoShortsHeading>
			<ShortVideosContainer $isMenuSmall={isMenuSmall}>
				{videosList.map((video) => (
					<ShortsVideoItem video={video} />
				))}
			</ShortVideosContainer>
			<MoreLessContainer>
				<MoreLessButton onClick={() => setShowLess((state) => !state)}>
					<Text>{showLess ? text.showMore : text.showLess}</Text>
					{showLess ? (
						<IoIosArrowDown className="icon" size={20} />
					) : (
						<IoIosArrowUp className="icon" size={20} />
					)}
				</MoreLessButton>
			</MoreLessContainer>
		</StyledVideoShorts>
	);
};

export default VideoShorts