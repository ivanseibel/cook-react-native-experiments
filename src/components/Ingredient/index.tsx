import { Image, Pressable, PressableProps, Text } from "react-native";
import styles from "./styles";

type ComponentProps = PressableProps & {
	name: string;
	image: string;
	onPress?: () => void;
	selected?: boolean;
};

export const Ingredient = ({
	name,
	image,
	selected = false,
	...rest
}: ComponentProps) => {
	return (
		<Pressable
			style={[styles.container, selected && styles.selected]}
			{...rest}
		>
			<Image
				style={styles.image}
				source={require("@/assets/images/apple.png")}
			/>
			<Text style={styles.text}>{name}</Text>
		</Pressable>
	);
};
