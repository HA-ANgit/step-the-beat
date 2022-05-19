require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');

//const accountRoutes = require("./routes/accounts");
//const authRoutes = require("./routes/auth");

const serverPort = 3001;
const AccountModel = require("./models/Account")

//middlewares
app.use(cors());
app.use(express.json());//Låter express veta att vi kommer hantera json-objekt

//database connection
mongoose.connect("mongodb+srv://admin:admin@crud.tutfr.mongodb.net/account?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

//routes
//app.use("api/accounts", accountRoutes);
//app.use("api/auth", authRoutes);


app.post("/api/register", async (req, res) => {

    console.log("Client: " + req.headers.origin + " - Body: " + req.body.uname);

    try {
        const account = await AccountModel.Account.create({
            uname: req.body.uname,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({Status: 'OK'});
        //await account.save();
    }  catch(err){
            res.json({Status: 'error', Error: 'Duplicate Email'});
        }
});

app.post("/api/login", async (req, res) => {

    console.log("Client: " + req.headers.origin + " - Body: " + req.body.email);
    
    const user = await AccountModel.Account.findOne({ email: req.body.email, password: req.body.password })

    if(user) {
        const token = jwt.sign({
            name: user.uname,
            email: user.email,
        }, 'test')  //test är vår tillfälliga secret för token
        res.json({Status: 'OK', User: token});
    } else {
        res.json({Status: 'error', User: false});
    }
        
});

app.get('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'test')
		const email = decoded.email
        console.log("AccountModel: " + AccountModel)

		const user = await AccountModel.Account.findOne({ email: email })

		return res.json({ status: 'ok', quote: user.quote })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.post('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'test')
		const email = decoded.email

        console.log("AccountModel: " + AccountModel)
		await AccountModel.Account.updateOne(
			{ email: email },
			{ $set: { quote: req.body.quote } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.get("/read", async (req, res) => {    

    res.send('Read Request!')
/*     AccountModel.find({}, (err, result) =>{
        if(err) {
            res.send(err);
        }
        res.send(result);
    }) */
});

app.get(`/read/:id`, (req, res) => {

    /* AccountModel.findOne({ "_id": new ObjectId(req.params.id) }, (err, result) => {
        if(err) {
            return res.status(500).send(err);
        }
        
        res.send(result);
    }); */
  });

app.put("/update", async (req, res) => {

/* 
    const newUname= req.body.uname;
    const id= req.body.id;

    try {
        await AccountModel.findById(id, (err, newValue) => {
            newValue.uname = newUname;
            newValue.save();
        })
    }  catch(err){
            console.log(err)
        } */
});

app.delete("/delete/:id", async (req, res) => {

/* 
    const id = req.params.id;

    await AccountModel.findByIdAndRemove(id).exec();
    res.send("deleted") */
});

app.listen(serverPort, ()=>{
    console.log('Server is running on port: ' + serverPort)
});