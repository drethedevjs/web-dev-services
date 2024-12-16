
import "dotenv/config";
import { google } from "googleapis";
import nodemailer from "nodemailer";

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

async function getAccessToken() {
  // Automatically refresh the access token
  const { token } = await oAuth2Client.getAccessToken();
  if (!token) {
    throw new Error("Failed to refresh access token");
  }
  return token;
}

const transport = nodemailer.createTransport({
  service: "gmail.com",
  auth: {
    type: "OAuth2",
    user: process.env.MY_EMAIL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: await getAccessToken()
  },
  tls: {
    rejectUnauthorized: true,
  },
});

const mailer = {
  sendEmail: async (
    html: string,
    subject: string,
    email: string,
    businessEmail: string
  ) => {
  
    //EMAIL OPTIONS
    const result = await transport.sendMail({ from: email, subject, to: businessEmail, html });
    return result;
  }
}


export default mailer;