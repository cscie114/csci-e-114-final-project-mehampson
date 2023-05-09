import { useStaticQuery, graphql } from "gatsby";

export const getSearchIndex = () => {
    const { allRecipe } = useStaticQuery(graphql`
        query RecipeIndex {
            allRecipe {
                nodes {
                id
                name
                slug
                description
                recipeCategory {
                    name
                }
                tags {
                    name
                }
                recipeIngredient {
                    note
                }
                }
            }
        }
    `);
    return allRecipe.nodes;
};