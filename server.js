import dotenv from "dotenv";
dotenv.config();

import "./lib/mongoose.js";

import express from "express";
import userRouter from "./routes/userRouter.js";
import logMiddleware from "./middlewares/log.js";

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

app.use(logMiddleware);

app.use(express.json());
app.use("/customers", userRouter);
