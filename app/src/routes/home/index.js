"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");
const multer   = require('multer');

// 화면 보여주기
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/confirmation", ctrl.output.confirmation);
router.get("/upload",ctrl.output.upload)
router.get("/mypage",ctrl.output.mypage)


// 코드 실행
router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
router.post("/mypage", ctrl.process.mypage);

var fs = require('fs');

var storage  = multer.diskStorage({ // 2
  destination(req, file, cb) {
    cb(null, 'uploadedFiles/');
  },
//   filename(req, file, cb) {
//     cb(null, `${Date.now()}__${file.originalname}`);
//   },
  filename(req, file, cb) {
    filename = file.originalname;
    cb(null, file.originalname);
  },
});


var uploadWithOriginalFilename = multer({ storage: storage });
var filename;
  
router.post('/upload', uploadWithOriginalFilename.single('attachment'), function(req,res){ // 5

    var PythonShell = require("python-shell");
    var options = {
        mode: 'text',
        pythonPath: '',
        pythonOptions: ['-u'],
        scriptPath: '',
        args: ['C:/projects/smartfarm/node/login-lecture/app/uploadedFiles/']
    };

    PythonShell.PythonShell.run('test.py', options, function(err, results){
        if (err) { console.log(err); return err};
        
        console.log('results: %j', results);
        let test = JSON.stringify(req.file)
        var dejson = JSON.parse(test)
        console.log(dejson.path)
        var path = dejson.path
        // var path = 'image\\' + filename;
    
        fs.readFile(path, function(err, data){
            console.log('PICTURE LOADING...');
            res.writeHead(200);
            res.write(data);
            // res.render('confirmation');
            res.end();    
        });
        
    });
});

router.post('/confirmation', uploadWithOriginalFilename.single('attachment'), function(req,res){ // 5
  var path_g = 'image\\' + filename;
  fs.readFile(path_g, function(err, data){
      console.log('GRAY');
      res.writeHead(200, { "Context-Type": "image/jpg" });
      res.write(data);
      // res.render('confirmation');
      res.end();    
  });
});






module.exports = router;