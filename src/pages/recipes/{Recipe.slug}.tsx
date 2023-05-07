import React from "react";
import { graphql } from "gatsby";
import type { PageProps } from "gatsby";
import Layout from '../../components/layout';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';


const RecipePage = ({ data }: PageProps<Queries.RecipePageQuery>) => {
    const { recipe } = data;

    if (!recipe) { return; }
    else {
        return (
            <Layout>
                <Container>
                    <Row>
                        <Col>
                            <h4>{recipe.name}</h4>
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
                                        <ListGroup variant="flush"> {recipe.recipeIngredient && recipe.recipeIngredient.map((ingredient, index) => {
                                            if (!ingredient) { return; }
                                            else {
                                                return (
                                                    <>
                                                        {/* Again, it's complaining that `ingredient` might be null */}
                                                        {ingredient.title ? <ListGroup.Item variant="secondary" key={`ing-title-${index}`}><strong>{ingredient.title}</strong></ListGroup.Item> : ''}
                                                        <ListGroup.Item key={`ing-${index}`}>{ingredient.note}</ListGroup.Item>
                                                    </>
                                                );
                                            }
                                        })}
                                        </ListGroup>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#instructions">
                                        <ListGroup variant="flush" as="ol" numbered> {recipe.recipeInstructions && recipe.recipeInstructions.map((instruction, index) => {
                                            if (!instruction) { return; }
                                            else {
                                                return (
                                                    <>
                                                        {instruction.title ? <ListGroup.Item variant="secondary" key={`instr-title-${index}`}><strong>{instruction.title}</strong></ListGroup.Item> : ''}
                                                        <ListGroup.Item key={`ing-${index}`}>{instruction.text}</ListGroup.Item>
                                                    </>
                                                );
                                            }
                                        })}
                                        </ListGroup>
                                    </Tab.Pane>
                                </Tab.Content>

                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        );
    }
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