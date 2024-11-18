import { Resend } from "resend";
import {redirect} from  'next/navigation'


// EMAIL SENDGING FUCTIONALITY 
// ADD RESEND_API_KEY IN YOUR .ENV FILE 
const resend = new Resend(process.env.RESEND_API_KEY);
export const SendEmail = async (formdata) => {
  const message = "hi";
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");
  if (!message) {
    return {
      error: "Invalid message",
    };
  }
  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: `lerutlamojapelo03@gmail.com`,
    subject: `From Website Client.`,
    reply_to: `${SenderEmail}`,
    text: `sender email: ${SenderEmail} 
     `,
  });

return redirect('/')
 
  
};
