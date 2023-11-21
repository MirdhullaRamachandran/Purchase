//const router = require('express').Router();
const { Users } = require('../models');
const bcrypt = require('bcrypt');
const { exists } = require('../models/user');
// const user = require('../models/user');

const up = async ({ body = {}, res }) => {
    const { firstname, password,email} = body

    //validate
    
    const checkUserExists = await Users.findOne({email});
    if (checkUserExists) {
        return res.status(400).json({ success: false, message: 'Email ID already exits.' });
    }
    
    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = new Users({
        email,
        password: hashedpassword,
        firstname,   
    });
    let result = await newUser.save();
    res.status(200).json(result);


};

module.exports = {
    up,
}