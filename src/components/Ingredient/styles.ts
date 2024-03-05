import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		flexDirection: "row",
		height: 42,
		paddingHorizontal: 16,
		alignItems: "center",
		gap: 6,
		alignSelf: "flex-start",

		borderRadius: theme.borderRadius.full,
		borderWidth: 2,
		borderColor: theme.colors.gray_200,
	},

	image: {
		width: 24,
		height: 24,
	},

	text: {
		fontSize: theme.fonts.size.body.sm,
		fontFamily: theme.fonts.family.medium,
	},
});
