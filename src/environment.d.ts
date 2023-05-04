declare global {
    /* Thanks, https://stackoverflow.com/questions/45194598/using-process-env-in-typescript */
    namespace NodeJS {
        interface ProcessEnv {
            MEALIE_API_KEY: string;
            MEALIE_URL: string;
        }
    }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }