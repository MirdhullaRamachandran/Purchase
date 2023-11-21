const express=require('express');
const { itemdata, getitem,putitem,delitem} = require('../logics/itemuser');
const router=express.Router();
router.post('/userdetails',(itemdata));
router.get('/',getitem);
router.put('/:id',putitem);
router.delete('/:id',delitem);

module.exports = router;