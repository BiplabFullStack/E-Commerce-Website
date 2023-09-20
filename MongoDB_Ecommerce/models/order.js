const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    products:[{
        product:{type:Object, required: true},
        quantity:{type:Number, required: true}
    }],
    user:{
        name:{
            type:String,
            required:true
        },
        userId:{
            type:ObjectId,
            ref:'User',
            required: true
        }
    }
})

module.exports = mongoose.model('Order',orderSchema)