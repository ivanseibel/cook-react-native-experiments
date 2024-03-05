import { FlatList, ScrollView, View } from "react-native";
import { Ingredient } from "../Ingredient";
import styles from "./styles";
import { useState } from "react";

const data = [
	{
		id: "1",
		name: "Apple",
		image: require("@/assets/images/apple.png"),
	},
	{
		id: "2",
		name: "Banana",
		image: require("@/assets/images/banana.png"),
	},
	{
		id: "3",
		name: "Broccoli",
		image: require("@/assets/images/broccoli.png"),
	},
	{
		id: "4",
		name: "Carrot",
		image: require("@/assets/images/carrot.png"),
	},
];

export const Ingredients = () => {
	const [selected, setSelected] = useState<string[]>([]);

	const handlePress = (idPressed: string) => {
		if (selected.includes(idPressed)) {
			setSelected(selected.filter((id) => id !== idPressed));
		} else {
			setSelected([...selected, idPressed]);
		}
	};

	return (
		<ScrollView
			contentContainerStyle={styles.container}
			showsVerticalScrollIndicator={false}
		>
			{data.map((item) => (
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
	);
};
