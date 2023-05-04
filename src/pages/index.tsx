import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"

export const Head: HeadFC = () => <title>Meal Board</title>

//http://192.168.1.19:9926/api/media/recipes/{id}/images/min-original.webp?rnd=1&version={image}


const RecipeIndex = ({ data }: PageProps<Queries.RecipeIndexQuery>) => {
  return (
    <main>
      <p>Site title: TESTING</p>
      <section>
        {data.allRecipe.nodes?.map((recipe) => (
          <div key={recipe.id}>{recipe.name}</div>
        ))}
      </section>

    </main>
  )
}

export default RecipeIndex;

export const query = graphql`
query RecipeIndex {
  allRecipe {
    nodes {
      id
      name
    }
  }
}`