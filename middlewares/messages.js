const associations = require("../associations.json")

const verifyAssociationExist = (req, res, next) => {
  const findedAssociation = associations.find((association) => {
    return association.slug === req.body.slug
  })
  if (findedAssociation) {
    req.association === findedAssociation
    next()
  } else {
    res.status(404).json("Association not found")
  }
}

module.exports = { verifyAssociationExist }
