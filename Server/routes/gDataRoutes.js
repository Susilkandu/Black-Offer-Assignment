const router = require('express').Router();
// import Controller
const {saveMultipleDocuments,getGData} = require("../Controller/gDataController");

// to Save Data
router.post("/uploadMultipleDocuments",saveMultipleDocuments)
// to get Data
router.post("/getGData",getGData)


module.exports= router;