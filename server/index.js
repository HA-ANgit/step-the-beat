require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const accountRoutes = require("./routes/accounts");
const authRoutes = require("./routes/auth");

const serverPort = process.env.PORT || 3001;
const AccountModel = require("./models/Account")

//middlewares
app.use(cors());
app.use(express.json());

//database connection
mongoose.connect("mongodb+srv://admin:admin@crud.tutfr.mongodb.net/account?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

//routes
app.use("api/accounts", accountRoutes);
app.use("api/auth", authRoutes);

app.post("/insert", async (req, res) => {

    const uname= req.body.uname;
    const email= req.body.email;
    const password= req.body.password;
    const userId= req.body.userId;

    const account = new AccountModel({ userId: userId, uname: uname, email: email, password: password })

    try {
        await account.save();
    }  catch(err){
            console.log(err)
        }
});

app.get("/read", async (req, res) => {    
    AccountModel.find({/* $where: {uname: "SaymyName"} */}, (err, result) =>{
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
});

app.get(`/read/:id`, (req, res) => {
    AccountModel.findOne({ "_id": new ObjectId(req.params.id) }, (err, result) => {
        if(err) {
            return res.status(500).send(err);
        }
        
        res.send(result);
    });
  });

app.put("/update", async (req, res) => {

    const newUname= req.body.uname;
    const id= req.body.id;

    try {
        await AccountModel.findById(id, (err, newValue) => {
            newValue.uname = newUname;
            newValue.save();
        })
    }  catch(err){
            console.log(err)
        }
});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    await AccountModel.findByIdAndRemove(id).exec();
    res.send("deleted")
});

app.listen(serverPort, ()=>{
    console.log('Server is running on port: ' + serverPort)
});