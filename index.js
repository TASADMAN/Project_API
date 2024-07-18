import e from "express";
import cors from "cors";
import dotenv, { config } from "dotenv";


const app = e()
app.use(e.json())
app.use(cors())

app.post('/test', (req, res, next) => {
    console.log("create user");
})


app.get('/test', (req, res, next) => {
    
})

app.listen(3000, () => {
    console.log("run law na")
})
