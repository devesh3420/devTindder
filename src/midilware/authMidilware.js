const adminAuth = (req,res,next)=>{
    const token = 'XYZ';
    const isAdminAuth = token === 'abc';
    if(!isAdminAuth){
        res.status(404).send("UnAthorizeAdmin");
    } else{
        next();
    }
}
const UserAuth = (req,res,next)=>{
    const token = 'XYZ';
    const isUserAuth = token === 'XYZ';
    if(!isUserAuth){
        res.status(404).send("UnAthorizeUser");
    } else{
        next();
    }
}

module.exports = {adminAuth,UserAuth};