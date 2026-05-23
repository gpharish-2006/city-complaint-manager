import jwt from 'jsonwebtoken';
import User from '../models/User.mjs';

const authMiddleware = async (req, res, next) => {
    const header = req.headers['authorization'];
    if(!header){
        return res.status(401).json({ message: "Unauthorised Access"});
    }
    if(!header.startsWith("Bearer ")){
        return res.status(401).json({ message: "Unauthorized Access" });
    }
    const token = header.split(" ")[1];
    if(!token){
        return res.status(401).json({ message: "Unauthorised Access"});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);

        if(!user){
            return res.status(401).json({ message:"Unauthorised Access"});
        }
        req.user = user;
        next();
    }
    catch(err){
        return res.status(401).json({ message: "Unauthorised Access"});
    }
}

export default authMiddleware;