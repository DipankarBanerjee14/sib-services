import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { firstName, lastName, email, phone, message } = await req.json();

        if (!firstName || !lastName || !email || !message) {
            return new Response(JSON.stringify({ error: "Missing fields" }), {
                status: 400,
            });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: parseInt(process.env.EMAIL_PORT || "465"),
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.CONTACT_EMAIL_TO, // 👈 Contact-specific recipient
            subject: `HRP Website Contact Form - From ${firstName} ${lastName}`,
            html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Mail Error:", error);
        return new Response(
            JSON.stringify({ success: false, error: error.message }),
            { status: 500 }
        );
    }
}
