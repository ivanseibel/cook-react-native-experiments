import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flexDirection: "row",
		height: 42,
		paddingHorizontal: 16,
		alignItems: "center",
		gap: 12,
		alignSelf: "flex-start",

		borderRadius: theme.borderRadius.full,
		borderWidth: 2,
		borderColor: theme.colors.gray_200,
	},

	selected: {
		backgroundColor: theme.colors.green_100,
		borderColor: theme.colors.green_600,
	},

	image: {
		width: 16,
		height: 16,
	},

	text: {
		fontSize: theme.fonts.size.body.sm,
		fontFamily: theme.fonts.family.medium,
	},
});
