import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function fromAddress() {
  return process.env.SMTP_FROM ?? 'Bazalthe Labs <onboarding@resend.dev>'
}

export async function sendOtpEmail(email: string, code: string): Promise<void> {
  const result = await resend.emails.send({
    from: fromAddress(),
    to: email,
    subject: `${code} — Your Bazalthe Labs sign-in code`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:48px 16px;">
    <tr>
      <td align="center">
        <table width="480" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid #222;border-radius:16px;overflow:hidden;max-width:480px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="padding:32px 32px 24px;border-bottom:1px solid #222;">
              <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#666;">
                Bazalthe Labs
              </p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#fff;line-height:1.3;">
                Your sign-in code
              </h1>
              <p style="margin:0 0 28px;font-size:14px;color:#888;line-height:1.6;">
                Use this code to sign into Bazalthe Labs. It expires in <strong style="color:#aaa;">15 minutes</strong>.
              </p>

              <!-- OTP Code block -->
              <div style="background:#1a1a1a;border:1px solid #333;border-radius:12px;padding:24px;text-align:center;margin-bottom:28px;">
                <span style="font-size:36px;font-weight:700;letter-spacing:0.2em;color:#fff;font-family:monospace;">
                  ${code}
                </span>
              </div>

              <p style="margin:0;font-size:12px;color:#555;line-height:1.6;">
                If you didn't request this code, you can safely ignore this email.
                Never share this code with anyone.
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px;border-top:1px solid #222;">
              <p style="margin:0;font-size:11px;color:#444;">
                © ${new Date().getFullYear()} Bazalthe Labs
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  })

  if (result.error) {
    throw new Error(`[mailer] Failed to send OTP email: ${result.error.message}`)
  }

  console.log(`[mailer] OTP email sent to ${email}`)
}
