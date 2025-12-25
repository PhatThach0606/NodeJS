import express from "express";
import cors from "cors";
import rootRouter from "./routers/root.router.js";
import appError from "./common/helper/handle-error.helper.js";
const app = express();

const port = 3069;
// part json
app.use(express.json());
// cors
app.use(cors());

// API
app.use("/api", rootRouter);

app.listen(port, () => {
  console.log("Server run port: ", port);
});

app.use(appError);
