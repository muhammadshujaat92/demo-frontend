import { Resend } from 'resend';
const resend = new Resend('re_6ycAQxQ2_LNbdHq41HEG14rPCZkrnRy9i');

export async function POST(req) {
    const { name, email, number, date, adult, children, message } = await req.json();

    try {
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: 'umuhammadshujaat@gmail.com',
            subject: 'India Yaatra',
            html: `
                <h1>Travel Estimate Request</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${number}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Adults:</strong> ${adult}</p>
                <p><strong>Children:</strong> ${children}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });
        return new Response(JSON.stringify({ success: true, message: 'Email sent successfully!' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ success: false, message: 'Error sending email.' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}