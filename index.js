const express = require('express');

const app = express();

PORT=8888;

app.get("/status", ( req, res) => {
          var localtime = (new Date()).toLocaleTimeString();
          res.status(200).send(`Server send ${localtime}`);
});

app.get("*", (req, res) => {
	res.sendStatus(404);
});

app.listen(PORT, () => {
     console.log(`Server is listening on port ${PORT}.`);
});
