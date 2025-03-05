import RepositoryModel from '../models/RepositoryModel';
export const getAllRepositories = async (req, res) => {
    try {
        const { page, limit } = req.pagination;
        // Retrieve all repositories from the database
        const repositories = await RepositoryModel.find()
            .skip((page - 1) * limit)
            .limit(limit);
        if (repositories.length === 0) {
            return res.status(404).json({
                message: "No repositories found"
            });
        }
        // Respond with the list of repositories
        res.status(200).json({
            page,
            limit,
            total: await RepositoryModel.countDocuments(),
            data: repositories
        });
    }
    catch (error) {
        // Log error and respond with failure message
        console.error("Error retrieving repositories:", error);
        res.status(500).json({ message: 'Error retrieving repositories',
            error: error.message });
    }
};
export default getAllRepositories;
