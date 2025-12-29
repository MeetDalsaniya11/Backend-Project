import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    Credential : true
}))

app.use(express.json({limit:"16kb"}))  //getting json data
app.use(express.urlencoded({extended : true , limit : "16kb"}))  //getting data from url
app.use(express.static("public"))
app.use(cookieParser())

//routes import 
import userRouter from './routes/user.routes.js'


//routes declaration
app.use("/api/v1/users" , userRouter)




export { app }