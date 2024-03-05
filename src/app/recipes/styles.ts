import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 32,
	},
	header: {
		paddingTop: 62,
		marginBottom: 22,
	},
	title: {
		fontSize: theme.fonts.size.body.md,
		fontFamily: theme.fonts.family.bold,
		lineHeight: 18,
	},
	ingredientList: {
		marginTop: 12,
		gap: 6,
	},
	recipes: {
		padding: 32,
	},
	recipeList: {
		gap: 12,
	},
});
