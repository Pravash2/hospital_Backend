const express = require("express");
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

const users = require("./routers/users");
const hospitals = require("./routers/hospitals");
const profile = require("./routers/profile");

const app = express();

mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log("MongoDB connected"))
	.catch(err => console.log("MongoDb did not connect"));

app.get("/", (req, res) => res.send("Hello"));

//Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/hospitals", hospitals);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Sever is running ${port}`));
