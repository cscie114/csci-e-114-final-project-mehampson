import React from "react";
import { graphql } from "gatsby";
import type { PageProps } from "gatsby";
import { Heading } from 'react-bulma-components';
import Layout from '../../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';

const RecipePage = ({ data }: PageProps<Queries.RecipePageQuery>) => {
    const recipe = data.recipe!;

    /* Build out the ingredient and instructions lists.
     * I know this is a pretty clunky way to do this but TypeScript is giving me a headache here. */
    const ingredients = [];
    for (const [index, ingredient] of recipe.recipeIngredient!.entries()) {
        if (ingredient!.title) {
            /* titles indicate a new sub-section. It would be nice if the data were more heirachical */
            ingredients.push(<ListGroup.Item variant="secondary" key={`${ingredient!.title}+${index}`}><strong>{ingredient!.title}</strong></ListGroup.Item>)
        }
        ingredients.push(<ListGroup.Item key={index}>{ingredient!.note}</ListGroup.Item>);
    }

    const instructions = [];
    for (const [index, instruction] of recipe.recipeInstructions!.entries()) {
        if (instruction!.title) {
            /* titles indicate a new sub-section. It would be nice if the data were more heirachical */
            instructions.push(<ListGroup.Item variant="secondary" key={`${instruction!.title}+${index}`}><strong>{instruction!.title}</strong></ListGroup.Item>)
        }
        instructions.push(<ListGroup.Item key={index}>{instruction!.text}</ListGroup.Item>);
    }

    return (
        <Layout>
            <Container>
                <Row>
                    <Col>
                        <Heading size={4}>{recipe.name}</Heading>
                        <p>{recipe.description}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tab.Container id="recipe-tabs" defaultActiveKey="#ingredients">
                            <ListGroup horizontal>
                                <ListGroup.Item action href="#ingredients">Ingredients</ListGroup.Item>
                                <ListGroup.Item action href="#instructions">Instructions</ListGroup.Item>
                            </ListGroup>
                            <Tab.Content>
                                <Tab.Pane eventKey="#ingredients">
                                    <Heading size={5}>Ingredients</Heading>
                                    <ListGroup variant="flush"> {ingredients} </ListGroup>

                                </Tab.Pane>
                                <Tab.Pane eventKey="#instructions">
                                    <Heading size={5}>Instructions</Heading>
                                    <ListGroup variant="flush" as="ol" numbered> {instructions} </ListGroup>
                                </Tab.Pane>
                            </Tab.Content>

                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );

};


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
  }`;