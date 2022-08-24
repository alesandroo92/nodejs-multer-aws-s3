const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const errorMessage = require("../middleware/errorMessage");
const { singleUpload, multipleUpload } = require("../controllers/files");
const { singleUploadPage, multipleUploadPage } = require("../controllers/pageFile");

//Routes views
router.get("/single", singleUploadPage)
router.get("/multiple", multipleUploadPage);


router.post("/single", upload.single("file"), errorMessage, singleUpload) // single file upload
router.post("/multiple", upload.array("file"), errorMessage, multipleUpload) // multiple file upload, ("file", 2) max 2 files



module.exports = router;