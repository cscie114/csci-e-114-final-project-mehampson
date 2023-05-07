import * as React from 'react';
import { Link } from 'gatsby';
import { Recipe } from '../mealie.d';
import 'bulma/css/bulma.min.css';
import { recipeCard } from "../components/css/recipes.module.css";
import { Card, Media, Heading } from 'react-bulma-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

//http://192.168.1.19:9926/api/media/recipes/{id}/images/original.webp?rnd=1&version={image}

interface RecipeCardProps {
    recipe: Recipe
}


const RecipeCard = ({ recipe }: RecipeCardProps) => {
    const image = getImage(recipe.recipeImg);
    return (<div className={recipeCard}>
        {recipe.recipeImg && (<GatsbyImage image={recipe.recipeImg.childImageSharp.gatsbyImageData} alt={recipe.name} />)}
        <Link to={`recipes/${recipe.slug}`}>
            <Card.Content>
                <Media>
                    <Media.Item>
                        <Heading size={4}>{recipe.name}</Heading>
                    </Media.Item>
                </Media>
            </Card.Content>
        </Link>
    </div >
    )
};

export default RecipeCard;

