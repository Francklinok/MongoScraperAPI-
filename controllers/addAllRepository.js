import RepositoryModel from '../models/model.js';

// Add one or more repositories
export const addRepository = async (req, res) => {
    try {
        // Log the received data
        console.log("Received data:", req.body);
        
        // Check if the request body is empty or invalid
        if (!req.body || (Array.isArray(req.body) && req.body.length === 0)) {
            return res.status(400).json({ message: "Invalid data" });
        }

        // Insert multiple repositories into the database
        const repositories = await RepositoryModel.insertMany(req.body);
        // Respond with success message and inserted repositories
        res.status(201).json({ message: 'Repositories added successfully', data: repositories });
    } catch (error) {
        // Log error and respond with failure message
        console.error("Error adding repositories:", error);
        res.status(500).json({ message: 'Error adding repository', error: error.message });
    }
};