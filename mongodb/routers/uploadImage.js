const express = require("express");

const router = express.Router();

const multer = require('multer');

let bodyParser = require("body-parser");
let path = require("path");
let fs = require("fs");


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // 文件初始路径
        let filePath = path.join(__dirname, '../../public/image/');
        if (!fs.existsSync(filePath)) {
            fs.mkdir(filePath, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    cb(null, filePath)
                }
            })
        } else {
            cb(null, filePath)
        }
    },
    filename: function (req, file, cb) {
        var ext = path.extname(file.originalname);
        // UUID 处理
        function guid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        cb(null, file.fieldname + guid() + Date.now() + ext)
    }
});


var upload = multer({storage: storage});

router.post('/upload',upload.single('files'), (req, res)=> {
    res.json({filepath:'../../image/'+path.basename(req.file.path)});

});

module.exports = router;