const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {

    // verify authentication
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({error: 'Authorization token required'})
    }

    const token = authorization.split(' ')[1]

<<<<<<< HEAD
    try {
        const {_id} = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.user = await User.findOne({ _id }).select('_id');
        next();

    } catch (error) { 
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})
    }
}

module.exports = authMiddleware
=======
module.exports = authMiddleware;
>>>>>>> aea8a217ed9d14697ec6f1b6aed657f2341e5c60
