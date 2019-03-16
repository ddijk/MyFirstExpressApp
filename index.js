const express = require('express');
const bodyparser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();

const users = [ {"id": 1, "username": "admin", "password" : "admin2"}, 
{ "id": 2, "username": "guest", "password" : "guest2" }
]; 

PORT= process.env.PORT || 8888;

app.get("/status", ( req, res) => {
          var localtime = (new Date()).toLocaleTimeString();
          res.status(200).send(`Server send ${localtime}`);
});

app.use(bodyparser.json());
app.post("/login", (req, res) => {

    if ( !req.body.username || !req.body.password ) {
		res.status(400).send('You need username and password');
                 return;
     }
     
   console.log(`checking user, username=${req.body.username} and pwd=${req.body.password}`);
     const user = users.find((u) => { return  (u.username === req.body.username && u.password === req.body.password)});

     if ( !user ) {
	res.status(401).send('User not found');
         return;
      }
     console.log('about to create token');
     const token = jwt.sign({ "sub": user.id, "username" : user.username}, "my key", { "expiresIn" : "3 hours"});
//     const username = req.body.username;
     res.status(200).send({ "access_token": token});
});
   

app.get("*", (req, res) => {
	res.sendStatus(404);
});

app.listen(PORT, () => {
     console.log(`Server is listening on port ${PORT}.`);
});
