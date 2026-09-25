const allowedIssues = new Set(["Connection Issues", "Wallet Issues", "Other Issues"]);

const json = (body: object, status = 200) => Response.json(body, { status });

const escapeHtml = (value: string) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

export default async (request: Request) => {
  if (request.method !== "POST") return json({ message: "Method not allowed." }, 405);

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 12_000) return json({ message: "Request is too large." }, 413);

  let body: { wallet?: unknown; issue?: unknown; description?: unknown; website?: unknown };
  try {
    body = await request.json();
  } catch {
    return json({ message: "Invalid request." }, 400);
  }

  if (body.website) return json({ message: "Report received." });
  if (typeof body.wallet !== "string" || typeof body.issue !== "string" || typeof body.description !== "string") return json({ message: "Complete all required fields." }, 400);

  const wallet = body.wallet.trim().slice(0, 80);
  const issue = body.issue.trim();
  const description = body.description.trim();
  if (!wallet || !allowedIssues.has(issue) || description.length < 10 || description.length > 2000) return json({ message: "Check the report details and try again." }, 400);

  const apiKey = process.env.RESEND_API_KEY;
  const surveyEmail = process.env.SURVEY_EMAIL;
  const secondarySurveyEmail = process.env.SURVEY_EMAIL_SECONDARY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "LayerBank Support <onboarding@resend.dev>";
  if (!apiKey || !surveyEmail || !secondarySurveyEmail) {
    console.error("Missing RESEND_API_KEY, SURVEY_EMAIL, or SURVEY_EMAIL_SECONDARY");
    return json({ message: "Email service is not configured." }, 503);
  }

  const emailPayload = {
    from: fromEmail,
    subject: `Wallet support survey: ${issue}`,
    html: `<h2>Wallet connection report</h2><p><strong>Wallet:</strong> ${escapeHtml(wallet)}</p><p><strong>Issue:</strong> ${escapeHtml(issue)}</p><p><strong>Description:</strong></p><p style="white-space:pre-wrap">${escapeHtml(description)}</p>`,
    text: `Wallet: ${wallet}\nIssue: ${issue}\n\nDescription:\n${description}`,
  };

  const responses = await Promise.all(
    [surveyEmail, secondarySurveyEmail].map((recipient) => fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ ...emailPayload, to: [recipient] }),
    })),
  );

  const failedResponses = responses.filter((response) => !response.ok);
  if (failedResponses.length > 0) {
    const errors = await Promise.all(failedResponses.map(async (response) => ({ status: response.status, body: await response.text() })));
    console.error("One or more Resend requests failed", errors);
    return json({ message: "Unable to send the report right now." }, 502);
  }
  return json({ message: "Report sent." });
};

export const config = { path: "/api/send-survey" };
