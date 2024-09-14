import other_skills from "../../other-skills.json";

module.exports = (app: any) => {
  const router = require("express").Router();

  router.get("/", (req: any, res: any, next: any) => {
    res.send(other_skills);
  });

  app.use("/other-skills", router);
};
