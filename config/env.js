import dotenv from "dotenv";
import path from "path"

//load environment variales from .env fileURLToPath

dotenv.config({
    path:path.resolve(__dirname, "../../.env")

})
export const ORIGIN = [process.env.ORIGIN_1, process.env.ORIGIN_2]

export {
    dbURL,
    PORT
} = process.env