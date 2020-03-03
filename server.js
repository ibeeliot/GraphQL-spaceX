const express = require('express');
const path = require('path');
const graphqlHTTP = require('express-graphql');
const PORT = process.env.PORT || 1337;
const schema = require('./schema');
const cors = require('cors');

require('dotenv').config();

const app = express();

// Allow cross-origin
app.use(cors());

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
