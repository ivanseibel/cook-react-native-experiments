import * as ingredients from "./ingredients.service";
import * as recipes from "./recipes.service";
import * as preparations from "./preparations.service";

export const services = {
	ingredients,
	recipes,
	preparations,
	storage: {
		path: "https://zhtzqcfmiaszsjszqdny.supabase.co/storage/v1/object/public/ingredients/",
	},
};
