import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import router from "./src/routes/email.js";

const app = express();
const port = 2222;

const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes in milliseconds
  max: 5, // limit to 5 requests per window
  message: 'Too many emails sent from this IP, please try again after 15 minutes.',
  headers: true, // Optional: include rate limit info in response headers
});

// Middleware
const corsOptions = {
  origin: ["http://localhost:3000", "https://wedding-photography-six.vercel.app", "https://covenantlx.com"]
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/api/email", emailLimiter, router);

// Start the server
app.listen(port, '127.0.0.1', () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;