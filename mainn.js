const express = require('express')
const connectToMongo = require('./db')
const mySchema = require('./model/crud')
const app = express();
app.use(express.json());
app.use('/api/employee',require('./router/employeeRout'))

port=7060;
connectToMongo()
mySchema()

//<input type:"text" name="name"/>

app.post('/api/insert',async(req,res)=>{
    try{
        const {name, email, phone, address, designation, salary} = req.body;
        const data = new mySchema({name:name,email:email,phone:phone,address:address,designation:designation,salary:salary});
        const savedData = await data.save();
        res.send({"Insertion successful":true,savedData});
    }
    catch(error){
        console.error("some error Occured"+error);
        res.status(500).json("some internal error!!!")
    }
})

app.get('/datetime',(req,res)=>{
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
 res.send('Time:'+time+',Date:'+date)
})



app.listen(port,()=>{
    console.log(`App is listening on port number ${port}`)
})

