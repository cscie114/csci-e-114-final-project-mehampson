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


export interface Recipe {
    id: string,
    userId: string,
    groupId: string,
    name: string,
    slug: string,
    image: string,
    recipeYield: string,
    totalTime: string,
    prepTime: string,
    cookTime: string,
    performTime: string,
    description: string,
    recipeCategory: string[],
    tags: string[],
    tools: string[],
    rating: number,
    orgURL: string,
    dateAdded: string,
    dateUpdated: string,
    createdAt: string,
    updateAt: string,
    lastMade: string
}

