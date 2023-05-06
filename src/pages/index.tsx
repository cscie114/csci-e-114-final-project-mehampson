import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"
import RecipeCard from "../components/recipe-card";
import 'bulma/css/bulma.min.css';
import { Section, Container } from 'react-bulma-components';

export const Head: HeadFC = () => <title>Meal Board</title>

//http://192.168.1.19:9926/api/media/recipes/{id}/images/min-original.webp?rnd=1&version={image}


const RecipeIndex = ({ data }: PageProps<Queries.RecipeIndexQuery>) => {
  return (
    <main>
      <Container display="flex" flexWrap="wrap" alignItems="flex-start" alignContent="space-evenly" style={{ rowGap: "2rem" }}>
        {data.allRecipe.nodes?.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </Container>

    </main >
  )
}

export default RecipeIndex;

export const query = graphql`
query RecipeIndex {
  allRecipe {
    nodes {
      id
      name
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