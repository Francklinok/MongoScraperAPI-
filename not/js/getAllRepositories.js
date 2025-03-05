import RepositoryModel from '../models/model.js';
// Get all repositories
export const getAllRepositories = async (req, res) => {
    try {
        // Retrieve all repositories from the database
        const repositories = await RepositoryModel.find();
        // Respond with the list of repositories
        res.status(200).json(repositories);
    }
    catch (error) {
        // Log error and respond with failure message
        console.error("Error retrieving repositories:", error);
        res.status(500).json({ message: 'Error retrieving repositories', error: error.message });
    }
};
