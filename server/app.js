const express = require("express");
const { graphqlHTTP } =  require("express-graphql");

const schema = require("./schema/schema");

const app = express();

app.use("/graphql", graphqlHTTP({ schema }));

app.listen(5000, () => console.log("Listening on PORT 5000"));
