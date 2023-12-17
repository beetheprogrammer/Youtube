import React, { useEffect } from "react";
import {
	DetailsActionButton,
	DetailsActions,
	MoreVideosContainer,
	StyledWatchVideoContents,
	SubscribeButton,
	UserAccount,
	VideoDescription,
	VideoDetails,
	VideoDetailsActions,
	VideoDetailsInfo,
	VideoScreen,
	WatchVideoContainer,
} from "./WatchVideoContents.styles";
import { useAppContext } from "../../context/App.context";
import RegularVideoItem from "../regularVideoItem/RegularVideoItem";
import Categories from "../categories/Categories";
import ReactPlayer from "react-player";
import { Text } from "../../utils/Text.styles";
import { getTitle } from "../../utils/videos";
import { HiDotsHorizontal } from "react-icons/hi";
import {
	RegularVideoContent,
	RegularVideoPic,
	RegularVideoTitleSubtitle,
} from "../regularVideoItem/RegularVideoItem.styles";
import { IoArrowRedoOutline } from "react-icons/io5";
import { PiListPlusFill } from "react-icons/pi";
import { TiThumbsDown } from "react-icons/ti";
import { TiThumbsUp } from "react-icons/ti";
import { useParams } from "react-router-dom";
import { LoadingBackdrop } from "../content/Content.styles";
import { faker } from "@faker-js/faker";

const WatchVideoContents = () => {
	const { fetchVideo, videos, videoToWatchData, isFetchingVideoToWatch, text } =
		useAppContext();
	console.log("videoToWatchData", videoToWatchData);

	const { id } = useParams();

	document.title = getTitle(videoToWatchData?.url as string);
	
	useEffect(() => {
		if (id) {
			fetchVideo(id);
		}
	}, [id]);

	if (isFetchingVideoToWatch) {
		<LoadingBackdrop />;
	}

	return (
		<StyledWatchVideoContents>
			<WatchVideoContainer>
				<VideoScreen>
					<ReactPlayer
						width="100%"
						height="100%"
						controls={true}
						volume={1}
						muted={false}
						style={{ height: "100%", width: "100%" }}
						playing={true}
						url={videoToWatchData?.video_files[0].link}
					/>
				</VideoScreen>
				<VideoDetails>
					<Text className="videoScreenTitle">
						{getTitle(videoToWatchData?.url + "")}
					</Text>
					<VideoDetailsActions>
						<VideoDetailsInfo>
							<RegularVideoPic>
								<img src={videoToWatchData?.image} alt="thumbnail" />
							</RegularVideoPic>
							<UserAccount>
								<Text className="name">{videoToWatchData?.user.name}</Text>
								<Text className="subscribers">{`${videoToWatchData?.duration}k ${text.subscribers}`}</Text>
							</UserAccount>
							<SubscribeButton>{text.subscribe}</SubscribeButton>
						</VideoDetailsInfo>
						<DetailsActions>
							<DetailsActionButton>
								<>
									<TiThumbsUp size={23} />
									<Text>23k</Text>
								</>
								<span className="divider">&nbsp;</span>
								<TiThumbsDown size={23} />
							</DetailsActionButton>
							<DetailsActionButton>
								<IoArrowRedoOutline size={23} />
								<Text>{text.share}</Text>
							</DetailsActionButton>
							<DetailsActionButton>
								<PiListPlusFill size={23} />
								<Text>{text.save}</Text>
							</DetailsActionButton>
							<DetailsActionButton>
								<HiDotsHorizontal size={23} />
							</DetailsActionButton>
						</DetailsActions>
					</VideoDetailsActions>
				</VideoDetails>
				<VideoDescription>
					<Text>{faker.lorem.paragraphs(5)}</Text>
				</VideoDescription>
			</WatchVideoContainer>
			<MoreVideosContainer>
				<Categories />
				{videos.map((video) => (
					<RegularVideoItem smallView video={video} />
				))}
			</MoreVideosContainer>
		</StyledWatchVideoContents>
	);
};

export default WatchVideoContents;
