const express = require("express");
const port = process.env.PORT || 5000;
const dotenv = require("dotenv");
const app = express();
const cors = require('cors');
const colors = require("colors");
const schema = require('./schema/schema');
var { graphqlHTTP } = require('express-graphql');
const connectDB = require("./config/db");

dotenv.config();

// Connecting MongoDB 
connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}))
app.listen(port, () => {
    console.log(`Server listening to port ${port}`)
})