import React from "react"
import { graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import 'bulma/css/bulma.min.css';
import { Container, Section, Heading, Block } from 'react-bulma-components';
import Layout from '../../components/layout';


const RecipePage = ({ data }: PageProps<Queries.RecipePageQuery>) => {
    const recipe = data.recipe!;

    /* Build out the ingredient and instructions lists.
     * I know this is a pretty clunky way to do this but TypeScript is giving me a headache here. */
    const ingredients = [];
    for (const [index, ingredient] of recipe.recipeIngredient!.entries()) {
        if (ingredient!.title) {
            /* titles indicate a new sub-section. It would be nice if the data were more heirachical */
            ingredients.push(<li key={`${ingredient!.title}+${index}`}><strong>{ingredient!.title}</strong></li>)
        };
        ingredients.push(<li key={index}>{ingredient!.note}</li>);
    }

    const instructions = [];
    for (const [index, instruction] of recipe.recipeInstructions!.entries()) {
        if (instruction!.title) {
            /* titles indicate a new sub-section. It would be nice if the data were more heirachical */
            instructions.push(<li key={`${instruction!.title}+${index}`}><strong>{instruction!.title}</strong></li>)
        };
        instructions.push(<li key={index}>{instruction!.text}</li>);
    }

    return (
        <Layout>
            <Container>
                <Section>
                    <Block>
                        <Heading size={4}>{recipe.name}</Heading>
                        <p>{recipe.description}</p>
                    </Block>

                    <Block>
                        <Heading size={5}>Ingredients</Heading>
                        <ul> {ingredients} </ul>
                    </Block>

                    <Block>
                        <Heading size={5}>Instructions</Heading>
                        <ul> {instructions} </ul>
                    </Block>
                </Section>
            </Container>
        </Layout>
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
        recipeInstructions {
            title
            text
        }
    }
  }`