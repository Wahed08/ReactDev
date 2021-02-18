const model = require('../model/model');

const create_register = (req,res) => {

    const Model = new model(req.body);

    // Model.save().then((result)=>{
    //     console.log('submitted');
    //     res.redirect('http://localhost:3000');
    // }).catch(err=>{
    //     console.log(err);
    // });
    Model.save((err) =>{
        if(err) return res.status(400).json({success: false,err});
        return res.status(200).json({success: true});
    });
};

const get_register = (req,res) =>{
    model.find().exec((err,posts)=>{

        if(err) return res.status(400).json({success: false,err});
        return res.status(200).json({success: true,posts});
    })
}

module.exports = {create_register,get_register};