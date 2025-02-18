
// Update a repository by its ID
export const updateRepository = async (req, res) => {
    try {
        // Find the repository by its ID and update it
        const repository = await RepositoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        // If no repository is found, return a 404 error
        if (!repository) return res.status(404).json({ message: 'Repository not found' });

        // Respond with the updated repository data
        res.status(200).json({ message: "Repository updated successfully", data: repository });
    } catch (error) {
        // Log error and respond with failure message
        console.error("Error updating repository:", error);
        res.status(500).json({ message: 'Error updating repository', error: error.message });
    }
};