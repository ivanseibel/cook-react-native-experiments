import { View, Text } from "react-native";
import styles from "./styles";
import { Ingredients } from "@/components/Ingredients";

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

			<Ingredients />
		</View>
	);
};

export default Index;
