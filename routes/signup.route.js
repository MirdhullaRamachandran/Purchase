const express=require('express');
const { up } = require('../logics/signup');
const router=express.Router();
router.post('/',(up));
module.exports = router;