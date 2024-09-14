import skills from "../../skills.json";

module.exports = (app: any) => {
  const router = require("express").Router();

  router.get("/", (req: any, res: any, next: any) => {
    res.send(skills);
  });

  app.use("/skills", router);
};
