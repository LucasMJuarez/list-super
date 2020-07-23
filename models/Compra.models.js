const moongoose = require('mongoose');

const CompraSchema = new moongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    costo: {
        type: Number,
        required:[true, 'Please add a positive Number']
    },
    createdAt:{
        type: Date,
        default:Date.now
    }
});

module.exports = moongoose.model('Compra', CompraSchema)