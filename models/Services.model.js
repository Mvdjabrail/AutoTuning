const mongoose = require("mongoose");

const servicesSchema = mongoose.Schema({
  img: [],
  title: String,
  text: String,
  cLass: String,
  time: {
    type: Number,
    default: 1,
  }
});

const Services = mongoose.model("Services", servicesSchema);
module.exports = Services;
