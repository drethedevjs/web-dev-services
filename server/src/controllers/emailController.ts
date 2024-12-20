import "dotenv/config";
import { NextFunction, Request, Response } from 'express';
import mailer from '../mailer.js';

const emailController = {
  default: async (req: Request, res: Response, next: NextFunction) => {
    const { ip } = req;
    res.status(200).send({message: `All systems go! IP Address: ${ip}`});
  },
  sendEmail: async (req: Request, res: Response, next: NextFunction) => {
    const {
      firstName,
      lastName,
      email,
      message
    } = req.body;

    const html = `
      <p><b>Name:</b> ${firstName} ${lastName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b> ${message}</p>
    `
    try {
      // Send the email using Nodemailer
      let response = await mailer.sendEmail(html, `CSRA Web Dev Inquiry`, email, process.env.MY_EMAIL!);
      res.status(200).send(response);
    } catch (err: any) {
      console.error("Error sending email!", err);
      res.status(500).send({ error: `Error sending email: ${err.message}` });
    }
  },
  sendCovenantEmail: async (req: Request, res: Response, next: NextFunction) => {
    const {
      brideName,
      groomName,
      email,
      weddingDate,
      phone,
      venue,
      message } = req.body;

    const html = `
      <p><b>Bride:</b> ${brideName}</p>
      <p><b>Groom:</b> ${groomName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Wedding Date:</b> ${weddingDate}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Venue:</b> ${venue}</p>
      <p><b>Message:</b> ${message}</p>
    `
    try {
      let response = await mailer.sendEmail(html, `Wedding Inquiry for ${weddingDate}`, email, process.env.COVENANT_EMAIL!);
      res.status(200).send(response);
    } catch (err: any) {
      console.error("Error sending email!", err);
      res.status(500).send({ error: `Error sending email: ${err.message}` });
    }
  }
}

export default emailController;