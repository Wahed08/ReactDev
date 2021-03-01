const model = require("../model/model");
const bcrypt = require("bcryptjs");

//signup handling
const create_register = (req, res) => {
  //const saltPassword = await bcrypt.genSalt(10);
  // const securePassword = await bcrypt.hash(req.body.password, saltPassword);

  // const Model = new model({
  //     name : req.body.name,
  //     username: req.body.username,
  //     department: req.body.department,
  //     email: req.body.email,
  //     password: securePassword,
  //     confirm_password: securePassword
  // });

  // Model.save()
  // .then(data=>{
  //     res.json(data);
  // }).catch(err=>{
  //     res.json(err);
  // })
  const { name, username, department, email, password, password2 } = req.body;
  const errors = [];
  //check required fields

  if (!name || !username || !department || !email || !password || !password2) {
    errors.push({ msg: "Please fill all the fields" });
  }

  //check password match
  if (password !== password2) {
    errors.push({ msg: "Passwords do not match" });
  }
  //check password length
  if (password.length < 6) {
    errors.push({ msg: "Password should be at least 6 characters" });
  }
if (errors.length > 0) {
    console.log("vul hoiche");
    res.render("http://localhost:3000/signup", {
                errors,
                name,
                username,
                department,
                email,
                password,
                password2,
    });
  }
};

module.exports = { create_register };
