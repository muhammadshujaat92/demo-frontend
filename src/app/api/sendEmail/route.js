import { Resend } from 'resend';
const resend = new Resend('re_6ycAQxQ2_LNbdHq41HEG14rPCZkrnRy9i');

export async function POST(req) {
    const { name, email, number, date, adult, children, message,referrer } = await req.json();

    try {
        const ipInfo = await fetch('https://ipinfo.io/?token=9063eb09bb0e26');
        const { ip, country } = await ipInfo.json();
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: 'umuhammadshujaat@gmail.com',
            subject: 'India Yaatra',
            html: `
                <div style="font-family: Arial, sans-serif; color: #333; border: 2px solid #ff7300; padding: 20px;">
                    <img style="width: 20rem; margin: 10px 0px;" src="../public/IndiaYaatra-logo.webp" alt="">
                    <p style="font-size: 15px;">Dear Admin,</p>
                    <p style="font-size: 15px;">You have a new enquiry.</p>
                    <p style="font-size: 15px;">Please see details:</p>

                    <table style="border: 1px solid #999999; width: 100%; margin: 40px 0px;">
                        <tr>
                            <th style="border: 1px solid #999999; padding: 8px; text-align: left; font-size: 15px; width:5rem;">Name
                            </th>
                            <td style="border: 1px solid #999999; padding: 8px;">${name}</td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #999999; padding: 8px; text-align: left; font-size: 15px; width:5rem;">
                                Email</th>
                            <td style="border: 1px solid #999999; padding: 8px;">
                                <a href="mailto:${email}" style="color: #1a73e8;">${email}</a>
                            </td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #999999; padding: 8px; text-align: left; font-size: 15px; width:5rem;">
                                Phone</th>
                            <td style="border: 1px solid #999999; padding: 8px;">${number}</td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #999999; padding: 8px; text-align: left; font-size: 15px; width:5rem;">
                                Adults</th>
                            <td style="border: 1px solid #999999; padding: 8px;">${adult}</td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #999999; padding: 8px; text-align: left; font-size: 15px; width:5rem;">
                                Children</th>
                            <td style="border: 1px solid #999999; padding: 8px;">${children}</td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #999999; padding: 8px; text-align: left; font-size: 15px; width:5rem;">
                                Country</th>
                            <td style="border: 1px solid #999999; padding: 8px;">${country}</td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #999999; padding: 8px; text-align: left; font-size: 15px; width:5rem;">User
                                IP</th>
                            <td style="border: 1px solid #999999; padding: 8px;">${ip}</td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #999999; padding: 8px; text-align: left; font-size: 15px; width:5rem;">URL
                            </th>
                            <td style="border: 1px solid #999999; padding: 8px;">
                                <a href="${referrer}" style="color: #1a73e8;">${referrer}</a>
                            </td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #999999; padding: 8px; text-align: left; font-size: 15px; width:5rem;">
                                Message</th>
                            <td style="border: 1px solid #999999; padding: 8px;">${message}</td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #999999; padding: 8px; text-align: left; font-size: 15px; width:5rem;">Date
                            </th>
                            <td style="border: 1px solid #999999; padding: 8px;">${date}</td>
                        </tr>
                    </table>
                    <div style="font-size: 15px;">
                        <p>You have a new enquiry.</p>
                        <p>Please see details:</p>
                    </div>
                </div>
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