import express from "express";
import dotenv from "dotenv";
import path from "path";
// import { AppConfiguration } from "@angular-environment-variables/app-configuration";
// const express = require("express");

dotenv.config();

const port = process.env.PORT ?? 3000;

const app = express();

app.use(express.static(path.join(__dirname, "/../../front-end/dist/browser")));

app.use("*", (_req, res) => {
  res.sendFile(
    path.join(__dirname, "/../../front-end/dist/browser/index.html"),
  );
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
