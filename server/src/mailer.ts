
import sgMail from '@sendgrid/mail';
import "dotenv/config";

const mailer = {
  sendEmail: async (
    html: string,
    text: string,
    subject: string,
    toEmail: string, // can be any valid email.
    fromEmail: string, // needs to be an SG authenticated domain.
    replyTo: string = 'noreply@ctvphotovideo.com'
  ) => {
    if (!process.env.SENDGRID_API_KEY)
      throw new Error("SendGrid API Key missing!");
    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: toEmail,
      from: fromEmail,
      replyTo: replyTo,
      subject: subject,
      text: text,
      html: html,
    };

    try
    {
      console.info("Sending Email...")
      const result = await sgMail.send(msg);
      console.info("Email sent!");
      return result;
    } catch(error: any) {
      console.error(error);
    }
  }
}


export default mailer;