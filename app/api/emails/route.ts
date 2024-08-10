import {Resend} from "resend";
import Welcome from "@/email/Welcome";
/*.env.local içinde tanımladık böylece api keyimizi github pushladığımızda herkes göremiyor.Çünkü .env.local pushlanmıyor.*/
const resend = new Resend('re_Az5avQSK_34TusgLQ4KC73LX65JMYVuJS');


export async function POST(request: Request) {
    const {email,firstname,message } = await request.json();

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'trkhamarat@gmail.com',
        subject: 'hello world',
        react: Welcome({firstname,message}),
    });
}