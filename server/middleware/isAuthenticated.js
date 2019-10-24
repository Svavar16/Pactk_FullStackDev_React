export default (req, res, next) => {
    req.isAdmin = true;
    req.isAuthenticated = true;
    next();
}