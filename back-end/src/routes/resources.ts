import { Router, Express } from "express";
import { staticPath } from "../../static/static";
import fs from "node:fs";
import multer from "multer";
import { authorize } from "../middleware/auth";
const upload = multer({ dest: staticPath() });

module.exports = (app: Express) => {
    const router = Router();

    router.get("/:name", (req, res, next) => {
        res.sendFile(staticPath(req.params.name));
    });

    router.post(
        "/:name",
        authorize,
        upload.single("file"),
        async (req, res, next) => {
            if (req.file) {
                fs.rename(
                    staticPath(req.file?.filename),
                    staticPath(req.params.name),
                    (err) => console.error(err),
                );
            }
            res.sendStatus(201);
        },
    );

    app.use("/resources", router);
};
