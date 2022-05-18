const router = require("express").Router();
const { Account } = require("../models/Account");
const Joi = require("joi");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
     try {
        const{error} = validate(req.body);
        if (error) 
            return res.status(400).send({message: error.details[0].message });
            
        const account = await Account.findOne({email: req.body.email});
        if (!account) 
            return res.status(401).send({message: "Invalid Email or Password"});
        
        const validPassword = await bcrypt.compare(
            req.body.password, account.password
        );
        if (!validPassword) 
            return res.status(401).send({message: "Invalid Email or Password"});
             
        const token = account.generateAuthToken();
        res.status(200).send({data: token, message: "Logged In Sucessfully"})
        
     } catch (error) {
         res.status(500).send({message: "Internal Server Error"});
     }
}) 

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password")
    });
    return schema.validate(data);
}
module.exports = router;