const express=require('express');
const { sin,} = require('../logics/signin');
const router=express.Router();
router.post('/',(sin));

module.exports = router;