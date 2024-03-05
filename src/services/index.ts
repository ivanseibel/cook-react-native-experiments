import * as ingredients from "./ingredients.service";

export const services = {
	ingredients,
	storage: {
		path: "https://zhtzqcfmiaszsjszqdny.supabase.co/storage/v1/object/public/ingredients/",
	},
};
