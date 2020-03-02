const express = require('express');
const path = require('path');
const graphqlHTTP = require('express-graphql');
const PORT = process.env.PORT || 1337;
const schema = require('./schema');

require('dotenv').config();

const app = express();

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

app.listen(PORT, () => {
	console.log(`SERVER is listening to PORT: ${PORT}...`);
});
