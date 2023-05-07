import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"
import RecipeCard from "../components/recipe-card";
import Layout from "../components/layout";
import 'bulma/css/bulma.min.css';
import { recipeList } from "../components/css/recipes.module.css";

export const Head: HeadFC = () => <title>Meal Board</title>

//http://192.168.1.19:9926/api/media/recipes/{id}/images/min-original.webp?rnd=1&version={image}


const RecipeIndex = ({ data }: PageProps<Queries.RecipeIndexQuery>) => {
  return (
    <Layout>
      <>
        <div className={recipeList}>
          {data.allRecipe.nodes?.map((recipe) => (
            <RecipeCard recipe={recipe} />
          ))}
        </div>
      </ >
    </Layout>
  )
}

export default RecipeIndex;

export const query = graphql`
query RecipeIndex {
  allRecipe {
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
    }
  }
}`