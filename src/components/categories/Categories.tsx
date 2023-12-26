import React from "react";
import {
	CategoriesCarousel,
	CategoryItem,
	StyledCategories,
} from "./Categories.styles";
import { useAppContext } from "../../context/App.context";
import { CATEGORIES } from "../../utils/categories";
import { ITranslations } from "../../utils/translations";
import { Text } from "../../utils/Text.styles";

const Categories = () => {
	const { text, activeCategory, setActiveCategory } = useAppContext();
	return (
		<CategoriesCarousel>
			<StyledCategories>
				{CATEGORIES.map((name, index) => (
					<CategoryItem
						active={name.toLowerCase() === activeCategory.toLowerCase()}
						key={index}
						onClick={() => setActiveCategory(name)}
					>
						<Text>{text[name as keyof ITranslations]}</Text>
					</CategoryItem>
				))}
			</StyledCategories>
		</CategoriesCarousel>
	);
};

export default Categories;
