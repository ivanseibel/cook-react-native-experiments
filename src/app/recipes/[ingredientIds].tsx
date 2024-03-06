import { FlatList, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams, useRouter } from "expo-router";
import { theme } from "@/theme";
import { Ingredient } from "@/components/Ingredient";
import { Recipe } from "@/components/Recipe";
import { useEffect, useState } from "react";
import { services } from "@/services";
import { IngredientsHorizontal } from "@/components/IngredientsHorizontal";

const Recipes = () => {
	const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);
	const [recipes, setRecipes] = useState<RecipeResponse[]>([]);

	const params = useLocalSearchParams<{ ingredientIds: string }>();
	const ingredientIds = params.ingredientIds.split(",");

	const router = useRouter();

	const handleOpenRecipe = (id: string) => {
		router.navigate(`/recipe/${id}`);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		services.ingredients.findByIds(ingredientIds).then((data) => {
			setIngredients(data);
		});
	}, []);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		services.recipes.findByIngredientsIds(ingredientIds).then((data) => {
			setRecipes(data);
		});
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<MaterialIcons
					name="arrow-back"
					size={32}
					onPress={() => router.back()}
				/>
			</View>

			<Text style={styles.title}>Ingredients</Text>

			<View style={{ paddingHorizontal: 32, marginTop: 12 }}>
				<IngredientsHorizontal ingredients={ingredients} />
			</View>

			<FlatList
				data={recipes}
				keyExtractor={(item) => item.id}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.recipeList}
				numColumns={2}
				columnWrapperStyle={{ gap: 16 }}
				style={styles.recipes}
				renderItem={({ item }) => (
					<Recipe
						recipe={{
							image: item.image,
							name: item.name,
							minutes: item.minutes,
						}}
						onPress={() => handleOpenRecipe(item.id)}
					/>
				)}
			/>
		</View>
	);
};

export default Recipes;
