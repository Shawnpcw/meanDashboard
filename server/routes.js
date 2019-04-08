
const {home,createPage,addWolf, edit,aboutSingular, updateWolf,removeWolf} = require("./controller.js")

function router(app){
    
    app.get('/', home)  
   
    app.get('/wolf/new',createPage)
    app.get('/wolf/:id',aboutSingular)
    app.post("/wolf",addWolf)
    app.get('/wolf/edit/:id',edit) 
    app.post('/updateWolf/:id',updateWolf) 
    app.get('/removeWolf/:id',removeWolf)

}
module.exports = router;