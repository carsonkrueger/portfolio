import { Router } from "express";
import path from "path";
import { staticPath } from "../../static/static";

const RESUME_PDF_PATH = staticPath("Resume.pdf");

module.exports = (app: any) => {
  const router = Router();

  router.get("/", (req: any, res: any, next: any) => {
    res.sendFile(RESUME_PDF_PATH);
  });

  // router.post("/", (req: any, res: any, next: any) => {
  //   // todo
  //   // authenticate & authorize
  //   // validate file upload
  //   // set Resume.pdf to new upload
  // });

  app.use("/resume", router);
};
