const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const AccountSchema = new mongoose.Schema({
    uname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    }
});

AccountSchema.methods.generateAuthToken = function(){   //Skapar metoden för säkerhet och authenication
    const token = jwt.sign({_id: this._id}, 'test', {expiresIn:"7d"});
    return token
};

const Account = mongoose.model("Account", AccountSchema);

const validate = (data) => {
    const schema = Joi.object({
        uname: Joi.string().required().label("uname"),
        email: Joi.string().required().label("email"),
        password: passwordComplexity.required().label("password")
    });
    return schema.validate(data)
}

module.exports = {Account, validate};