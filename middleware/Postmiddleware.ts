

import { Request, Response, NextFunction } from "express";
import RepositoryModel from "../models/RepositoryModel";
import RepositoryValidation from "../validation/InputValidation";
import express from "express";

const router = express.Router();

// 🛡️ Middleware de validation
export const validateBrowserSession = (req: Request, res: Response, next: NextFunction) => {
    try { 
        // Validation du corps de la requête avec Joi
        const { error } = RepositoryValidation.validate(req.body, { abortEarly: false });

        // Si des erreurs de validation sont détectées
        if (error) {
            // Récupérer tous les messages d'erreur
            const errorMessages = error.details.map((detail: { message: string }) => detail.message);
            
            // Répondre avec un statut 400 et les erreurs
            return res.status(400).json({
                message: "Validation error",
                errors: errorMessages
            });
        }

        // Si aucune erreur, passer au middleware suivant
        next();
    } catch (err) {
        // En cas d'erreur interne, loguer l'erreur et envoyer un message 500
        console.error("Error in validation middleware:", err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

