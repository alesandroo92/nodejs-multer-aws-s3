const multer = require("multer");

const errorMessage = ((error, req, res, next) => {
    if(error instanceof multer.MulterError) {
        if(error.code === "LIMIT_FILE_SIZE") {
            return res.json({
                message: "File is too large"
            });
        };
  
        if(error.code === "LIMIT_FILE_COUNT") {
          return res.json({
              message: "File limit reached"
          });
      };
    };
});


module.exports = errorMessage;