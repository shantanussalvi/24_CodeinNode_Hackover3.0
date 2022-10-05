const dotenv = require('dotenv');
const express = require('express');
// app contains properties and methods of express
const app = express();

//Link from after connecting mongodb cluster: mongodb+srv://<username>:<password>@cluster0.ufqzfkc.mongodb.net/<database name>?retryWrites=true&w=majority
dotenv.config({path: './config.env'});
require('./db/conn');

// App does not understand json so this converts to a object
app.use(express.json());

// We link the route files to make our route easy
app.use(require('./router/auth'));

const PORT = process.env.PORT;

// tells if server is listening/running on port
app.listen(PORT, () => {
    console.log(`Server is running at port no. ${PORT}`);
})