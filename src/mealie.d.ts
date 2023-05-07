/* Not sure we ended up needing all of these */
export interface UnauthorizedResponse {
    detail: string
}

export interface SuccessResponse {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    items: Recipe[],
    next: string,
    previous: string
}

export type MealieResponse =
    | SuccessResponse
    | UnauthorizedResponse


export interface RecipeIngredient {
    title: string,
    note: string!,
    unit?: string,
    food?: string,
    disableAmount?: boolean,
    quantity?: number,
    originalText?: string,
    referenceId?: string
}

export interface RecipeInstructions {
    id: string!,
    title: string,
    text: string!
    ingredientReferences: string[]
}

export interface RecipeTaxonomy {
    id: string,
    name: string,
    slug: string
}

export interface Recipe {
    id: string!,
    recipeId: string!
    recipeImg: any // temp hack, where is this typedef?
    userId?: string,
    groupId?: string,
    name: string!,
    slug: string!,
    image: string!,
    recipeYield?: string,
    totalTime?: string,
    prepTime?: string,
    cookTime?: string,
    performTime?: string,
    description: string!,
    /* I'm struggling a bit trying to tell TypeScript this will always exists as an
     * array of 0 or more RecipeTaxomony objects, and having that actually be accepted
     * by the props. So solely in the interest in not being stuck on this typing issue,
     * we're using any. */
    recipeCategory?: readonly RecipeTaxonomy[] | any,
    tags?: readonly RecipeTaxonomy[],
    tools?: string[],
    rating?: number,
    orgURL?: string,
    dateAdded?: string,
    dateUpdated?: string,
    createdAt?: string,
    updateAt?: string,
    lastMade?: string
    recipeIngredient?: readonly RecipeIngredient[]
    recipeInstructions?: RecipeInstructions[]
}