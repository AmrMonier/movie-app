import tokenController from './Controllers/TokenController.js'
export default {
    validateUser: (req, res, next) => {
        let token = req.headers.authorization.split(' ')[1]
        tokenController.verify(token).then(valid => {
            valid ?  next() : res.status(401).json({err: 'invalid token'}) 
        }) 
    }
}