module.exports = {
    home:home,
    createPage: createPage,
    addWolf:addWolf,
    edit:edit,
    aboutSingular:aboutSingular,
    updateWolf:updateWolf,
    removeWolf:removeWolf
}
const Wolves = require("./model.js");

function home(req,res){
    Wolves.find({}, function(errs, data){
        if(errs){
            console.log(errs)
        }
        res.render('all', {data:data})
    })
}

function edit(req,res){
    var id = req.params.id;
    Wolves.find({_id:id}, function(errs, data){
        if(errs){
            console.log(errs)
        }
        // console.log(data)
        res.render('edit', {data:data})
    })

}
function aboutSingular(req,res){
    var id = req.params.id;
    Wolves.find({_id:id}, function(errs, data){
        if(errs){
            console.log(errs)
        }
        res.render('single', {data:data})
    })

}
function createPage(req,res){
    res.render('addWolf')
}

function  addWolf(req,res){
    Wolves.create(req.body, (errs, results)=>{
        if(errs){
        
            console.log(errs);
        }
        else{
            console.log(results)
        }
        res.redirect('/')
    })

    
}
function  removeWolf(req,res){
    var id = req.params.id;
    
    Wolves.remove({_id:id}, (errs, results)=>{
        if(errs){
        
            console.log(errs);
        }
        else{
            console.log(results)
        }
        res.redirect('/')
    })

    
}
function  updateWolf(req,res){
    var id = req.params.id;
    
    Wolves.update({_id:id},{$set:req.body}, (errs, results)=>{
        if(errs){
        
            console.log(errs);
        }
        else{
            console.log(results)
        }
        res.redirect('/')
    })

    
}