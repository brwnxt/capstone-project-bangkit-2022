// import Disease from "../models/diseaseModel.js";
const Disease = require("../models/diseaseModel.js");


// export const getAllDiseaseData = async (req, res) => {
//     try {
//         const diseases = await Disease.findAll();
//         res.json(diseases);
//     } catch (error) {
//         res.json({
//             message: error.message
//         });
//     }
// }
async function getAllDiseaseData(req, res) {
    try {
        const diseases = await Disease.findAll();
        res.json(diseases);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

// export const getDiseaseDataById = async (req, res) => {
//     try {
//         const disease = await Disease.findAll({
//             where: {
//                 id: req.params.id
//             }
//         });
//         res.json(disease[0]);
//     } catch (error) {
//         res.json({
//             message: error.message
//         });
//     }
// }

async function getDiseaseDataById(req, res) {
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
// export const createDiseaseData = async (req, res) => {
//     try {
//         const {
//             disease_name,
//             medicine_advice
//         } = req.body;
//         const disease_image = req.file.path;
//         console.log(disease_image);

//         const payload = {
//             disease_name: disease_name,
//             disease_image: disease_image,
//             medicine_advice: medicine_advice
//         }

//         if (!payload) {
//             res.json({
//                 message: "Invalid Data!"
//             });
//         } else if (payload.length < 0) {
//             res.json({
//                 message: "Data can't be empty."
//             })
//         }
//         const insertDB = await Disease.create(payload);

//         res.json({
//             "message": "Disease Created",
//             "data": insertDB
//         });
//     } catch (error) {
//         res.json({
//             message: error.message
//         });
//     }
async function createDiseaseData(req, res) {
    try {
        const {
            disease_name,
            disease_image_url,
            medicine_advice
        } = req.body;
        console.log(disease_image_url);

        const payload = {
            disease_name: disease_name,
            disease_image_url: disease_image_url,
            medicine_advice: medicine_advice
        }

        if (!payload) {
            res.json({
                message: "Invalid Data!"
            });
        } else if (payload.length < 0) {
            res.json({
                message: "Data can't be empty."
            })
        }
        const insertDB = await Disease.create(payload);

        res.json({
            "message": "Disease Created",
            "data": insertDB
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

// export const updateDiseaseData = async (req, res) => {
//     try {
//         await Disease.update(
//             req.body, {
//                 where: {
//                     id: req.params.id
//                 }
//             }
//         );
//         res.json({
//             "message": "Disease Updated"
//         });
//     } catch (error) {
//         res.json({
//             message: error.message
//         });
//     }
// }
async function updateDiseaseData(req, res) {
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

// export const deleteDiseaseData = async (req, res) => {
//     try {
//         await Disease.destroy({
//             where: {
//                 id: req.params.id,
//             }
//         })
//     } catch (error) {
//         res.json({
//             message: error.message
//         });
//     }
// }
async function deleteDiseaseData(req, res) {
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

module.exports = {
    getAllDiseaseData: getAllDiseaseData,
    getDiseaseDataById: getDiseaseDataById,
    createDiseaseData: createDiseaseData,
    updateDiseaseData: updateDiseaseData,
    deleteDiseaseData: deleteDiseaseData
}