import { Resend } from 'resend';
import Welcome from '@/email/Welcome';
import { NextResponse } from 'next/server';

/* .env.local içinde tanımladık böylece API anahtarımızı Github'a pushladığımızda herkes göremiyor. Çünkü .env.local pushlanmıyor. */
const resend = new Resend(process.env.RESEND_API_KEY);

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
