const {Brand} = require("../models/models.js");
const ApiError = require("../error/ApiErrors.js");

class BrandController{
    async create(req, res, next){
        const {name} = req.body;
        const candidate = await Brand.findOne({where: {name}});
        if(candidate){
            return next(ApiError.badRequest("Такой Бренд уже суествует!"));
        }
        const brand = await Brand.create({name});
        return res.json(brand);
    }

    async getAll(req, res){
        const brands = await Brand.findAll();
        return res.json(brands);
    }
}

module.exports = new BrandController();