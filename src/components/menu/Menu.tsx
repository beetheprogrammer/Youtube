import React from "react";
import { LargeMenuSection, MenuItem, StyledMenu } from "./Menu.styles";
import { useAppContext } from "../../context/App.context";
import { Text } from "../../utils/Text.styles";
import { MENU_LARGE, MENU_SMALL } from "../../utils/sideMenu";
import { ITranslations } from "../../utils/translations";
import AuthButton from "../authButton/AuthButton";

const Menu = () => {
	const { isMenuSmall, text, activeMenu } = useAppContext();
	console.log("MEN", activeMenu);

	if (isMenuSmall) {
		return (
			<StyledMenu>
				{MENU_SMALL.map(({ name, icon }) => (
					<MenuItem active={activeMenu.toLowerCase() === name.toLowerCase()} className="small">
						{icon}
						<Text>{text[name as keyof ITranslations]}</Text>
					</MenuItem>
				))}
			</StyledMenu>
		);
	} else {
		return (
			<StyledMenu>
				{MENU_LARGE.map(({ title, list }, index) => (
					<>
						<LargeMenuSection key={index}>
							{title && (
								<Text className="title">
									{text[title as keyof ITranslations]}
								</Text>
							)}
							<>
								{list.map(({ name, icon }) => (
									<MenuItem
										active={
											activeMenu.toLowerCase() ===
											text[name as keyof ITranslations].toLowerCase()
										}
										className="large"
									>
										{icon}
										<Text>{text[name as keyof ITranslations]}</Text>
									</MenuItem>
								))}
							</>
						</LargeMenuSection>
						{index === 1 && (
							<LargeMenuSection key={index} className="text">
								<Text>{text.signInMenuText}</Text>
								<AuthButton />
							</LargeMenuSection>
						)}
					</>
				))}
			</StyledMenu>
		);
	}
};

export default Menu;
