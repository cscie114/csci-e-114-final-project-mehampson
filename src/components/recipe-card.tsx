import * as React from 'react';
import { Link } from 'gatsby';
import { Recipe } from '../mealie.d';
import 'bulma/css/bulma.min.css';
import { Card, Media, Image, Heading, Content } from 'react-bulma-components';

//http://192.168.1.19:9926/api/media/recipes/{id}/images/original.webp?rnd=1&version={image}

interface RecipeCardProps {
    recipe: Recipe
}


const RecipeCard = ({ recipe }: RecipeCardProps) => (
    <Card style={{ width: '20rem', margin: 'auto' }}>
        {recipe.image ?
            (<Card.Image
                size="4by3"
                src={`${process.env.GATSBY_MEALIE_URL}/api/media/recipes/${recipe.recipeId}/images/original.webp`}
            />)
            : (<span />)
        }
        <Card.Content>
            <Media>
                <Media.Item>
                    <Heading size={4}>{recipe.name}</Heading>
                </Media.Item>
            </Media>
        </Card.Content>
    </Card >
);

export default RecipeCard;

