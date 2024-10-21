import express from 'express'

const app = express();
const PORT = 3302;

app.get("/", (req, res) => {
    res.status(200).json({
        message: "hello world"
    })
})

app.use("*", (req, res) => {
    res.status(404).json({
        message: "not found"
    })
})

app.listen(PORT, () => {
    console.log(`server strated, list on port ${PORT}`);
})