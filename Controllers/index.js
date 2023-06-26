const Fruit = require('../Models/Fruit')
const Veggie = require('../Models/Veggie')


const getFruits =  async (req, res) => {
    let databaseResponse = await Fruit.find();
    res.send(databaseResponse)
}

const getVeggies =  async (req, res) => {
    let databaseResponse = await Veggie.find();
    res.send(databaseResponse)
}
const getveggieByName =  async (req, res) => {
    let veggieName = req.params.veggieName
    let databaseResponse = await Veggie.find({name : veggieName});
    res.send(databaseResponse)
}

const postVeggies = async (req, res) => {
    let databaseResponse = await Veggie.create(req.body);
    res.send(databaseResponse)
};


module.exports = {
    getFruits,
    postVeggies,
    getVeggies,
    getveggieByName,
}