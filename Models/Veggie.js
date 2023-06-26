
const mongoose = require('mongoose')



const vegieSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        age: {type: Number, required: true, min: 0},
        canEat: Boolean
    },
    {timestamps: true}
);

const Vegie = mongoose.model('Vegie', vegieSchema);

module.exports = Vegie;