const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const associationsRoutes = require("./routes/associations")
const messagesRoutes = require("./routes/messages")

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

app.get("/", (req, res) => {
  res.json("Associations API")
})
app.use("/associations", associationsRoutes)
app.use("/messages", messagesRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
