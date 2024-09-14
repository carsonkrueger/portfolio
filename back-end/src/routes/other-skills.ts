import { Router } from "express";
import other_skills from "../../static/other-skills.json";

module.exports = (app: any) => {
  const router = Router();

  router.get("/", (req: any, res: any, next: any) => {
    res.send(other_skills);
  });

  app.use("/other-skills", router);
};
