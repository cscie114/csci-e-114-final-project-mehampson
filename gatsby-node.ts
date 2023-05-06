import type { GatsbyNode } from "gatsby";
import type { Recipe, UnauthorizedResponse, SuccessResponse, MealieResponse } from "./src/mealie.d";
import fetch, { Headers } from 'node-fetch';

async function fetch_recipes() {
    console.log('env: ' + process.env.GATSBY_MEALIE_URL)
    const mealie = new URL(process.env.GATSBY_MEALIE_URL);
    mealie.pathname = "api/recipes";
    mealie.searchParams.append("page", "1");
    mealie.searchParams.append("perPage", "-1");

    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MEALIE_API_KEY}`
    });

    console.log(headers);

    const response = await fetch(mealie, { "headers": headers });
    const data: MealieResponse = await response.json();

    /* A happy response from Mealie will have an array of recipes in the 'item' property. */
    if ('items' in data) {
        console.log(data.total);
        return data.items;
    }
    /* An unhappy one will have the error message in 'detail' */
    else {
        console.log(data.detail);
        return [];
    }
}


export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
    actions,
    createNodeId,
    createContentDigest,
}) => {
    const { createNode } = actions;

    const data = await fetch_recipes();

    data.forEach((recipe: Recipe) => {
        const node = {
            ...recipe,
            /* We need to use Mealie's internal IDs, but the attribute will be overwritten in a moment unless we stash it here.*/
            recipeId: recipe.id,
            parent: null,
            children: [],
            id: createNodeId(`recipe_${recipe.id}`),
            internal: {
                type: "Recipe",
                content: JSON.stringify(recipe),
                contentDigest: createContentDigest(recipe),
            },
        };

        createNode(node);
    });
};

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
    actions.createTypes(`
      type Recipe implements Node {
        recipeId: String!
        name: String!
        description: String!
        image: String!

      }
`)
}