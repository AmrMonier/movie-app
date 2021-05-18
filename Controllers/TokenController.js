import jwt from "jsonwebtoken"
import fs from 'fs'
class TokenController{
    

    async generate(payload){
        const options = {
            expiresIn: '3h',
            algorithm: 'RS256'
        }
        var privateKEY  = fs.readFileSync('./Keys/private.key', 'utf8');
        
        const token =  await jwt.sign(payload, privateKEY ,options)
            return token
        
    }
    async verify(token){
        const publicKEY  = fs.readFileSync('./Keys/public.key', 'utf8');
        const options = {
            expiresIn: '3h',
            algorithm: 'RS256'
        }
        try {
            return jwt.verify(token, publicKEY ,options)
        } catch  {
            return false;
        }
    }
}
export default new TokenController()