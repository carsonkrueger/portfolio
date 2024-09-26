import { Router, Express } from "express";
import { staticPath } from "../../static/static";

module.exports = (app: any) => {
    const router = Router();

    router.get("/:name", (req, res, next) => {
        res.sendFile(staticPath(req.params.name));
    });

    app.use("/resources", router);
};
