const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");

const schema = require("./schema/schema");

const app = express();

dotenv.config();

// Allow cross origin requrest
app.use(cors());

// DB connection
mongoose.connect(`${process.env.DB}`);
mongoose.connection.once("open", () => {
  console.log("Connected to database.");
});

// Standalone graphql endpoint
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(process.env.PORT, () =>
  console.log(`Listening on PORT ${process.env.PORT}`)
);
