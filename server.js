const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection.js"); //SQL connection
const path = require("path");

require("./models"); // Import models

// SETUP express
const server = express();
const PORT = process.env.PORT || 3001;

// SETUP express-session
server.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// SETUP express-handlebars
const hbs = exphbs.create({});
server.engine("handlebars", hbs.engine);
server.set("view engine", "handlebars");


// SETUP server
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "public")));
server.set('trust proxy', true);

server.use(require("./controllers"));

// SETUP sequelize database
sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});
