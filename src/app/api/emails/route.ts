import Welcome from "@/emails/welcome";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: Request) {
  const { email, Firstname } = await request.json();
  const sendemail = await resend.emails.send({
    from: email,
    to: "eugeneokaka@gmail.com",
    subject: "hello world",
    react: Welcome({ Firstname }),
  });
  console.log("Email sent:", sendemail);
  return new Response("Email sent successfully", {
    status: 200,
  });
}
