import { Image, Pressable, Text } from "react-native";
import styles from "./styles";

export const Ingredient = () => {
	return (
		<Pressable style={styles.container}>
			<Image
				style={styles.image}
				source={require("@/assets/images/apple.png")}
			/>
			<Text style={styles.text}>Apple</Text>
		</Pressable>
	);
};
