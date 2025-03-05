import RepositoryModel from '../models/model.js';
// Delete a repository by its ID
export const deleteRepository = async (req, res) => {
    try {
        // Get the repository ID from the request parameters
        const repositoryId = req.params.id;
        console.log(`Deleting repository with ID: ${repositoryId}`);
        // Find and delete the repository by its ID
        const repository = await RepositoryModel.findByIdAndDelete(repositoryId);
        // If no repository is found, return a 404 error
        if (!repository) {
            return res.status(404).json({ message: 'Repository not found' });
        }
        // Respond with a success message
        res.status(200).json({ message: 'Repository deleted successfully' });
    }
    catch (error) {
        // Log error and respond with failure message
        console.error("Error during repository deletion:", error);
        res.status(500).json({ message: 'Error deleting repository', error: error.message });
    }
};
