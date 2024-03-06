import { supabase } from "./supabase";

export const findByRecipeId = async (id: string) => {
	const { data } = await supabase
		.from("preparations")
		.select()
		.eq("recipe_id", id)
		.returns<PreparationsResponse[]>();

	return data ?? [];
};
