// Importing express library to handle HTTP requests
import express from 'express';
import { validateBrowserSession } from '../middleware/Postmiddleware.js';
import { CheckRepositoryExist } from '../middleware/getMilddware.js';
import { ValidateAllRepositoryQuery } from '../middleware/getAllMiddleware.js';
import { addRepository } from '../controllers/addAllRepository.js';
import { getAllRepositories } from '../controllers/getAllRepositories.js';
import { findReposByName } from '../controllers/findRepositoryByName.js';
import { getRepositoryById } from '../controllers/getRepositoryById.js';
import { updateRepository } from '../controllers/updateOneRepository.js';
import { deleteOneRepository } from '../controllers/deleteOneRepository.js';
// Creating a new router object using express.Router()
const router = express.Router();
// Importing repository-related functions from the controller
// Route to handle the creation of a new repository (POST request)
router.post('/repositories', validateBrowserSession, addRepository);
// Route to get all repositories (GET request)
router.get('/repositories', ValidateAllRepositoryQuery, getAllRepositories);
// Route to find repositories by name (GET request)
router.get('/repository', CheckRepositoryExist, findReposByName);
// Route to get a specific repository by its ID (GET request)
router.get('/repositories/:id', CheckRepositoryExist, getRepositoryById);
// Route to update a repository by its ID (PUT request)
router.put('/repositories/:id', validateBrowserSession, updateRepository);
// Route to delete a repository by its ID (DELETE request)
router.delete('/repositories/:id', CheckRepositoryExist, deleteOneRepository);
// Exporting the router to be used in the main application
export default router;
