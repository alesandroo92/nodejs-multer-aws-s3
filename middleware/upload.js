const multer = require("multer");


const storage = multer.memoryStorage()

const upload = multer({ storage, limits: {fileSize: 1000000} }); // 1 MB, tambien podemos expecificar el numero de archivos a subir: {fileSize: 2000000}, files: 2 }



module.exports = upload;