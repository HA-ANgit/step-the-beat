const router = require("express").Router();
const {Account, validate, Account} = require("../models/Account");
const bcrypt = require("bcrypt");

router.post("/", async(req, res) => {
    try {
        const {error} = validate(req.body);
        if (error)
            return res.status(400).send({message: error.details[0].message });

        const Account = await Account.findOne({email: req.body.email});
        if (Account)
            return res.status(409).send({message: "User with given email already exist!"})

        const salt = await bcrypt.genSalt(Number(10))   //BCrypt med SALT : 10
        const hashPassword = await bcrypt.hash(req.body.password, salt);    //Hashar vårt password

        await new Account ({...req.body, password: hashPassword}).save();
        res.status(201).send({message: "Account creeated successfully"})

    } catch (error) {
        res.status(500).send({message: "Internal server error"})
    }
})

module.exports = router;