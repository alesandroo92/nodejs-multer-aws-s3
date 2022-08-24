const { s3Uploadv2 } = require("./s3Service");
//const files = require("multer");

const singleUpload = async (req, res) => {
    const file= req.file;
    const result = await s3Uploadv2(file);
    res.render("index");
};

const multipleUpload = (req, res) => {
    res.json({ status: "success" });
};



module.exports = { singleUpload, multipleUpload }
