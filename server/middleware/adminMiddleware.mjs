const adminMiddleware = async (req,res,next) =>{
    const role = req.user.role;
    if(role !== 'admin'){
        return res.status(403).json({ message: "Forbidden Access"});
    }
    next();
}

export default adminMiddleware;