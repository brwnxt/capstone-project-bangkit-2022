import Disease from "../models/diseaseModel.js";

export const getAllDiseaseData = async (req, res) => {
    try {
        const diseases = await Disease.findAll();
        res.json(diseases);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const getDiseaseDataById = async (req, res) => {
    try {
        const disease = await Disease.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(disease[0]);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}
export const createDiseaseData = async (req, res) => {
    try {
        await Disease.create(
            req.body
        );
        res.json({
            "message": "Disease Created"
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const updateDiseaseData = async (req, res) => {
    try {
        await Disease.update(
            req.body, {
                where: {
                    id: req.params.id
                }
            }
        );
        res.json({
            "message": "Disease Updated"
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const deleteDiseaseData = async (req, res) => {
    try {
        await Disease.destroy({
            where: {
                id: req.params.id,
            }
        })
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}