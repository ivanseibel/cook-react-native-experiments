import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import styles from "./styles";

type ComponentProps = TouchableOpacityProps & {
	title: string;
};

export const Button = ({ title, ...rest }: ComponentProps) => {
	return (
		<TouchableOpacity activeOpacity={0.7} style={[styles.button]} {...rest}>
			<Text style={[styles.text]}>{title}</Text>
		</TouchableOpacity>
	);
};
