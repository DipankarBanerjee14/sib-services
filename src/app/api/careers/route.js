import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const config = {
    api: {
        bodyParser: false,
    },
    runtime: "nodejs",
};

export async function POST(req) {
    try {
        const formData = await req.formData();

        const job = formData.get("job");
        const name = formData.get("name");
        const phone = formData.get("phone");
        const email = formData.get("email");
        const address = formData.get("address");
        const gender = formData.get("gender");
        const qualification = formData.get("qualification");
        const cvFile = formData.get("cv");

        if (!cvFile || typeof cvFile === "string") {
            throw new Error("Invalid CV file");
        }

        const arrayBuffer = await cvFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST, // smtppro.zoho.in
            port: parseInt(process.env.EMAIL_PORT || "465"),
            secure: true, // true for SSL
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: `New Career Application from ${name}`,
            text: `
Job: ${job}
Name: ${name}
Phone: ${phone}
Email: ${email}
Address: ${address}
Gender: ${gender}
Qualification: ${qualification}
      `,
            attachments: [
                {
                    filename: cvFile.name,
                    content: buffer,
                },
            ],
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Career form error:", error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
