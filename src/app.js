const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(express.json())
const port=process.env.PORT || 3000
const router=require('./Routes/route')

app.listen(port, () => {
    console.log("app is listening on "+port);
    
app.use('/',router)
})