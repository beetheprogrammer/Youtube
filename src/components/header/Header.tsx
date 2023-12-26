import React, { MouseEventHandler, useEffect, useState } from "react";
import {
	HeaderMoreSection,
	LeftSection,
	LogoSection,
	SearchBar,
	SearchSection,
	StyledHeader,
} from "./Header.styles";
import AuthButton from "../authButton/AuthButton";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { Icon } from "../../utils/Icon.styles";
import { useAppContext } from "../../context/App.context";
import Settings from "../settings/Settings";
import { SlMenu } from "react-icons/sl";
import { FaYoutube } from "react-icons/fa";
import { Text } from "../../utils/Text.styles";
import { LuSearch } from "react-icons/lu";
import { FaMicrophone } from "react-icons/fa";
import SpeechRecognition, {
	useSpeechRecognition,
} from "react-speech-recognition";
import { useLocation, useParams } from "react-router-dom";

const Header = () => {
	const [showSettings, setShowSettings] = useState(false);
	const [searchText, setSearchText] = useState("");
	const { text, setSearchBarText, searchBarText, toggleMenuSize } =
		useAppContext();
  const {
		transcript,
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition,
	} = useSpeechRecognition(); 

  if (!browserSupportsSpeechRecognition) {
		console.log("Browser doesn't support speech recognition.");
	}

  console.log("LISTENING", listening);
  console.log("TRANSCRIPT", transcript);

	const { pathname } = useLocation();
	const isHomePath = pathname.length === 1

	if (isHomePath) {
		document.title = "YouTube"
	}

  useEffect(() => {
		setSearchText(transcript);
		setSearchBarText(searchText);
	}, [transcript]);

	return (
		<StyledHeader>
			<LeftSection>
				<Icon className={`${!isHomePath && "disabled"} menu`} onClick={toggleMenuSize}>
					<SlMenu size={17} />
				</Icon>
				<LogoSection to="/">
					<FaYoutube color="#FF0000" size={30} />
					<Text className="logo">YouTube</Text>
				</LogoSection>
			</LeftSection>
			<SearchSection>
				<SearchBar>
					<input
						value={searchText}
						onChange={({ target: { value } }) => setSearchText(value)}
						placeholder={text.search}
					/>
					<Icon
						data-tooltip-id="search"
						data-tooltip-content={text.search}
						$showBackground={false}
						onClick={() => setSearchBarText(searchText)}
					>
						<LuSearch size={21} />
					</Icon>
				</SearchBar>
				<Icon
					data-tooltip-id="voiceSearch"
					data-tooltip-content={text.voiceSearch}
					$showBackground={true}
					className={listening ? "listening" : ""}
					onClick={
						SpeechRecognition.startListening as MouseEventHandler<HTMLDivElement>
					}
				>
					<FaMicrophone size={21} />
				</Icon>
			</SearchSection>
			<HeaderMoreSection>
				<Icon
					data-tooltip-id="settings"
					data-tooltip-content={text.settings}
					$showBackground={false}
					onClick={() => setShowSettings((value) => !value)}
				>
					<CgMoreVerticalAlt size={21} />
				</Icon>
				<AuthButton />
				{showSettings && <Settings />}
			</HeaderMoreSection>
		</StyledHeader>
	);
};

export default Header;
