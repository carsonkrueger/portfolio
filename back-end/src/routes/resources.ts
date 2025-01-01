import { Router, Express } from "express";
import { staticPath } from "../../static/static";
import fs from "node:fs";
import multer from "multer";
import { authorize } from "../middleware/auth";
const upload = multer({ dest: staticPath(), storage: multer.memoryStorage() });

module.exports = (app: Express) => {
    const router = Router();

    router.get("/:name", (req, res, next) => {
        res.sendFile(staticPath(req.params.name));
    });

    router.post(
        "/:name",
        upload.single("file"),
        authorize,
        async (req, res, next) => {
            if (req.file) {
                let path = staticPath(req.params.name)
                fs.writeFile(path, req.file.buffer, () => { })
            }
            res.sendStatus(201);
        },
    );

    app.use("/resources", router);
};
