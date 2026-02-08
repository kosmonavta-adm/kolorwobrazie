import { Resend } from 'resend';
import { headers } from 'next/headers';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const data = await req.json()
    const headersList = await headers()

    if(!headersList.get('x-r') || headersList.get('x-r') < 1 || headersList.get('x-r') > 1000) {
        return Response.json({error: '', status: 500});
    }

    const parsedEmail = data.email.trim();
    const parsedBody = data.body.trim();

    if(parsedEmail.length === 0 || parsedBody.length === 0 || parsedEmail.length < 6 || parsedBody.length <= 32) {
        return Response.json({ error: ''}, { status: 500 });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "Kolor w obrazie <hello@update.kolorwobrazie.pl>",
            to: ['kolorwobrazie@gmail.com'],
            subject: `Wiadomość od ${parsedEmail}`,
            html: `<p>Wiadomość od ${parsedEmail}</p> <p>Treść wiadomości:</p> <p>${parsedBody}</p>`,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
