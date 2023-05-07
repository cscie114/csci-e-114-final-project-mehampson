import { useStaticQuery, graphql } from "gatsby";

export const siteCategories = (): string[] => {

    const { allRecipe } = useStaticQuery(graphql`
        query CatQuery {
            allRecipe {
                categories: distinct(field: {recipeCategory: {name: SELECT}})
            }
        }`);
    return allRecipe.categories || [];
};