'use strict';
const Mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 3000;
const connectionString = 'mongodb://localhost:27017/hyperiot_db';

Mongoose.Promise = global.Promise;

Mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    
        console.log(`Welcome , The connection with database was established in ${connectionString}`);
        app.listen(PORT, () => console.log(`Server in NodeJS runnig and listening in port: ${PORT}`));
    }).catch(err => console.log(err));