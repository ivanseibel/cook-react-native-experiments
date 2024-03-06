import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export default StyleSheet.create({
	container: {
		flex: 1,
		alignContent: "flex-start",
	},
	header: {
		paddingHorizontal: 32,
		paddingTop: 62,
		marginBottom: 12,
	},
	title: {
		fontSize: theme.fonts.size.body.md,
		fontFamily: theme.fonts.family.bold,
		lineHeight: 18,
		marginTop: 22,
		paddingHorizontal: 32,
	},
	recipes: {
		paddingHorizontal: 32,
		paddingVertical: 24,
	},
	recipeList: {
		gap: 12,
	},
});
