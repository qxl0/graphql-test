const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema} = require('graphql');
const schema = require('./schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());

// connect to database
mongoose.connect("mongodb+srv://qiang:qiangli2@cluster0.mqpni.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

var root = {
    hello: () => {
        return 'Hello World!';
    }
};
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
