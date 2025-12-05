import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { z } from "zod";

const EmailSchema = z.object({
  name: z.string().min(1, { error: "Nme cannot be empty." }),
  phone: z
    .string()
    .min(7, { error: "Phone number must be at least 7 digits long." })
    .regex(/^[0-9]+$/, { error: "Phone number must contain only digits." }),
  email: z.email({ error: "Invalid email." }),
  message: z.string().optional(),
});

export const sendEmail = createServerFn({ method: "POST" })
  .inputValidator(EmailSchema)
  .handler(async ({ data: userData }) => {
    const resend = new Resend(import.meta.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Contact at Mindsync <info@fondingo.com>",
      to: "info@mindsync.cc",
      subject: `${userData.name} is trying to contact you.`,
      html: `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin:0;padding:0;background-color:#0b1020;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#0b1020;padding:24px 12px;">
          <tr>
            <td align="center">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:640px;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e2e8f0;">
                <!-- Header -->
                <tr>
                  <td style="padding:24px 28px;background:#001633;color:#ffffff;">
                    <h1 style="margin:0;font-size:20px;font-weight:700;">New contact from your website</h1>
                    <p style="margin:6px 0 0;font-size:14px;color:#cbd5f5;">
                      Someone just filled out the contact form on MindSync.
                    </p>
                  </td>
                </tr>

                <!-- Summary strip -->
                <tr>
                  <td style="padding:16px 28px 0;">
                    <p style="margin:0;font-size:14px;color:#4a5568;">
                      <span style="font-weight:600;color:#1a202c;">Lead:</span>
                      ${userData.name} &middot; ${userData.email}
                    </p>
                  </td>
                </tr>

                <!-- Details -->
                <tr>
                  <td style="padding:16px 28px 4px;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;font-size:14px;color:#2d3748;">
                      <tr>
                        <td style="padding:6px 0;width:120px;font-weight:600;color:#4a5568;">Name</td>
                        <td style="padding:6px 0;">${userData.name}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;width:120px;font-weight:600;color:#4a5568;">Email</td>
                        <td style="padding:6px 0;">
                          <a href="mailto:${userData.email}" style="color:#0076ea;text-decoration:none;">${userData.email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;width:120px;font-weight:600;color:#4a5568;">Phone</td>
                        <td style="padding:6px 0;">${userData.phone}</td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td style="padding:16px 28px 8px;">
                    <p style="margin:0 0 8px;font-size:14px;font-weight:600;color:#4a5568;">Message</p>
                    <div style="
                      margin:0;
                      padding:14px 16px;
                      border-radius:12px;
                      background:#f7fafc;
                      border:1px solid #e2e8f0;
                      font-size:14px;
                      color:#2d3748;
                      line-height:1.5;
                      white-space:pre-wrap;
                    ">
                      ${
                        userData.message && userData.message.trim().length > 0
                          ? userData.message
                              .replace(/</g, "&lt;")
                              .replace(/>/g, "&gt;")
                          : "<em style='color:#718096;'>No message was provided.</em>"
                      }
                    </div>
                  </td>
                </tr>

                <!-- CTA -->
                <tr>
                  <td style="padding:16px 28px 24px;" align="left">
                    <a
                      href="mailto:${userData.email}"
                      style="
                        display:inline-block;
                        padding:10px 22px;
                        background-color:#0076ea;
                        color:#ffffff;
                        text-decoration:none;
                        font-size:14px;
                        font-weight:600;
                        border-radius:999px;
                        box-shadow:0 8px 18px rgba(0,118,234,0.35);
                      "
                    >
                      Reply to ${userData.name}
                    </a>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding:12px 28px 20px;border-top:1px solid #e2e8f0;font-size:12px;color:#a0aec0;">
                    <p style="margin:0;">
                      This email was generated automatically from the MindSync contact form.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `,
    });

    if (error) {
      return console.error({ error });
    }

    return true;
  });
