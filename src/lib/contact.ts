export const WHATSAPP_URL = "https://wa.me/918825564290";

/**
 * Builds a `tel:` href from a display-formatted phone string
 * (e.g. "+91 88255 64290" -> "tel:+918825564290").
 */
export function toTelHref(phone: string) {
  return `tel:${phone.replaceAll(" ", "")}`;
}
