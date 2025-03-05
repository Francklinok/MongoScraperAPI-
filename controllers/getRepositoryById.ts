import RepositoryModel from '../models/RepositoryModel';
import { Request, Response } from 'express';
// Get a repository by its ID
export const getRepositoryById = async (req:Request, res:Response) => {
    try {
        // Find the repository by its ID
        // const repository = await RepositoryModel.findById(req.params.id);
        const repository = (req as any).repository
        // If no repository is found, return a 404 error
        if (!repository) return res.status(404).json({ message: 'Repository not found' });
        res.status(200).json((req as any).repository)

        // Respond with the found repository
        // res.status(200).json(repository);
    } catch (error) {
        // Log error and respond with failure message
        console.error("Error retrieving repository by ID:", error);
        res.status(500).json({ 
            message: 'Error retrieving repository', 
            error: (error as Error).message });
    }
};
export default getRepositoryById;