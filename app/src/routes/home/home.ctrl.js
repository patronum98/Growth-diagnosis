"use strict";

const User = require("../../models/User");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  },
  upload: (req, res) => {
    res.render("home/upload");
  },
};


const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
  // upload: uploadWithOriginalFilename.single('attachment'),(req,res) =>{ // 5
  //   let test = JSON.stringify(req.file)
  //   var dejson = JSON.parse(test)
  //   var path = dejson.path
  //   fs.readFile(path, function(err, data){
  //       console.log('picture loading...');
  //       res.writeHead(200);
  //       res.write(data);
  //       res.render('confirmation');
  //       return res.write(data);
  //       // res.end();    
  //   });
};

module.exports = {
  output,
  process,
};