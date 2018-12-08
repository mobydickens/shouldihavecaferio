module.exports = function(req, res, next) {
  if(!req.session.user) {
    req.session.user = {
      usedQuestions: []
    }
  }
  console.log(req.session.user.usedQuestions)
  next();
}