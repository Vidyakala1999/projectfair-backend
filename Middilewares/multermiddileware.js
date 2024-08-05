const multer =require('multer')
const storage =multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        const filename =`image-${Data.now()}-${file.originalname}`
        callback(null,filename)
    }
})
const fileFilter=(req,file,callback)=>{
    if(file.mimetype==='image/png' || file.mimetype==='image/png' || file.mimetype==='image/png'){
    callback(null,true)
}else{
    callback(null,false)
    return callback(new Error('only allow to upload jpg,jpeg,png files...'))
}
}

const multerConfig = multer({
storage,fileFilter
})

module.exports = multerConfig