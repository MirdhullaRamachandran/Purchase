/*const router=require('express').Router();
const User=require('../models/user.js');*/
const { Users } = require('../models');

const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const user = require('../models/user');

const sin=async({body={}, res}) => {
    try {
        const { email, password} = body;
        const newUser = await Users.findOne({ email });

        if (newUser) {
            const match = await bcrypt.compare(password, newUser.password);
            if (match) {
                
                const firstname=req.body.firstname;
                const user = { name: firstname };
                const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
                return res.json({ success: true, message: 'Login successful', accessToken });
            }
        }
    
        res.status(401).json({ success: false, message: 'Invalid email or password' });
    } catch (error) {
        
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = {
    sin,
}