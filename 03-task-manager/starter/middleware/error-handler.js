const {CustomerAPIError} = require("../errors/custom-errors");

const errorHandlerMiddleWare = (err, req, res, next) => {
  if ( err instanceof CustomerAPIError) {
    return res.status(err.statusCode).json({msg:err.message});
  }
  return res.status(err.status).json({msg:"Something went wrong please try again"});
} 

module.exports = errorHandlerMiddleWare;