import Repository from "../models/RepositoryModel";
export const CheckRepositoryExist = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({
                message: "Missing repository ID"
            });
        }
        const repository = await Repository.findById(id);
        if (!repository) {
            res.status(404).json({
                message: "Repository not found"
            });
        }
        req.repository = repository;
        return next();
    }
    catch (error) {
        console.log("error checking existence:", error);
        res.status(500).json({
            message: "internal Server Error"
        });
        // next(error)
    }
};
