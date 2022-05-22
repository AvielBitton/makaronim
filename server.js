const express = require('express')
const app = express()
const port = 3000

const db = require("./models/dbAdapterConnect")

app.use(express.static('public'))


app.get('/getResult', (req, res) => {

    let color = "green" // input from client 

    async function myProgram(color){
        await db.findColor(color).then((result)=>res.send(result) )
    }
    myProgram(color)
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})