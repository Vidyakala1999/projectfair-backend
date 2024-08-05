const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
       
    },
    language:{
        type:String,
        required:true,
        
    },
    github:{
        type:String,
        require:true,
    },
    website:{
        type:String,
        require:true,
    },
    overview:{
        type:String,
        require:true,
    },
    projectImage:{
        type:String,
        require:true,
    },
    useId:{
        type:String,
        require:true,
    },
})

const projects = mongoose.model("projects",projectSchema)
module.exports = projects;