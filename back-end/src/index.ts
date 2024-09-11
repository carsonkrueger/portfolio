import express from "express";
import dotenv from "dotenv";
// import { AppConfiguration } from "@angular-environment-variables/app-configuration";
// const express = require("express");

dotenv.config();

const port = process.env.PORT ?? 3000;

const app = express();

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
