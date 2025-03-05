import  express  from "express";
import  cors from "cors"
import bodyParser from 'body-parser'
import { connectDB } from "./config/database";
import { AppError, globalErrorHandler } from "./utils/errorHandler";
import router from "./router/routerApp";
// import { ORIGIN as ALLOWED_ORIGINS } from "./config/env";
// import router from "./router/routerApp";
const app = express()
// const ORIGIN: Array<string | undefined> = ALLOWED_ORIGINS || [];

app.use(bodyParser.json());// Middleware to parse incoming JSON requests


app.set("trust proxy", true)

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use((req, res, next) => {
  console.log("Incoming request:");
  console.log("Origin:", req.headers.origin);
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  next();
});

// const   = {
//     origin:[...ORIGIN, "http://localhost"]
// }
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from the frontend URL
    methods: 'GET,POST,PUT,DELETE', // Allow these HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Allow these headers
  }));
 
connectDB()

app.use((req, res, next) =>{
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));

})

app.use(globalErrorHandler)

app.use('/api', router);


export default app;