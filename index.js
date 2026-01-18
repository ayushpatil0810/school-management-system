import express from "express"

const PORT = process.env.PORT ?? 8000
const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    res.json({message: "Under Development"})
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})