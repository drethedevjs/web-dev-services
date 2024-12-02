import bodyParser from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import sendEmail from "./mailer.js";

const app = express();
const port = 2222;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.json("Worked!")
})

// Route to handle email sending
app.post("/send-email", async (req: Request, res: Response) => {
  const { name, toEmail, message } = req.body;

  try {
    // Send the email using Nodemailer
    let response = await sendEmail(toEmail, name, message);
    res.status(200).send(response);
  } catch (err: any) {
    console.error("Error sending email!", err);
    res.status(500).send({ error: `Error sending email: ${err.message}` });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
