export default (req, res, next) => {
    console.log(
        ' => ',
        req.method,
        req.originalUrl,
        'is Admin: ',
        req.isAdmin,
        'isAuthenticated: ',
        req.isAuthenticated,
    );
    next();
};