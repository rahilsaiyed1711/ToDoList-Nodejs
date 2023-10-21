const express = require("express")
const bodyParser = require("body-parser")
const app =express()
let items =[]
let workItems=[]
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))                              //In order to fetch the external css and js.
app.get("/",function(req,res){
    let today = new Date()
    let options={
         weekday:"long",
         day:"numeric",
         month:"long"
    }

    



    //var currentDay=today.getDay();
    let day= today.toLocaleString("en-US",options)
   
    res.render("lists",{
        listsTitle:day,
        addNewItems:items
    })
})




app.post("/",function(req, res){
    var item=req.body.newItem
    if(req.body.list==="work"){
        workItems.push(item)
        res.redirect("/work")
    }
    else{
        items.push(item)
        res.redirect("/")
            
    }
})

app.get("/work",function(req,res){
    res.render("lists",{listsTitle:"work list",addNewItems:workItems})

})

app.get("/about",function(req,res){
    res.render("about")
})

app.listen(3000,function(){ 
    console.log("server started on port 3000");
})