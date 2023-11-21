const express=require('express');
const userrouter=require('./user.route');
const router=express.Router();
const singuproute = require('./signup.route.js')
const signinroute = require('./signin.route.js')


router.use('/signin',userrouter);
router.use('/signup',singuproute);
router.use('/signin',signinroute);


//host:8000/signup

module.exports=router;


//middlware - auth check - ok - controll