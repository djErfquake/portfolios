const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const port = process.env.PORT || 9713;
const fs = require('fs');

//////////////////////
// START SERVER
//////////////////////

app.use(express.static(path.join(__dirname, 'app')));

// serve these pages
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '', 'app', 'index.html'));
});

// start listening for requests
server.listen(port, () => { console.log(`Listening on port ${port}`); });