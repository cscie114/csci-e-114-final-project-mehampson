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
    title: String,
    note: String!,
    unit: String,
    food: String,
    disableAmount: Boolean,
    quantity: Number,
    originalText: String,
    referenceId: String!
}

export interface RecipeInstructions {
    id: string!,
    title: string,
    text: string!
    ingredientReferences: String[]
}

export type RecipeList =
    | RecipeIngredient
    | RecipeInstructions


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
    recipeCategory?: string[],
    tags?: string[],
    tools?: string[],
    rating?: number,
    orgURL?: string,
    dateAdded?: string,
    dateUpdated?: string,
    createdAt?: string,
    updateAt?: string,
    lastMade?: string
    recipeIngredient?: RecipeIngredient[]
    recipeInstructions?: RecipeInstructions[]
}