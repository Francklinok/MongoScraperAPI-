import RepositoryModel from '../models/model.js';

// Find a repository by name
export const findReposByName = async (req, res) => {
    try {
        const { repoName } = req.query;
  
        // Check if repoName is provided in the query string
        if (!repoName) {
            return res.status(400).json({ message: 'Repository name is required' });
        }
  
        // Search for the repository in the database by its name
        const repo = await RepositoryModel.findOne({ RepoName: repoName }).lean();
        console.log(repo, 'test');
  
        // If no repository is found, return a 404 error
        if (!repo) {
            return res.status(404).json({ message: "Repository not found" });
        }
  
        // Return the found repository data
        res.json(repo);
    } catch (error) {
        // Log error and respond with internal server error
        console.error("Error retrieving repository:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};