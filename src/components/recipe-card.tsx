import * as React from 'react';
import { Link } from 'gatsby';
import { Recipe } from '../mealie.d';
import { recipeCard } from "../components/css/recipes.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

//http://192.168.1.19:9926/api/media/recipes/{id}/images/original.webp?rnd=1&version={image}

interface RecipeCardProps {
    recipe: Recipe
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
    const image = getImage(recipe.recipeImg);
    return (
        <Card border="secondary" className={recipeCard}>
            {image && (<GatsbyImage image={image} alt={recipe.name} className={'card-img-top'} />)}
            <Link to={`recipes/${recipe.slug}`}>
                <Card.Body>
                    <Card.Title>{recipe.name}</Card.Title>
                </Card.Body>
            </Link>

        </Card >
    );
}

export default RecipeCard;

