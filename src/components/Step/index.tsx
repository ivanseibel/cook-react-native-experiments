import { Text, View } from "react-native";

import styles from "./styles";

type ComponentProps = {
	step: number;
	description: string;
};

export const Step = ({ step, description }: ComponentProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.step}>{step}</Text>

			<Text style={styles.description}>{description}</Text>
		</View>
	);
};
