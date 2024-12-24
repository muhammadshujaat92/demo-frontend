const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'dalult1.hostarmada.net',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

export async function POST(req) {
    const { name, email, number, date, adult, children, message, referrer, ip, country } = await req.json();
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
    const countryName = regionNames.of(country);

    const mailOptions = {
        from: `"India Yaatra" <${email}>`,
        to: 'info@indiayaatra.com',
        subject: 'New Travel Estimate Request',
        html: `
                <div style="font-family: Arial, sans-serif; color: #333; border: 2px solid #ff7300; padding: 20px;">
                    <img style="width: 20rem; margin: 10px 0px;" src="https://admin.indiayaatra.com/uploads/India_Yaatra_logo_1504ad9733.webp" alt="">
                    <p style="font-size: 15px;">Dear Admin,</p>
                    <p style="font-size: 15px;">You have a new enquiry.</p>
                    <p style="font-size: 15px;">Please see details:</p>

                    <table style="border: 1px solid #999999; width: 100%; margin: 30px 0px;">
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
                            <td style="border: 1px solid #999999; padding: 8px;">${countryName}</td>
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
                        <p style="font-size: 15px;">Thanking You</p>
                        <p style="font-size: 15px;">India Yaatra</p>
                </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ success: true, message: 'Email sent successfully!' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ success: false, message: error.message || 'Error sending email.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}