const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://admin:81LUUmfWCSXHo5CE@cluster0-mfw6l.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected to database ✅');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening for requests on port 4000 📡');
});