import { RequestHandler } from "express";
import argon from "argon2";
import dotenv from "dotenv";

dotenv.config();
const PASSWORD_HASH = process.env.PASSWORD_HASH;

export const authorize: RequestHandler = async (req, res, next) => {
    if (req.body.password === undefined || !PASSWORD_HASH) {
        res.sendStatus(401);
        return;
    }

    let authorized = await argon.verify(PASSWORD_HASH, req.body.password);
    if (!authorized) {
        res.sendStatus(401);
        return;
    }

    next();
};
