import { Alert, FlatList, ScrollView, View } from "react-native";
import { Ingredient } from "../Ingredient";
import styles from "./styles";
import { useEffect, useState } from "react";
import { Selected } from "../Selected";
import { router } from "expo-router";
import { services } from "@/services";

export const Ingredients = () => {
	const [selected, setSelected] = useState<string[]>([]);
	const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);

	useEffect(() => {
		services.ingredients.findAll().then((data) => {
			setIngredients(data);
		});
	}, []);

	const handlePress = (idPressed: string) => {
		if (selected.includes(idPressed)) {
			setSelected(selected.filter((id) => id !== idPressed));
		} else {
			setSelected([...selected, idPressed]);
		}
	};

	const handleOnClear = () => {
		Alert.alert("Clear", "Are you sure you want to clear?", [
			{
				text: "Yes",
				onPress: () => setSelected([]),
			},
			{
				text: "No",
				style: "cancel",
			},
		]);
	};

	const handleOnSearch = () => {
		router.navigate("/recipes/");
	};

	return (
		<View>
			<ScrollView
				contentContainerStyle={styles.container}
				showsVerticalScrollIndicator={false}
			>
				{ingredients.map((item) => (
					<Ingredient
						key={item.id}
						name={item.name}
						image={item.image}
						onPress={() => {
							handlePress(item.id);
						}}
						selected={selected.includes(item.id)}
					/>
				))}
			</ScrollView>

			{selected.length > 0 && (
				<Selected
					onClear={handleOnClear}
					onSearch={handleOnSearch}
					quantity={selected.length}
				/>
			)}
		</View>
	);
};
