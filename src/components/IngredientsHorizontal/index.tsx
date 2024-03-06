import { ScrollView } from "react-native";
import { Ingredient } from "../Ingredient";
import styles from "./styles";

type ComponentProps = {
	ingredients: IngredientResponse[];
};

export const IngredientsHorizontal = ({ ingredients }: ComponentProps) => {
	return (
		<ScrollView
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
			style={styles.ingredientListContainer}
			horizontal
			contentContainerStyle={styles.ingredientListContent}
		>
			{ingredients.map((item) => (
				<Ingredient key={item.id} name={item.name} image={item.image} />
			))}
		</ScrollView>
	);
};
