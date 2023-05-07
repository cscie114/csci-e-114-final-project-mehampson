import * as React from 'react';
import { Link } from 'gatsby';
import { Recipe } from '../mealie.d';
import { recipeCard } from "../components/css/recipes.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import 'bootstrap/dist/css/bootstrap.min.css';

interface RecipeCardProps {
    recipe: Recipe
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
    const image = getImage(recipe.recipeImg);
    return (
        <div className={`card border-secondary ${recipeCard}`}>
            <Link to={`recipes/${recipe.slug}`}>
                {image && (<GatsbyImage image={image} alt={recipe.name} className={'card-img-top'} />)}
                <div className='card-body'>
                    <div className='card=title'>{recipe.name}</div>
                </div>
            </Link>
        </div>
    );
};

export default RecipeCard;

