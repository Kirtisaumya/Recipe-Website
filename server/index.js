import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./src/routes/user.js";
import { recipesRouter } from "./src/routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(

    "mongodb://localhost:27017/Recipes" ,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ).then(()=>console.log("Db is connected"));
  

app.listen(3001, () => console.log("Server started"));
