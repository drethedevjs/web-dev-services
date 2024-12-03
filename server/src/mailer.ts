
import "dotenv/config";
import { google } from "googleapis";
import nodemailer from "nodemailer";

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

const mailer = {
  sendEmail: async (toEmail: string, recipientName: string, message: string) => {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.MY_EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });
  
    //EMAIL OPTIONS
    const from = process.env.MY_EMAIL;
    const subject = "CSRA Web Services Inquiry";
    const html = `<p>${message}</p>`;
    
    const result = await transport.sendMail({ from, subject, to: toEmail, html });
    return result;
  }
}


export default mailer;