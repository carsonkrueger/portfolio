import { RequestHandler } from "express";
import argon from "argon2";
import dotenv from "dotenv";

dotenv.config();
const PASSWORD_HASH = process.env.PASSWORD_HASH;

export const authorize: RequestHandler = async (req, res, next) => {
    console.log(await argon.hash(req.body.password));

    if (req.body.password === undefined || !PASSWORD_HASH) {
        res.sendStatus(401);
        return;
    }

    if (!(await argon.verify(PASSWORD_HASH, req.body.password))) {
        res.sendStatus(401);
        return;
    }

    next();
};
