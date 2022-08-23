const express = require("express")

const { verifySlugExist } = require("../middlewares/associations")
const associations = require("../associations.json")

const app = express()

// request to get all associations
app.get("/", (req, res) => {
  res.json(associations)
})

// request to get informations about one association with dynamic url
app.get("/:slug", verifySlugExist, (req, res) => {
  res.json(req.association)
})

module.exports = app
