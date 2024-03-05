import { FlatList, Text, View } from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { theme } from "@/theme";
import { Ingredient } from "@/components/Ingredient";
import { Recipe } from "@/components/Recipe";

const Recipes = () => {
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

			<FlatList
				data={["apple", "betroot", "pasta", "rice", "banana"]}
				renderItem={({ item }) => <Ingredient image="" name={item} />}
				horizontal
				contentContainerStyle={styles.ingredientList}
			/>

			<FlatList
				data={["recipe1", "recipe2", "recipe3", "recipe4", "recipe5"]}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.recipeList}
				style={styles.recipes}
				numColumns={2}
				renderItem={({ item }) => (
					<Recipe
						recipe={{
							image:
								"https://www.allrecipes.com/thmb/0VXMwCY9RVNrNvWcF_9v0iZpNqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/JF_241160_CreamyCottageCheeseScrambled_4x3_12902-619d00dc88594ea9b8ed884a108db16d.jpg",
							name: item,
							minutes: 30,
						}}
					/>
				)}
			/>
		</View>
	);
};

export default Recipes;
