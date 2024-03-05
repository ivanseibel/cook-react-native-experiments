import { supabase } from "./supabase";

export const findAll = async () => {
	const { data } = await supabase
		.from("ingredients")
		.select("*")
		.order("name", { ascending: true })
		.returns<IngredientResponse[]>();

	return data ?? [];
};
