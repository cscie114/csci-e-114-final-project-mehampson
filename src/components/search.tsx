import * as React from "react";
import { useState } from "react";
import { graphql, Link } from "gatsby";
import { Recipe, Todo } from "../mealie";
import { getSearchIndex } from "../hooks/getSearchIndex";

import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from "react-bootstrap";


/* Using a bunch of 'any' types here, since it's Monday and I don't quite get how
 * TypeScript handles typing well enough to fully solve all those.*/

// Utility function to lowercase the title and explanation for searching
const normalizeNode = (node: Recipe) => {
    return {
        ...node,
        name: node.name.toLowerCase(),
        description: node.description.toLowerCase(),
        /* Don't know if this is the Proper Way, but we'll concatenate aany
         * tags/categories/ingredients for the index */
        tags: node.tags?.map(t => t.name).toString().toLowerCase(),
        categories: node.recipeCategory?.map(c => c.name).toString().toLowerCase(),
        ingredients: node.recipeIngredient?.map(i => i.note).toString().toLowerCase()
    };
};

// Utility function to match a node to each searchable field
const matchNode = (node: Todo, terms: Todo) => {
    const { name,
        description,
        tags,
        categories,
        ingredients
    } = node;
    return name.includes(terms)
        || description.includes(terms)
        || (tags && tags.includes(terms))
        || (categories && categories.includes(terms))
        || (ingredients && ingredients.includes(terms));
}

// Utility function to match nodes based on search terms
const filterNodes = (nodes: [Recipe], terms: Todo) => {
    if (!terms || terms.length === 0) {
        return [];
    }
    terms = terms.toLowerCase();
    return nodes.map(normalizeNode).filter((node) => matchNode(node, terms));
}

// Search component
const SearchPage = () => {
    const [terms, setTerms] = useState(null);
    const handleSearch = (e: Todo) => setTerms(e.target.value);
    const recipes = getSearchIndex();
    const matches = filterNodes(recipes, terms);

    return (
        <Form className="form-inline my-2 my-lg-0">
            <FloatingLabel
                controlId="recipe-search"
                label="Search">
                <Form.Control id="recipe-search" type="text" onChange={handleSearch} />
            </FloatingLabel>
            <div>
                {
                    terms && <p>{matches.length} recipes found</p>}
            </div>
            <ListGroup>
                {matches.map((recipe) =>
                (
                    <ListGroup.Item action key={recipe.id}>
                        <Link to={`/recipe/${recipe.slug}`}>{recipe.name}</Link>
                    </ListGroup.Item>)
                )}
            </ListGroup>
        </Form>
    );
};

// Retrieve ALL parks data, grab markdown while we're at it
// Since it is a small number, we can do the search on the client-side
export const query = graphql`
    query RecipeSearch {
    allRecipe {
        nodes {
            id
            name
            slug
            description
            recipeCategory {
                name
            }
            tags {
                name
            }
            recipeIngredient {
                note
            }
        }
    }
    }
`;

export default SearchPage;

export const Head = () => <title>Search Page</title>;