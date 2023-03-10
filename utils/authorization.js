const withAuthorization = (req, res, next) => {

if (!req.session.loggedIn) {
    res.redirect('/login');
} else {
    next();
}};
    
const hasAuthorization = (req, res, next) => {
  
if (!req.session.loggedIn) {
    next();
} else {
    res.redirect('/');
}};
  
module.exports = { withAuthorization, hasAuthorization };