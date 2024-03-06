import { View, Text } from "react-native";
import styles from "./styles";
import { IngredientsVertical } from "@/components/IngredientsVertical";

const Index = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				Select {"\n"}
				<Text style={styles.subtitle}>the ingredients</Text>
			</Text>
			<Text style={styles.subtitle}>
				Unleash culinary adventures with recipes tailored to your chosen
				ingredients!
			</Text>

			<IngredientsVertical />
		</View>
	);
};

export default Index;
