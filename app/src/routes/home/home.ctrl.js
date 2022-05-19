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
  confirmation: (req, res) => {
    res.render("home/confirmation");
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
  // confirmation: (req, res) => {
  //   res.render("home/confirmation");
  // },
}; 

module.exports = {
  output,
  process,
}; 