import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = 5050

app.use(express.json())
app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
})