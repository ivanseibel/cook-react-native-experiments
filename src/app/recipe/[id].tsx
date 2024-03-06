import { Image, StatusBar, Text, View } from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { IngredientsHorizontal } from "@/components/IngredientsHorizontal";

const ingredients = [
	{
		id: "1",
		name: "Pasta",
		image:
			"https://cooknenjoy.com/wp-content/uploads/2021/11/P1340162-1800x1352.jpg",
	},
	{
		id: "2",
		name: "Tomato",
		image:
			"https://cooknenjoy.com/wp-content/uploads/2021/11/P1340162-1800x1352.jpg",
	},
	{
		id: "3",
		name: "Garlic",
		image:
			"https://cooknenjoy.com/wp-content/uploads/2021/11/P1340162-1800x1352.jpg",
	},
	{
		id: "4",
		name: "Olive Oil",
		image:
			"https://cooknenjoy.com/wp-content/uploads/2021/11/P1340162-1800x1352.jpg",
	},
	{
		id: "5",
		name: "Salt",
		image:
			"https://cooknenjoy.com/wp-content/uploads/2021/11/P1340162-1800x1352.jpg",
	},
	{
		id: "6",
		name: "Pepper",
		image:
			"https://cooknenjoy.com/wp-content/uploads/2021/11/P1340162-1800x1352.jpg",
	},
	{
		id: "7",
		name: "Basil",
		image:
			"https://cooknenjoy.com/wp-content/uploads/2021/11/P1340162-1800x1352.jpg",
	},
	{
		id: "8",
		name: "Parmesan",
		image:
			"https://cooknenjoy.com/wp-content/uploads/2021/11/P1340162-1800x1352.jpg",
	},
];

const Recipe = () => {
	const router = useRouter();

	return (
		<View style={styles.mainContainer}>
			<StatusBar barStyle="dark-content" />
			<Image
				style={styles.image}
				source={{
					uri: "https://cooknenjoy.com/wp-content/uploads/2021/11/P1340162-1800x1352.jpg",
				}}
			/>

			{/* Recipe Container */}
			<View style={styles.recipeContainer}>
				<View style={styles.recipeHeader}>
					<MaterialIcons
						name="arrow-back"
						size={32}
						onPress={() => router.back()}
					/>
				</View>

				<Text style={styles.recipeTitle}>Pasta with Tomato Sauce</Text>
				<Text style={styles.recipePreparationTime}>
					20 minutes preparation time
				</Text>

				<Text style={styles.ingredientsTitle}>Ingredients</Text>
				<IngredientsHorizontal ingredients={ingredients} />

				<Text style={styles.recipePreparationTitle}>Preparation</Text>
			</View>
		</View>
	);
};

export default Recipe;
