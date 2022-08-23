const express = require("express")
const moment = require("moment")

const { verifyAssociationExist } = require("../middlewares/messages")

const app = express()
const messages = []

// request to post a new message
app.post("/", verifyAssociationExist, (req, res) => {
  const newMessage = {
    name: req.body.name,
    message: req.body.message,
    date: moment().format(),
    slug: req.body.slug,
  }
  messages.push(newMessage)
  res.json(newMessage)
})

// request to get all messages order "newer to older"

app.get("/", (req, res) => {
  const sortedMessages = messages.sort((a, b) => {
    return moment(b.date).format("x") - moment(a.date).format("x")
  })
  res.json(sortedMessages)
})

module.exports = app
