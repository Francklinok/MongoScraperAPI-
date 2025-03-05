import  Joi from 'joi'


const RepositoryValidation = Joi.object({
    Topic: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages({
        "string.empty":"topic is required",
        "string.max":"topic should be at  most 100 characters long"
    }),

    TopicDescription: Joi.object()
    .min(3)
    .max(500)
    .messages({
        "string.max":"TopicDescription should be at most 500 characters long",
    }),

    RepoName:Joi.object()
    .min(1)
    .max(100)
    .required()
    .messages({
        "string.empty":"ReposNAme is required",
        "string.max":"RepoName must be  at most 100 chararcters long",
    }),
    RepoUrl:Joi.object()
    .pattern(/^https?:\/\/(www\.)?github\.com\/.+/ , Joi.string().min(3).max(30))
    .required()
    .messages({
        "string.empty":"ReposUrl is resuired",
        "string.pattern.base":"Reposurl must be a valid  Github URL"

    }),
    Stars:Joi.object()
    .min(0)
    .default(0)
    .messages({
        "number.min":"stars must be a positive number",
    }),

    Description: Joi.string()
    .max(1000)
    .optional()
    .messages({
        'string.max': 'Description should be at most 1000 characters long',
    }),

    Tags:Joi.array().items(Joi.string()).optional()

}) 

export default RepositoryValidation;