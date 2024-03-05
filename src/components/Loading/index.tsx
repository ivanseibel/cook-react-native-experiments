import { ActivityIndicator } from "react-native";

import styles from "./styles";
import { theme } from "@/theme";

export const Loading = () => {
	return (
		<ActivityIndicator
			style={styles.container}
			color={theme.colors.green_600}
		/>
	);
};
