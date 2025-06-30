import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

// Required to disable Next.js default body parsing
export const config = {
    api: {
        bodyParser: false,
    },
};

// Helper to parse the incoming multipart/form-data
function parseForm(req) {
    return new Promise((resolve, reject) => {
        const form = formidable({ multiples: false, keepExtensions: true });

        form.parse(req, (err, fields, files) => {
            if (err) return reject(err);
            resolve({ fields, files });
        });
    });
}

export async function POST(req) {
    try {
        const { fields, files } = await parseForm(req);

        const {
            job,
            name,
            phone,
            email,
            address,
            gender,
            qualification,
        } = fields;

        const cv = files.cv;

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,      // your gmail
                pass: process.env.EMAIL_PASS,      // app password
            },
        });

        const mailOptions = {
            from: `"Career Form" <${process.env.EMAIL_USER}>`,
            to: process.env.RECEIVER_EMAIL,      // your receiving email (can be same as above)
            subject: `New Job Application for ${job}`,
            text: `
        Job Applied For: ${job}
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Address: ${address}
        Gender: ${gender}
        Qualification: ${qualification}
      `,
            attachments: [
                {
                    filename: cv.originalFilename,
                    path: cv.filepath,
                },
            ],
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Career submission error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again later." },
            { status: 500 }
        );
    }
}
