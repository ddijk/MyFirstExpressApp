const express = require('express');
const bodyparser = require('body-parser');

const app = express();

PORT= process.env.PORT || 8888;

app.get("/status", ( req, res) => {
          var localtime = (new Date()).toLocaleTimeString();
          res.status(200).send(`Server send ${localtime}`);
});

app.use(bodyparser.json());
app.post("/login", (req, res) => {

     const username = req.body.username;
     res.send(`You logged in with ${username}.`);
});
   

app.get("*", (req, res) => {
	res.sendStatus(404);
});

app.listen(PORT, () => {
     console.log(`Server is listening on port ${PORT}.`);
});
