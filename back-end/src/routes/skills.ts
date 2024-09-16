import { Router, Express } from "express";
import skills from "../../static/skills.json";

module.exports = (app: Express) => {
  const router = Router();

  router.get("/", (req: any, res: any, next: any) => {
    res.send(skills);
  });

  app.use("/skills", router);
};
