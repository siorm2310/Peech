import express from "express";
import * as dotenv from "dotenv";
import filter from './routes/filter.js'
import errorHandler from './middleware/errorMiddleware.js'

dotenv.config()

const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(errorHandler) // Error handling and propagating middleware


app.use('/api/videos/filter', filter);
app.listen(port,()=> console.log(`Server Running on port ${port}`))