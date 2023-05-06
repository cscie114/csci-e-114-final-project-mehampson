declare global {
    /* Thanks, https://stackoverflow.com/questions/45194598/using-process-env-in-typescript */
    namespace NodeJS {
        interface ProcessEnv {
            /* Prefixing the env with GATSBY_ magically makes it available for our client-side code.
             * We want that for the URL, to hot-load images from Mealie, but don't need the API key to be public. */
            MEALIE_API_KEY: string;
            GATSBY_MEALIE_URL: string;
        }
    }
}

export { }