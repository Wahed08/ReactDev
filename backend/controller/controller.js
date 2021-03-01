const model = require("../model/model");
const bcrypt = require("bcryptjs");

//signup handling
const create_register = (req, res) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(req.body.password, saltPassword);

  const Model = new model({
      name : req.body.name,
      username: req.body.username,
      department: req.body.department,
      email: req.body.email,
      password: securePassword,
      confirm_password: securePassword
  });

  Model.save()
  .then(data=>{
      res.json(data);
  }).catch(err=>{
      res.json(err);
  })
 
};

module.exports = { create_register };
