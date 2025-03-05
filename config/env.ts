import dotenv from "dotenv";
import path from "path"

//load environment variales from .env fileURLToPath

dotenv.config({
    path:path.resolve(__dirname, "../../.env")

})

const ensureEnVVar = (varName:string) =>{
    if(!process.env[varName]){
        throw new Error(`Environment variable ${varName} is missing`)
    }
}

ensureEnVVar("ORIGIN_1")
ensureEnVVar("ORIGIN_2")
ensureEnVVar("dbURL")
ensureEnVVar("PORT")
ensureEnVVar("LOG_LEVEL")
ensureEnVVar("CHROME_EXECUTABLE_PATH")

export const ORIGIN = [process.env.ORIGIN_1, process.env.ORIGIN_2]

export const {
    dbURL,
    PORT,
    LOG_LEVEL,
    CHROME_EXECUTABLE_PATH,
} = process.env;