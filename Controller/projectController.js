
const projects =require ('../Models/projectSchema')



// add projects

exports.addProjects = async(req,res)=>{
    console.log("Inside add project function");
    const userId = req.payload
    const ProjectImage =req.filefilename
    //console.log(projectImage)

    const {title,languages,github,website,overview}=req.body

    // console.log(`${userId} ${title} ${languages} ${github} ${website} ${overview} ${projectImage} ${userId}`);
try{
    const exisitingProject = await projects.findone({github})
    if(exisitingProject){
        res.status(406).json("project already exist...upload another one")

    }else{
        const newProject =new projects({
            title,languages,github,website,overview,ProjectImage,userId
        })
        await newProject.save()
        res.status(200).json(newProject)
    }

}catch(err){
    res.status(401).json(`Request Failed,Error:${err}`)
}
}



// getUserProjects
exports.allUserProjects=async(req,res)=>{
    const userId =req.payload
    try{
const userProjects =await projects.find({userId})
res.status(200).json(userProjects)
    }catch(err){
        res.status(401).json(err)
    }

}

    
    

//GetAllProjects


exports.getallProjects=async(req,res)=>{

    const searchKey= req.query.searchKey
    const query={
        languages:{$regex:searchKey,option:"i"}
    }


    try {

        const allProjects=await projects.find(query)
        res.status(200).json(allProjects)
        
    } catch (error) {
        res.statusP(401).json(error)
    }
}
//get HomeProjects

exports.getHomeProjects=async(req,res)=>{
    
    try{
const homeProjects =await projects.find().limits(3)
res.status(200).json(homeProjects)
    }catch(err){
        res.status(401).json(err)
    }

}



// userProject


// export const userProjectApI =async (reqHeader)=>{
//     return await commonAPI("GET",`${BASE_URL}/user/allProjects`,"",reqHeader)
// }