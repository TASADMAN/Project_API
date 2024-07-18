import e from "express";
import cors from "cors";
import dotenv from "dotenv";


const app = e()
app.use(e.json())
app.use(cors())



app.get('/test', (req, res, next) => {
    
})

app.listen(3000, () => {
    console.log("run law na")
})
