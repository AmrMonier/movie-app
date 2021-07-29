import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"
dotenv.config()

import authenticationRoutes from './Routes/AuthenticationRoutes.js'
import movieRoutes from './Routes/MoviesRoutes.js'

const app = express()
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
const port = process.env.PORT || 8080
app.use('/api/auth', authenticationRoutes)
app.use('/api/movies', movieRoutes)

app.use(express.json())
app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
})
