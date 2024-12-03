import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import router from "./routes/email.js";

const app = express();
const port = 2222;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/api/email", router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
