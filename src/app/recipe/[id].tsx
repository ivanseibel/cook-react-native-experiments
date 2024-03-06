import { FlatList, Image, StatusBar, Text, View } from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { IngredientsHorizontal } from "@/components/IngredientsHorizontal";
import { Step } from "@/components/Step";
import { useEffect, useState } from "react";
import { findByRecipeId } from "../../services/ingredients.service";
import { services } from "@/services";

const steps = [
	{
		step: 1,
		description: "Boil water in a large pot.",
	},
	{
		step: 2,
		description: "Add the pasta and cook for 10 minutes.",
	},
	{
		step: 3,
		description: "In a pan, heat the olive oil and add the garlic.",
	},
	{
		step: 4,
		description: "Add the tomatoes and cook for 5 minutes.",
	},
	{
		step: 5,
		description: "Season with salt and pepper.",
	},
	{
		step: 6,
		description: "Add the basil and cook for 2 minutes.",
	},
	{
		step: 7,
		description: "Drain the pasta and add it to the pan.",
	},
	{
		step: 8,
		description: "Mix well and serve with parmesan.",
	},
];

const Recipe = () => {
	const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);
	const [recipe, setRecipe] = useState<RecipeResponse | null>(null);
	const [preparation, setPreparation] = useState<PreparationsResponse[]>([]);

	const router = useRouter();

	const { id: recipeId } = useLocalSearchParams<{ id: string }>();

	useEffect(() => {
		services.ingredients.findByRecipeId(recipeId).then((data) => {
			console.log("recipeId", recipeId);
			setIngredients(data);
			console.log("data", data);
		});
	}, [recipeId]);

	useEffect(() => {
		services.recipes.show(recipeId).then((data) => {
			setRecipe(data);
		});
	}, [recipeId]);

	useEffect(() => {
		services.preparations.findByRecipeId(recipeId).then((data) => {
			setPreparation(data);
		});
	}, [recipeId]);

	return (
		<View style={styles.mainContainer}>
			<StatusBar barStyle="dark-content" />
			<Image style={styles.image} source={{ uri: recipe?.image }} />

			{/* Recipe Container */}
			<View style={styles.recipeContainer}>
				{/* Header */}
				<View style={styles.recipeHeader}>
					<MaterialIcons
						name="arrow-back"
						size={32}
						onPress={() => router.back()}
					/>
				</View>

				<Text style={styles.recipeTitle}>
					{recipe?.name ?? "Recipe not found"}
				</Text>
				<Text style={styles.recipePreparationTime}>
					{recipe?.minutes ?? 0} minutes preparation time
				</Text>

				<Text style={styles.ingredientsTitle}>Ingredients</Text>
				<IngredientsHorizontal ingredients={ingredients} />

				<Text style={styles.recipePreparationTitle}>Preparation</Text>

				<FlatList
					data={preparation}
					keyExtractor={(item) => item.id}
					showsVerticalScrollIndicator={false}
					style={styles.recipePreparationStepsContainer}
					contentContainerStyle={{
						paddingHorizontal: 12,
						gap: 16,
						paddingTop: 16,
						paddingBottom: 36,
					}}
					renderItem={({ item }) => (
						<Step description={item.description} step={item.step} />
					)}
				/>
			</View>
		</View>
	);
};

export default Recipe;
