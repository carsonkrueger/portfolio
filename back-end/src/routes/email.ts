import { Router, Express } from "express";
import { sendMail } from "../services/email";

type EmailBody = {
  from: string;
  body: string;
};

module.exports = (app: Express) => {
  const router = Router();

  router.post("/", async (req, res, next) => {
    const emailBody = req.body;

    if (emailBody["from"] !== null && emailBody["body"] !== null) {
      await sendMail(
        emailBody["from"],
        "crkruege@gmail.com",
        "Portfolio Contact",
        emailBody["body"],
      );
      res.send();
    } else {
      res.sendStatus(400);
    }
  });

  app.use("/email", router);
};
