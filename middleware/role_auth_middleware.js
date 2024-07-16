const jwt = require('jsonwebtoken');


const authRole = (req,res,next) =>{

    if(req.user.role == "Admin" || req.user.role == "Manager"){
        next();
    } else{
        return res.status(403).json({message: "Access Denied: Admins and Managers only"});
    }
}

module.exports = authRole;


