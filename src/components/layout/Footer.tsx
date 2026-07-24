import { Link } from "react-router-dom";
import { Clock, FileText, Globe2, Home, MapPin, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "../../i18n";
import { WHATSAPP_URL, toTelHref } from "../../lib/contact";

const quickLinks = [
  { to: "/", key: "nav.home" },
  { to: "/businesses", key: "nav.businesses" },
  { to: "/online-services", key: "nav.onlineServices" },
  { to: "/mobiles", key: "nav.mobiles" },
  { to: "/home-appliances", key: "nav.homeAppliances" },
  { to: "/tours-travels", key: "nav.toursTravels" },
];

const services = ["Aadhaar Services", "PAN Card", "Ration Card", "Certificates", "Passport", "GST / MSME"];

const socialIconClass = "rounded-full bg-white/10 p-2 transition hover:bg-white/20";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-[image:var(--dark-gradient)] text-[var(--sky-soft)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/aaris-logo.jpeg"
                alt="AARIS Group"
                className="h-12 w-12 rounded-xl bg-white object-cover p-1.5"
              />
              <div>
                <h2 className="text-2xl font-extrabold">{t("common.brand")}</h2>
                <p className="font-data text-xs uppercase tracking-[0.14em] text-sky-100/65">{t("common.portal")}</p>
              </div>
            </div>

            <p className="mt-5 leading-8 text-sky-100/75">{t("footer.about")}</p>

            <div className="mt-5 flex gap-3">
              <Link to="/" aria-label="Visit homepage" className={socialIconClass}>
                <Globe2 size={18} />
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className={socialIconClass}>
                <MessageCircle size={18} />
              </a>
              <a href={toTelHref(t("common.phone"))} aria-label="Call us" className={socialIconClass}>
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-data text-sm uppercase tracking-[0.16em] text-sky-50">{t("footer.quickLinks")}</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="inline-flex items-center gap-2 text-sky-100/75 transition hover:text-[var(--sky)]">
                    <Home size={15} />
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-data text-sm uppercase tracking-[0.16em] text-sky-50">{t("footer.services")}</h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2 text-sky-100/75">
                  <FileText size={15} className="text-[var(--amber)]" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-data text-sm uppercase tracking-[0.16em] text-sky-50">{t("footer.contact")}</h3>
            <ul className="mt-5 space-y-4 text-sky-100/80">
              <li className="flex gap-3">
                <Phone size={18} className="text-[var(--amber)]" />
                <span className="font-data">{t("common.phone")}</span>
              </li>
              <li className="flex gap-3">
                <MessageCircle size={18} className="text-[#1FAA59]" />
                WhatsApp Available
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="text-[var(--amber)]" />
                {t("common.workingHours")}
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-[var(--amber)]" />
                {t("common.address")}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-sky-100/15 pt-6 text-center text-sm text-sky-100/55">
          © {new Date().getFullYear()} {t("common.brand")}. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
