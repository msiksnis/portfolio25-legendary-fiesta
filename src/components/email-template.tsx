import React from "react";

interface ContactMeTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactMeTemplate = ({
  name,
  email,
  message,
}: ContactMeTemplateProps) => {
  return (
    <html>
      <body
        style={{
          backgroundColor: "#ffffff",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif",
          margin: 0,
          padding: 0,
        }}
      >
        <table
          align="center"
          width="100%"
          border={0}
          cellPadding={0}
          cellSpacing={0}
          role="presentation"
          style={{
            maxWidth: "600px",
            backgroundColor: "#f6f9fc",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <tbody>
            <tr>
              <td style={{ padding: "0 48px" }}>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "24px",
                    color: "#3f4553",
                    marginBottom: "16px",
                  }}
                >
                  From: <strong>{name}</strong>
                </p>
                <hr
                  style={{ borderTop: "1px solid #eaeaea", margin: "20px 0" }}
                />
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#42454d",
                  }}
                >
                  {message}
                </p>
                <hr
                  style={{ borderTop: "1px solid #eaeaea", margin: "20px 0" }}
                />
                <p style={{ fontSize: "16px", color: "#3f4553" }}>
                  Senders email:{" "}
                  <a
                    href={`mailto:${email}`}
                    style={{ color: "#556cd6", textDecoration: "none" }}
                  >
                    {email}
                  </a>
                </p>
                <hr
                  style={{ borderTop: "1px solid #eaeaea", margin: "20px 0" }}
                />
                <p style={{ fontSize: "12px", color: "#8898aa" }}>
                  This email was sent from devmarty.com.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
};

export default ContactMeTemplate;
