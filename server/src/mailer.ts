
import sgMail from '@sendgrid/mail';
import "dotenv/config";

const mailer = {
  sendEmail: async (
    html: string,
    text: string,
    subject: string,
    email: string,
    businessEmail: string
  ) => {
    if (!process.env.SENDGRID_API_KEY)
      throw new Error("SendGrid API Key missing!");
    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: email,
      from: businessEmail, // Change to your verified sender
      subject: subject,
      text: text,
      html: html,
    };

    try
    {
      const result = await sgMail.send(msg);
      console.log("result", result);
      return result;
    } catch(error: any) {
      console.error(error)
    }
  }
}


export default mailer;