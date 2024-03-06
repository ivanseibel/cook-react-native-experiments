import { supabase } from "./supabase";

export const findByIngredientsIds = async (ids: string[]) => {
	const { data } = await supabase
		.rpc("recipes_by_ingredients", { ids })
		.returns<RecipeResponse[]>();

	return data ?? [];
};

export const show = async (id: string) => {
	const { data } = await supabase
		.from("recipes")
		.select()
		.eq("id", id)
		.returns<RecipeResponse>()
		.single();

	return data;
};
