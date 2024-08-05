const express = require('express')
const router =new express.Router()
const userController =require('../Controller/userController')
const projectController =require('../Controller/projectController')
// const jwtMiddleware = require('../Middlewares/jwtMiddleware');
const multerConfig = require('../Middlewares/multerMiddleware');

const jwtMiddileware=require('../Middilewares/jwtMiddileware')
// register api
 
router .post('/user/register',userController.register)


//login api
router .post('/user/login',userController.login)

//addproject
router . post('/projects/add',jwtMiddileware, multerConfig.
single('projectImage'),projectController.addProjects)


//get UserProjects
router.get('/user/allprojects',jwtMiddileware,projectController.allUserProjects)

//get AllProjects
router.get('/projects/all',jwtMiddileware,projectController.getallProjects)

//get HomeProjects
router.get('/projects/homeprojects',projectController.getHomeProjects)


//export roter
module.exports=router