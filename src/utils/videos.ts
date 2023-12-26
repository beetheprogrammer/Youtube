import { Video } from "pexels";

export const getTitle = (videoUrl: string): string => {
	let title = videoUrl
		?.replace("https://www.pexels.com/video/", "")
		?.split("-")
		?.slice(0, -1)
		?.join(" ");

	return title?.charAt(0)?.toUpperCase() + title?.slice(1);
};

export const getLargestVideoHeight = (videoFiles: IVideoFile[]): IVideoFile => {
	let largest = videoFiles[0];

	for (var i = 0; i < videoFiles.length; i++) {
		if (videoFiles[i].height! > largest.height!) {
			largest = videoFiles[i];
		}
	}

	return largest;
};

interface IVideoFile {
	id: number;
	quality: "hd" | "sd" | "hls";
	file_type: "string";
	width: number | null;
	height: number | null;
	link: string;
	fps: number | null;
}
