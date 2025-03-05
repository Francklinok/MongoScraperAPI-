// Importing express library to handle HTTP requests
import express from 'express';
import {validateBrowserSession} from '../middleware/Postmiddleware';
import {CheckRepositoryExist} from '../middleware/getMilddware.js';
import {ValidateAllRepositoryQuery} from '../middleware/getAllMiddleware';
import {addRepository}  from '../controllers/addAllRepository';
import {getAllRepositories}  from '../controllers/getAllRepositories';
import { findReposByName } from '../controllers/findRepositoryByName';
import { getRepositoryById } from '../controllers/getRepositoryById';
import { updateRepository } from '../controllers/updateOneRepository';
import {deleteOneRepository} from '../controllers/deleteOneRepository';
import Router from "express"

const router = Router()


// Creating a new router object using express.Router()

// Importing repository-related functions from the controller

// Route to handle the creation of a new repository (POST request)
router.post('/repositories',validateBrowserSession, addRepository);

// Route to get all repositories (GET request)
router.get('/repositories',ValidateAllRepositoryQuery, getAllRepositories);

// Route to find repositories by name (GET request)
router.get('/repository',CheckRepositoryExist, findReposByName);

// Route to get a specific repository by its ID (GET request)
router.get('/repositories/:id',CheckRepositoryExist, getRepositoryById);

// Route to update a repository by its ID (PUT request)
router.put('/repositories/:id',validateBrowserSession, updateRepository);

// Route to delete a repository by its ID (DELETE request)
router.delete('/repositories/:id',CheckRepositoryExist, deleteOneRepository);

// Exporting the router to be used in the main application
export default router;
