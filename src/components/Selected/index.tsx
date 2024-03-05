import { Text, View } from "react-native";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "@/theme";
import { Button } from "../Button";

type ComponentProps = {
	quantity: number;
	onClear: () => void;
	onSearch: () => void;
};

export const Selected = ({ onClear, onSearch, quantity }: ComponentProps) => {
	return (
		<Animated.View
			style={styles.container}
			entering={SlideInDown.duration(500)}
			exiting={SlideOutDown.duration(500)}
		>
			<View style={styles.header}>
				<Text style={styles.title}>{quantity} ingredients selected</Text>
				<MaterialIcons
					name="close"
					size={24}
					onPress={onClear}
					color={theme.colors.gray_400}
				/>
			</View>

			<Button title="Search" onPress={onSearch} />
		</Animated.View>
	);
};
