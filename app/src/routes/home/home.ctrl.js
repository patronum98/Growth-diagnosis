"use strict";

const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage");

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
  confirmation: (req, res) => {
    res.render("home/confirmation");
  },
  mypage: (req, res) => {
    res.render("home/mypage");
  },
};


const process = {
  login: async (req, res) => {
    const user = new User(req.body); // User.js 에 있는 
    const response = await user.login(); //User.js 에 있는 login함수
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
  mypage: async (req, res) => {
    const user = new User(req.body);
    const response = await user.update();
    return res.json(response);
  },
}; 

module.exports = {
  output,
  process,
}; 