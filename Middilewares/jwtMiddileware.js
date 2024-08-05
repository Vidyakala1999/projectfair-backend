const jwt =require('jsonwebtoken')

 const jwtMiddileware =async(req,res,next)=>{
    console.log("inside jwtMiddileware function")
    const token =req.headers['authorization'].split(" ")[1]
    console.log(token)
try{
   const jwtResponse =jwt.verify(token,"secret123")
   console.log(jwtResponse)
   req.payload=jwtResponse.userId
   next()
}catch(err){
   res.status(401).json("Authorization failed!! please login")
}

}

 
 module.exports =jwtMiddileware