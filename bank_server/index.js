const express = require("express");
const app = express()
const dataService= require('./servies/registerservice')
const creditService= require('./servies/creditservice')
const depostService = require('./servies/depositservice')
const deleteService = require('./servies/registerservice')
const jwt = require('jsonwebtoken')
const cors = require('cors')
// const withdrawService = require('./servies/withdrawservice')

app.use(express.json())

app.use(cors({
    origin:'http://localhost:4200'
}))


//adding middleware
const appMiddleware = (req,res,next)=>{
    console.log("Application specific middleware");
    next()
}
//using middleware
app.use(appMiddleware)

const jwtwebtoken = ((req,res,next)=>{
        const token = req.header('token')
        const data = jwt.verify(token,'supersecretkey@123')
        console.log(data)
        if(req.body.accountnum=data.currentaccountnuumber){
            next()
         }
})


app.post('/register',(req,res)=>{
        dataService.register(req.body.username,req.body.accountnum,req.body.password,req.body.balance)
    
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/login',(req,res)=>{
    dataService.loginService(req.body.accountnum,req.body.pass)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/creditCard',(req,res)=>{
    const creditdata = creditService.credit(req.body.name,req.body.accountno,req.body.aadharcard,req.body.salary,req.body.pancard,req.body.password)
    res.status(creditdata.statusCode).json(creditdata)
})



app.post('/deposit',(req,res)=>{
    depostService.Deposit(req.body.accountno,req.body.dpassword,req.body.balance)
    .then(result=>{
    res.status(result.statusCode).json(result)
})

})

app.post('/withdraw',(req,res)=>{
   depostService.Withdraw(req.body.accountno,req.body.dpassword,req.body.balance)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post("/transaction",(req,res)=>{
    depostService.transaction(req.body.accNo)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.delete("/deleteacc/:accno",(req,res)=>{
    deleteService.deleteaccount(req.params.accno)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})


app.listen(3002,()=>{
    console.log("server create 3002");
})