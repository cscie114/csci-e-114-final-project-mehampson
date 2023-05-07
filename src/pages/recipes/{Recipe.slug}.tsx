import React from "react";
import { graphql } from "gatsby";
import type { PageProps } from "gatsby";
import Layout from '../../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';


const RecipePage = ({ data }: PageProps<Queries.RecipePageQuery>) => {
    const { recipe } = data;

    if (!recipe) { return; }
    else {
        return (
            <Layout>
                <div className="container-fluid">
                    <div className="row">
                        <div className='col'>
                            <h4>{recipe.name}</h4>
                            <p>{recipe.description}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col'>
                            <ul className="nav nav-tabs" id="recipe-tabs" role="tablist">
                                <li className="nav-item">
                                    <button className="nav-link active" id="ing-tab" data-bs-toggle="tab" data-bs-target="#ingredients" type="button" role="tab" aria-controls="home" aria-selected="true">Ingredients</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link active" id="instr-tab" data-bs-toggle="tab" data-bs-target="#instructions" type="button" role="tab" aria-controls="home" aria-selected="true">Instructions</button>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div className="tab-pane active" id="ingredients" role="tabpanel" aria-labelledby="ing-tab">
                                    <ul>
                                        {recipe.recipeIngredient && recipe.recipeIngredient.map((ingredient, index) => {
                                            if (!ingredient) { return; }
                                            else {
                                                return (
                                                    <>
                                                        {/* Again, it's complaining that `ingredient` might be null */}
                                                        {ingredient.title ? <li key={`ing-title-${index}`}><strong>{ingredient.title}</strong></li> : ''}
                                                        <li key={`ing-${index}`}>{ingredient.note}</li>
                                                    </>
                                                );
                                            }
                                        })}
                                    </ul>
                                </div>

                                <div className="tab-pane" id="instructions" role="tabpanel" aria-labelledby="instr-tab">
                                    <ul>
                                        {recipe.recipeInstructions && recipe.recipeInstructions.map((instruction, index) => {
                                            if (!instruction) { return; }
                                            else {
                                                return (
                                                    <>
                                                        {instruction.title ? <li key={`instr-title-${index}`}><strong>{instruction.title}</strong></li> : ''}
                                                        <li key={`ing-${index}`}>{instruction.text}</li>
                                                    </>
                                                );
                                            }
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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