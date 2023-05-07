import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";

import RecipeCard from "../../components/recipe-card";
import Layout from "../../components/layout";
import { recipeList } from "../components/css/recipes.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Head: HeadFC = () => <title>Meal Board</title>;

const CategoryIndex = ({ data }: PageProps<Queries.CategoryIndexQuery>) => {
    return (
        <Layout>
            <>
                <div className={recipeList}>
                    {data.allRecipe.nodes?.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            </ >
        </Layout>
    );
};

export default CategoryIndex;

export const query = graphql`
    query CategoryIndex($category: String!) {
    allRecipe(filter: {recipeCategory: {elemMatch: {name: {eq: $category}}}}) {
        nodes {
        id
        name
        slug
        description
        image
        recipeId
        recipeImg {
            childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
            }
        }
        recipeCategory {
            id
            name
            slug
        }
        }
    }
    }`;