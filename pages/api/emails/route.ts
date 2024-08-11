import { Resend } from 'resend';
import Welcome from '@/email/Welcome';
import { NextResponse } from 'next/server';
import Cors from 'cors';

/* .env.local içinde tanımladık böylece API anahtarımızı Github'a pushladığımızda herkes göremiyor. Çünkü .env.local pushlanmıyor. */
const resend = new Resend('re_Az5avQSK_34TusgLQ4KC73LX65JMYVuJS');

const cors = Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
    origin: '*', // Burada '*' kullanarak tüm kökenlere izin verebilirsiniz. İhtiyacınıza göre özelleştirin
});

function runCors(req: Request) {
    return new Promise((resolve, reject) => {
        cors(req as any, {} as any, (result: any) => {
            if (result instanceof Error) {
                return reject(result);
            }
            resolve(result);
        });
    });
}


export async function POST(request: Request) {


    try {
        // İstekten gelen JSON verilerini ayıkla
        const { email, firstname, message } = await request.json();

        // E-posta gönderme işlemi
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'trkhamarat@gmail.com', // Hedef e-posta adresini dinamik olarak kullan
            subject: 'Hello World',
            react: Welcome({ firstname, message }),

        });

        // Başarılı olduğunda 200 yanıtı döndür
        return NextResponse.json(
            { success: true, message: 'Email sent successfully.' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error sending email:', error);

        // Hata durumunda 500 yanıtı döndür
        return NextResponse.json(
            { success: false, error: 'Failed to send email.' },
            { status: 500 }
        );
    }
}
