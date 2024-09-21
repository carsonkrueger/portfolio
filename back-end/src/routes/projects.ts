import { Router } from "express";
import projects from "../../static/projects.json";

module.exports = (app: any) => {
  const router = Router();

  router.get("/", (req: any, res: any, next: any) => {
    res.send(projects);
  });

  app.use("/projects", router);
};
