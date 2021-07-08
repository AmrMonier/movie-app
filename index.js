import express from "express"
import dotenv from "dotenv"

dotenv.config()

import authenticationRoutes from './Routes/AuthenticationRoutes.js'
import movieRoutes from './Routes/MoviesRoutes.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const port = process.env.PORT || 8080
app.use('/api/auth', authenticationRoutes)
app.use('/api/movie', movieRoutes)

app.use(express.json())
app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
})