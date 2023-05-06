import React from "react"
import { graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import 'bulma/css/bulma.min.css';
import { Container, Section, Heading, Content } from 'react-bulma-components';


const RecipePage = ({ data }: PageProps<Queries.RecipePageQuery>) => {
    const recipe = data.recipe!;

    const ingredient_list = [];

    for (const [index, ingredient] of recipe.recipeIngredient!.entries()) {

        if (ingredient!.title) {
            /* titles indicate a new sub-section. It would be nice if the data were more heirachical */
            ingredient_list.push(<li key={`${ingredient!.title}+${index}`}><strong>{ingredient!.title}</strong></li>)
        };
        ingredient_list.push(<li key={index}>{ingredient!.note}</li>);
    }

    return (
        <Container>
            <Section>
                <Heading size={4}>{recipe.name}</Heading>
                <p>{recipe.description}</p>
            </Section>

            <Content>
                <Heading size={5}>Ingredients</Heading>
                <ul> {ingredient_list} </ul>
            </Content>
        </Container>
    )

}


export default RecipePage;

export const query = graphql`
                query RecipePage($slug: String!) {
                    recipe(slug: {eq: $slug }) {
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
                recipeIngredient {
                    title
            note
        }
    }
  }`