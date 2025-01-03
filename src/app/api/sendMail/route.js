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
    const { name, email, number, date, adult, children, message, referrer, ip, country, city, region } = await req.json();
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
    const countryName = regionNames.of(country);

    const mailOptions = {
        from: `"India Yaatra" <${email}>`,
        to: 'info@indiayaatra.com',
        subject: 'New Travel Estimate Request',
        html: `
<div style="font-family: Arial, sans-serif; color: #333; border: 2px solid #ff7300; padding: 20px 5px 20px 5px;">
        <img style="width: 20rem; margin: 10px 0px;" src="https://admin.indiayaatra.com/uploads/India_Yaatra_logo_1504ad9733.webp" alt="">
        <p style="font-size: 15px;">Dear Admin,</p>
        <p style="font-size: 15px;">You have a new enquiry.</p>
        <p style="font-size: 15px;">Please see details:</p>

        <div style="border: 1px solid #999999; margin: 30px 0px; padding: 0 2px 2px 2px; width:100%;">
            <div style="display: flex; align-items: center; gap: 2px;">
                <div
                    style="border: 1px solid #999999; padding: 8px; text-align: left; font-size: 13px; width:5.5rem; margin-top: 2px; font-weight: 600;">
                    Name</div>
                <div style="border: 1px solid #999999; padding: 8px; margin-top: 2px; font-size: 13px; width: 100%;">${name}</div>
            </div>
            <div style="display: flex; align-items: center; gap: 2px;">
                <div
                    style="border: 1px solid #999999; padding: 8px; text-align: left; font-size: 13px; width:5.5rem; margin-top: 2px; font-weight: 600;">
                    Email</div>
                <div style="border: 1px solid #999999; padding: 8px; margin-top: 2px; font-size: 13px; width: 100%;">
                    <a href="mailto:${email}" style="color: #1a73e8;">${email}</a>
                </div>
            </div>
            <div style="display: flex; align-items: center; gap: 2px;">
                <div
                    style="border: 1px solid #999999; padding: 8px; text-align: left; font-size: 13px; width:5.5rem; margin-top: 2px; font-weight: 600;">
                    Phone</div>
                <div style="border: 1px solid #999999; padding: 8px; margin-top: 2px; font-size: 13px; width: 100%;">${number}</div>
            </div>
            <div style="display: flex; gap: 2px;">
                <div style="display: flex; align-items: center; gap: 2px; width: 50%;">
                    <div
                        style="border: 1px solid #999999; padding: 8px; text-align: left; font-size: 13px; width:5.6rem; margin-top: 2px; font-weight: 600;">
                        Adults</div>
                    <div style="border: 1px solid #999999; padding: 8px; margin-top: 2px; font-size: 13px; width: 90%;">${adult}</div>
                </div>
                <div style="display: flex; align-items: center; gap: 2px; width: 50%;">
                    <div
                        style="border: 1px solid #999999; padding: 8px; text-align: left; font-size: 13px; margin-top: 2px; font-weight: 600;">
                        Childrens</div>
                    <div style="border: 1px solid #999999; padding: 8px; margin-top: 2px; font-size: 13px; width: 80%;">${children}</div>
                </div>
            </div>
            <div style="display: flex; gap: 2px;">
                <div style="display: flex; align-items: center; gap: 2px; width: 50%;">
                    <div
                        style="border: 1px solid #999999; padding: 8px; text-align: center; font-size: 13px; width:5.5rem; margin-top: 2px; font-weight: 600;">
                        Country</div>
                    <div style="border: 1px solid #999999; padding: 8px; margin-top: 2px; font-size: 13px; width: 90%;">${countryName}</div>
                </div>
                <div style="display: flex; align-items: center; gap: 2px; width: 50%;">
                    <div
                        style="border: 1px solid #999999; padding: 8px; text-align: left; font-size: 13px; width:5.8rem; margin-top: 2px; font-weight: 600;">
                        City</div>
                    <div style="border: 1px solid #999999; padding: 8px; margin-top: 2px; font-size: 13px; width: 80%;">${city}</div>
                </div>
            </div>

            <div style="display: flex; gap: 2px;">
                <div style="display: flex; align-items: center; gap: 2px; width: 50%;">
                    <div
                        style="border: 1px solid #999999; padding: 8px; text-align: left; font-size: 13px; width:5.5rem; margin-top: 2px; font-weight: 600;">
                        User IP</div>
                    <div style="border: 1px solid #999999; padding: 8px; margin-top: 2px; font-size: 13px; width: 90%;">${ip}</div>
                </div>
                <div style="display: flex; align-items: center; gap: 2px; width: 50%;">
                    <div
                        style="border: 1px solid #999999; padding: 8px; text-align: left; font-size: 13px; width:6.5rem; margin-top: 2px; font-weight: 600;">
                        State</div>
                    <div style="border: 1px solid #999999; padding: 8px; margin-top: 2px; font-size: 13px; width: 90%;">${region}</div>
                </div>
            </div>


            <div style="display: flex; align-items: center; gap: 2px;">
                <div
                    style="border: 1px solid #999999; padding: 8px; text-align: left; font-size: 13px; width:5.5rem; margin-top: 2px; font-weight: 600;">
                    URL</div>
                <div style="border: 1px solid #999999; padding: 8px; margin-top: 2px; font-size: 13px; width: 100%;">
                    <a href="${referrer}" style="color: #1a73e8;">${referrer}</a>
                </div>
            </div>
            <div style="display: flex; align-items: center; gap: 2px;">
                <div
                    style="border: 1px solid #999999; padding: 8px; text-align: center; font-size: 13px; width:5rem; margin-top: 2px; font-weight: 600;">
                    Message</div>
                <div style="border: 1px solid #999999; padding: 8px; margin-top: 2px; font-size: 13px; width: 100%;">${message}</div>
            </div>
            <div style="display: flex; align-items: center; gap: 2px;">
                <div
                    style="border: 1px solid #999999; padding: 8px; text-align: left; font-size: 13px; width:5.5rem; margin-top: 2px; font-weight: 600;">
                    Date</div>
                <div style="border: 1px solid #999999; padding: 8px; margin-top: 2px; font-size: 13px; width: 100%;">${date}</div>
            </div>
        </div>
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