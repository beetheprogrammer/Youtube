import React from "react";
import { useAppContext } from "../../context/App.context";
import { HiLanguage } from "react-icons/hi2";
import { GoMoon } from "react-icons/go";
import { Text } from "../../utils/Text.styles";
import { Setting, StyledSettings } from "./Settings.styles";
import { changeTheme } from "../../store/app.slice";
import { useAppDispatch, useAppSelector } from "../../store/store.hooks";

const Settings = () => {
	const { text, theme, language, toggleLanguage, toggleTheme } =
		useAppContext();
	const dispatch = useAppDispatch();
	const appTheme = useAppSelector((state)=> state.app.theme)

	const settings = [
		{
			label: text.language,
			icon: <HiLanguage size={23} />,
			value: text[language === "english" ? "french" : "english"],
			onClick: () => toggleLanguage(),
		},
		{
			label: text.appearance,
			icon: <GoMoon size={23} />,
			value: text[appTheme === "dark" ? "light" : "dark"],
			onClick: () => dispatch(changeTheme()),
			// onClick: () => toggleTheme(),
		},
	];

	return (
		<StyledSettings>
			{settings.map(({ label, icon, value, onClick }) => (
				<Setting onClick={onClick}>
					{icon}
					<Text>{`${label} : ${value}`}</Text>
				</Setting>
			))}
		</StyledSettings>
	);
};

export default Settings;
