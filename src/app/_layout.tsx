import { Slot } from "expo-router";
import {
	useFonts,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { ActivityIndicator } from "react-native";

const Layout = () => {
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_700Bold,
	});

	if (!fontsLoaded) {
		return <ActivityIndicator size={"large"} />;
	}

	return <Slot />;
};

export default Layout;
