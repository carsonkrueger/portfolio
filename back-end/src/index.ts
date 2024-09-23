import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

dotenv.config();

const port = process.env.PORT ?? 3000;

const app = express();

// const corsOptions = {
//   origin: "*",
// };

// app.use(cors(corsOptions));
// parse application/json bod
app.use(express.json());
// parse html form data
app.use(express.urlencoded({ extended: false }));
// serve angular static build dir
app.use(express.static(path.join(__dirname, "../dist/browser")));

require("./routes/skills.ts")(app);
require("./routes/other-skills.ts")(app);
require("./routes/resume.ts")(app);
require("./routes/email.ts")(app);
require("./routes/projects.ts")(app);

app.use("*", (_req, res) => {
    res.sendFile(
        path.join(__dirname, "/../../front-end/dist/browser/index.html"),
    );
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
