const { Items } = require('../models');


    //async await
    //try catch
    // promi - then catch

    //validate
    //duplicate

const itemdata=async (req, res) => {
    try {
        const { beverages, dairy, oil, vegetables } = req.body;
        const existingItem = await Items.findOne({
            $or: [
                { 'beverages.name': beverages.name },
                { 'dairy.name': dairy.name },
                { 'oil.name': oil.name },
                { 'vegetables.name': vegetables.name},
            ],
        });
            if (existingItem) {
                return res.status(400).json({ success: false, message: 'Item already exists.' });
            }

            const newItem = new Items({
                beverages,
                dairy,
                oil, 
                vegetables
            });
    
            const result = await newItem.save();
    
            res.status(201).json({ success: true, item: result });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};
    
const getitem = ({ res }) => {

    Items.find()
        .then(data => res.send(data))
        .catch(err => console.log(err))

}

const putitem = async (req, res) => {
    try {
        const updateData = await Items.findByIdAndUpdate(req.params.id,{ new: true }) //mongodb

    res.send(updateData); //postman

    } catch (error) {
        console.log(error);
    }
}

const delitem = async (req, res) => {
    try{
        const delData= await Items.findByIdAndDelete(req.params.id)
        res.send(delData);
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    itemdata,
    getitem,
    putitem,
    delitem,
};