const Services = require("../models/Services.model");
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports.servicesController = {
  getServices: async (req, res) => {
    try {
      const services = await Services.find();
      res.json(services);
    } catch (e) {
      res.json({ error: e.message });
    }
  },

  postServices: async (req, res) => {
    console.log(req.files);
    try {

      const { title, text, cLass } = req.body


      const ser = await Services.create({
        title,
        text,
        cLass,
        image: [req.file.path]
      })

      return res.json(ser)
    } catch (error) {
      return res.status(401).json({ error: error.toString() })
    }
  },

  updateServices: async (req, res) => {
    try {
      const services = await Services.findByIdAndUpdate(req.params.id, {
        img: req.body.path,
        title: req.body.title,
        text: req.body.text,
        class: req.body.text
      });
      res.json(services);
    } catch (e) {
      res.json({ error: e.message });
    }
  },

  deleteServices: async (req, res) => {
    try {
      const services = await Services.findByIdAndRemove(req.params.id);
      res.json(services);
    } catch (e) {
      res.json({ error: e.message });
    }
  },
  getServicesById: async (req, res) => {
    try {
      const servis = await Services.find({ services: req.params.id })
      res.json(servis)
    } catch (error) {
      return res.status(401).json(error.toString())
    }
  },
};
