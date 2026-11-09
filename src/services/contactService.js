const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL?.trim();

export const isContactConfigured = Boolean(webhookUrl);

export async function sendContactMessage({ name, email, message, website = '' }) {
  if (!webhookUrl) {
    throw new Error('Contact form is not configured yet. Please email me directly.');
  }

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 12_000);

  let response;
  try {
    response = await fetch(webhookUrl, {
      method: 'POST',
      // URL-encoded POST avoids the JSON CORS preflight for this public form.
      body: new URLSearchParams({ name, email, message, website }),
      credentials: 'omit',
      signal: controller.signal,
    });
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('The contact service took too long to respond. Please email me directly.');
    }
    throw new Error('Could not reach the contact service. Please email me directly.');
  } finally {
    window.clearTimeout(timeoutId);
  }

  if (!response.ok) {
    throw new Error('Your message could not be sent. Please email me directly.');
  }
}
