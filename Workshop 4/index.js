import "dotenv/config";
import express from "express";
import { connect } from "mongoose";
import { MONGO_URI } from "./src/const/db.const.js";
import { router as globalRouter } from "./src/const/router.const.js";

const app = express();
app.use(express.json());

app.use("/api", globalRouter);

connect(MONGO_URI)
    .then(() => app.listen(process.env.PORT))
    .catch (err => {
        console.log("Issue while connecting to Mongo DB.", { err });
    });