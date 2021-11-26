const Server = require('./models/server');

require('dotenv').config();

 
//crear server

const server = new Server();
 
server.listen();