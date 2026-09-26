export interface ContactFormPayload {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  transactionalConsent: boolean;
  marketingConsent: boolean;
}

export interface SubmitContactFormResult {
  success: boolean;
  error?: string;
}

/**
 * TODO(client): wire this up to the real form-submission endpoint (e.g. a
 * CRM webhook, serverless function, or email API) once one is provided.
 * Currently there is no backend configured, so every submission fails with
 * a clear message instead of faking a success state.
 */
export async function submitContactForm(
  _payload: ContactFormPayload,
): Promise<SubmitContactFormResult> {
  return {
    success: false,
    error:
      "This form isn't connected to a submission service yet. Please call or email us directly for now.",
  };
}
