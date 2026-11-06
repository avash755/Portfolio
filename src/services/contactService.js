const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL?.trim();

export async function sendContactMessage({ name, email, message }) {
  if (!webhookUrl) {
    throw new Error('Contact form is not configured yet. Please email me directly.');
  }

  let response;
  try {
    response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });
  } catch {
    throw new Error('Could not reach the contact service. Please email me directly.');
  }

  if (!response.ok) {
    throw new Error('Your message could not be sent. Please email me directly.');
  }
}
