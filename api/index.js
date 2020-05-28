'use strict';
const Mongoose = require('mongoose');
require('dotenv').config({ path: './variables.env' });

const app = require('./app');

const PORT = process.env.PORT || 3000;
const connectionString = process.env.CONNECTION_STRING;

Mongoose.Promise = global.Promise;

Mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    
        console.log(`Welcome , The connection with database was established correctly`);
        app.listen(PORT, () => console.log(`Server in NodeJS runnig and listening in port: ${PORT}`));
    }).catch(err => console.log(err));