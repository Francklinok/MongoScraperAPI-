import  repositoryRoute from './router/routerApp.js'
import { PORT } from "./config/env";
import app from "./app.js";
import logger from './utils/logger.js';


const startServer = ()=>{
    app.listen(PORT, () =>{
        logger.info(`Server running on port ${PORT}`);

    })
}

startServer()