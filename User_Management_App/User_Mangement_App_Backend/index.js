import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/users.js";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const app = express();
const port = 5000;



app.use(bodyParser.json());
app.use(cors());
app.use("/", userRoutes);
app.get("/", (req, res) => res.send("hello world"));
app.all("*", (req, res) => res.send("route does not exist"));

app.listen(port, () => console.log(`server is listening on port: http://localhost:${port}`))




// Server path
/*const url = 'mongodb://localhost:27017/db1/users';

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log("Connected...")
})*/

mongoose.connect("mongodb://localhost/user_management_db", { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log("Connected to database");
}).on('error', function (error) { console.log('error', error) });