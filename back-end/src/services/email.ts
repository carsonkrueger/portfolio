import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export async function sendMail(
  from: string,
  to: string,
  subject: string,
  html: string,
) {
  const transporter = nodemailer.createTransport({
    service: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from,
    to,
    subject,
    html,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`email sent ${info.response}`);
    }
  });
}
