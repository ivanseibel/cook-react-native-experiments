import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export default StyleSheet.create({
	mainContainer: {
		flex: 1,
		alignContent: "flex-start",
	},
	image: {
		width: "100%",
		height: 192,
		backgroundColor: theme.colors.gray_300,
	},
	recipeContainer: {
		flex: 1,
		paddingHorizontal: 32,
		backgroundColor: theme.colors.white,
		marginTop: -24,
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
	},
	recipeHeader: {
		paddingTop: 24,
		marginBottom: 12,
	},

	recipeTitle: {
		fontSize: theme.fonts.size.heading.md,
		fontFamily: theme.fonts.family.bold,
	},

	recipePreparationTime: {
		fontSize: theme.fonts.size.body.sm,
		fontFamily: theme.fonts.family.medium,
		color: theme.colors.gray_400,
	},
	ingredientsTitle: {
		fontSize: theme.fonts.size.body.md,
		fontFamily: theme.fonts.family.medium,
		marginTop: 36,
		marginBottom: 12,
	},
	recipePreparationTitle: {
		fontSize: theme.fonts.size.body.md,
		fontFamily: theme.fonts.family.medium,
		marginTop: 36,
		marginBottom: 12,
	},
});
