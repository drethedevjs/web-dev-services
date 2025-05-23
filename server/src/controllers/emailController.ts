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

    const text = `
      Name: ${firstName} ${lastName}
      Email: ${email}

      Message:
      ${message}
    `;

    try {
      // Send the email using Nodemailer
      let response = await mailer.sendEmail(html, text, `CSRA Web Dev Inquiry`, 'drethedevjs@gmail.com', process.env.MY_EMAIL!, email);
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
    `;

    const text = `
      Bride: ${brideName}
      Groom: ${groomName}
      Email: ${email}
      Wedding Date: ${weddingDate}
      Phone: ${phone}
      Venue: ${venue}

      Message:
      ${message}
      `;

    try {
      let response = await mailer.sendEmail(html, text, `Wedding Inquiry for ${weddingDate}`, process.env.COVENANT_EMAIL!, 'noreply@covenantlx.com', email);
      console.log("RESPONSE", response);
      res.status(200).send(response);
    } catch (err: any) {
      console.error("Error sending email!", err);
      res.status(500).send({ error: `Error sending email: ${err.message}` });
    }
  },
  sendCaptureTheVisionEmail: async (req: Request, res: Response, next: NextFunction) => {
    const {
      firstName,
      lastName,
      email,
      familySize,
      phone,
      message
    } = req.body;

    const html = `
      <p><b>Name:</b> ${firstName} ${lastName}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Family Size:</b> ${familySize}</p>
      <p><b>Message:</b> ${message}</p>
    `;

    const text = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

    try {
      let response = await mailer.sendEmail(html, text, `${lastName} Family Portraits / ${(new Date()).getFullYear()}`, process.env.CTV_EMAIL!, 'noreply@ctvphotovideo.com', email);
      res.status(200).send(response);
    } catch (err: any) {
      console.error("Error sending email!", err);
      res.status(500).send({ error: `Error sending email: ${err.message}` });
    }
  },
  sendEpEmail: async (req: Request, res: Response, next: NextFunction) => {
    const {
      name,
      email,
      businessName,
      website,
      phone,
      message
    } = req.body;

    const html = `
      <p><b>Name:</b> ${name}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Business Name:</b> ${businessName}</p>
      <p><b>Business Website:</b> ${website}</p>
      <p><b>Message:</b> ${message}</p>
    `;

    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nBusinessName\n\nBusiness Website:${businessName}\n\nMessage:${website}\n${message}`;

    try {
      let response = await mailer.sendEmail(html, text, `Investment Opportunity with ${businessName}`, process.env.EP_EMAIL!, 'noreply@eleventhandpemberton.com', email);
      res.status(200).send(response);
    } catch (err: any) {
      console.error("Error sending email!", err);
      res.status(500).send({ error: `Error sending email: ${err.message}` });
    }
  }
}

export default emailController;