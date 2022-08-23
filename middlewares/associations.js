const associations = require("../associations.json")

const verifySlugExist = (req, res, next) => {
  const findedAssociation = associations.find((association) => {
    return association.slug === req.params.slug
  })
  console.log(req.body)
  if (findedAssociation) {
    req.association = findedAssociation
    next()
  } else {
    res.status(404).json("Association not found")
  }
}

module.exports = { verifySlugExist }
