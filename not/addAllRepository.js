import RepositoryModel from "../models/RepositoryModel";
// 📌 Ajouter un ou plusieurs repositories
export const addRepository = async (req, res) => {
    try {
        console.log("Received data:", req.body);
        // Vérifier si les données sont valides
        if (!req.body || (Array.isArray(req.body) && req.body.length === 0)) {
            return res.status(400).json({ message: "Invalid data" });
        }
        // Insérer les repositories
        const repositories = await RepositoryModel.insertMany(req.body);
        res.status(201).json({
            message: "Repositories added successfully",
            data: repositories
        });
    }
    catch (error) {
        console.error("Error adding repositories:", error);
        res.status(500).json({
            message: "Error adding repository",
            error: error.message
        });
    }
};
