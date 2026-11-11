/**
 * Contact Number Configuration for Crux Adventure
 *
 * Update these constants with the company's official business numbers.
 *
 * WhatsApp Number format:
 *   Country code followed by digits without '+' symbol, spaces, or dashes.
 *   Example: '911942804211' (for India +91 194 280 4211)
 *
 * Telephone Number format:
 *   Standard international format starting with '+' followed by country code and number.
 *   Example: '+911942804211'
 *
 * NOTE: Both numbers are currently left empty awaiting official provision.
 * When empty, the floating contact buttons indicate configuration is pending
 * rather than executing broken actions.
 */

export interface ContactConfig {
  /** Company WhatsApp number in international format without '+' (e.g. '91XXXXXXXXXX') */
  whatsappNumber: string;
  /** Company telephone number in international format with '+' (e.g. '+91XXXXXXXXXX') */
  phoneNumber: string;
  /** Prefilled inquiry greeting for WhatsApp */
  whatsappDefaultMessage: string;
}

export const CONTACT_CONFIG: ContactConfig = {
  // Awaiting company WhatsApp number from client
  whatsappNumber: '',

  // Awaiting company telephone number from client
  phoneNumber: '',

  // Prefilled message for new visitor inquiries
  whatsappDefaultMessage: 'Hello, I would like to enquire about a Kashmir trip.',
};

/**
 * Validates whether a phone number string has been properly configured.
 */
export function isNumberConfigured(value: string | undefined): boolean {
  if (!value) return false;
  const digitsOnly = value.replace(/[^0-9]/g, '');
  // Legitimate phone number with country code has at least 7 digits
  return digitsOnly.length >= 7;
}

/**
 * Returns the formatted WhatsApp URL if configured, otherwise null.
 */
export function getWhatsAppUrl(): string | null {
  if (!isNumberConfigured(CONTACT_CONFIG.whatsappNumber)) {
    return null;
  }
  const cleanNumber = CONTACT_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(CONTACT_CONFIG.whatsappDefaultMessage);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

/**
 * Returns the formatted Telephone link if configured, otherwise null.
 */
export function getPhoneUrl(): string | null {
  if (!isNumberConfigured(CONTACT_CONFIG.phoneNumber)) {
    return null;
  }
  const digits = CONTACT_CONFIG.phoneNumber.replace(/[^0-9]/g, '');
  return `tel:+${digits}`;
}
