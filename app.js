const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");  // we are loading this self made module and binding it to const date

const app = express();

const items = ["Buy food","cook food","Eat food"];  // if array has been declared with const then it's possible to push iems but the array cannot be assigned to another like items = ["drive"];
const workItems = [];

app.set('view engine', 'ejs'); // This line tells app to use EJS as view engine.

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));  // we need to tell express that we have a styles.css file in the public folder. While using express that's how we use styles.css

app.get("/",function(req,res)
{
   const day = date.getDate();  // calling a function that is bound to const date and we activate getDate function inside date.js

    res.render("list", { listTitle : day ,newListItems : items});   // we render list.ejs and replace listTitle with the value of day.
});

app.post("/",function(req,res) // if a client adds a new to-do item, then this function kicks in and stores value of new item to variable "item", then res.redirect("/") redirects to home route which is app.get("/") and then execution starts from there
{
    const item = req.body.newItem; // newItem is the input name in list.ejs file

    if(req.body.list == "work") // if request came from work
    {
        workItems.push(item);
        res.redirect("/work");
    }
    else
    {        
        items.push(item);
        res.redirect("/");
    }

});

/* Making get and post functions for /work page */
app.get("/work",function(req,res)
{
    res.render("list",{ listTitle : "work list", newListItems : workItems});  // we are rendering ejs page
});

app.get("/about",function(req,res)
{
    res.render("about")
})



app.listen(3000,function()
{
    console.log("Server started on port 3000");
});