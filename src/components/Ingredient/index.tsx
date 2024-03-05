import { Image, Pressable, PressableProps, Text } from "react-native";
import styles from "./styles";
import { services } from "@/services";

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
	const { storage } = services;

	return (
		<Pressable
			style={[styles.container, selected && styles.selected]}
			{...rest}
		>
			<Image style={styles.image} source={{ uri: storage.path + image }} />
			<Text style={styles.text}>{name}</Text>
		</Pressable>
	);
};
