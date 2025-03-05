export const ValidateAllRepositoryQuery = async (req, res) => {
    try {
        const { page, limit } = req.query;
        if (page && (!Number.isInteger(Number(page)) || Number(page) <= 0)) {
            return res.status(400).json({
                message: "Page mudt be a positive integer"
            });
        }
        if (limit && (!Number.isInteger(Number(limit)) || Number(limit) <= 0)) {
            return res.status(400).json({
                message: "limit must be a positive integer"
            });
        }
        req.pagination = {
            page: Number(page) || 1,
            limit: Number(limit) || 10,
        };
    }
    catch (error) {
        console.error("Error validating query parameters:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
