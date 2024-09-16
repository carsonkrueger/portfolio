import { Router, Express } from "express";
import { sendMail } from "../services/email";

module.exports = (app: Express) => {
  const router = Router();

  router.post("/", async (req, res, next) => {
    const emailBody = req.body;

    if (
      emailBody["from"] === "" ||
      emailBody["body"] === "" ||
      (emailBody["from"] === null && emailBody["body"] === null)
    ) {
      res.sendStatus(400);
      return;
    }

    await sendMail(
      emailBody["from"],
      "crkruege@gmail.com",
      "Portfolio Contact",
      emailBody["body"],
    );
    res.send();
  });

  app.use("/email", router);
};
