import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import React from "react";
import { ITranslations, LANGUAGE } from "../utils/translations";
import { ErrorResponse, Video, Videos, createClient } from "pexels";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/store.hooks";

interface IAppContextValue {
	theme: "light" | "dark";
	toggleTheme: () => void;
	language: "english" | "french";
	toggleLanguage: () => void;
	text: ITranslations;
	isMenuSmall: boolean;
	toggleMenuSize: () => void;
	searchBarText: string;
	setSearchBarText: React.Dispatch<React.SetStateAction<string>>;
	activeMenu: string;
	activeCategory: string;
	setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
	videos: Video[];
	isFetchingVideos: boolean;
	videoToWatch: number | undefined;
	setVideoToWatch: React.Dispatch<React.SetStateAction<number | undefined>>;
	fetchVideo: (query: string) => Promise<void>;
	videoToWatchData: Video | undefined;
	isFetchingVideoToWatch : boolean;
}

export const AppContext = createContext<IAppContextValue | null>(null);

export const useAppContext = () => {
	const appContext = useContext(AppContext);

	if (!appContext) {
		throw new Error("There is no context");
	}
	return appContext;
};

interface IAppContextProviderProps {
	children: ReactNode;
}

export const AppContextProvider = ({ children }: IAppContextProviderProps) => {
	// const [theme, setTheme] = useState<"light" | "dark">("dark");
	const [language, setLanguage] = useState<"english" | "french">("english");
	const [isMenuSmall, setIsMenuSmall] = useState<boolean>(false);
	const [searchBarText, setSearchBarText] = useState<string>("");
	const [activeMenuText, setActiveMenuText] = useState("home");
	const [activeCategory, setActiveCategory] = useState("All");
	const [videos, setVideos] = useState<Video[]>([]);
	const [videoToWatch, setVideoToWatch] = useState<number>();
	const [videoToWatchData, setVideoToWatchData] = useState<Video>();
	const [isFetchingVideos, setIsFetchingVideos] = useState(false);
	const [isFetchingVideoToWatch, setIsFetchingVideoToWatch] = useState(false);
	let navigate = useNavigate();

	const activeMenu = LANGUAGE[language][activeMenuText as keyof ITranslations];
	const theme = useAppSelector((state) => state.app.theme);

	useEffect(() => {
		if (videoToWatch){
			navigate(`/${videoToWatch}`);
		}
	}, [videoToWatch]);

	useEffect(() => {
		fetchVideos(activeCategory);
	}, [activeCategory]);

	useEffect(() => {
		fetchVideos(searchBarText);
		// setActiveCategory("")
		navigate(`/`);
	}, [searchBarText]);

	const fetchVideos = async (query: string) => {
		setIsFetchingVideos(true);
		try {
			const response: ErrorResponse | Videos = await client.videos.search({
				query,
				per_page: 44,
			});
			setVideos((response as Videos).videos);
		} catch (error) {
			console.log("THERE WAS AN ERROR FETCHING VIDEOS");
		}
		setIsFetchingVideos(false);
	};

	const fetchVideo = async (query: string) => {
		setIsFetchingVideoToWatch(true);
		try {
			const response: ErrorResponse | Video = await client.videos.show({
				id: query,
			});
			console.log("VIDEO!!", response);
			setVideoToWatchData((response as Video));
		} catch (error) {
			console.log("THERE WAS AN ERROR FETCHING VIDEOS");
		}
		setIsFetchingVideoToWatch(false);
	};

	const client = createClient(
		"u3bN3I0m4cP1GguOhScCkKf9rtWyWmnhHPiqTbeBf3bKt8rCHYrtBO58"
	);

	const toggleTheme = () => {
		// setTheme((theme) => (theme === "light" ? "dark" : "light"));
	};

	const toggleLanguage = () => {
		setLanguage((language) => (language === "english" ? "french" : "english"));
	};

	const toggleMenuSize = () => {
		setIsMenuSmall((state) => !state);
	};

	const value = {
		fetchVideo,
		theme,
		toggleTheme,
		language,
		toggleLanguage,
		text: LANGUAGE[language],
		isMenuSmall,
		toggleMenuSize,
		searchBarText,
		setSearchBarText,
		activeMenu,
		activeCategory,
		setActiveCategory,
		videos,
		isFetchingVideos,
		videoToWatch,
		setVideoToWatch,
		videoToWatchData,
		isFetchingVideoToWatch,
	};
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
