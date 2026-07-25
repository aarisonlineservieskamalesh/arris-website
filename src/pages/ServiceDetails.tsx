import { ArrowLeft, CheckCircle2, FileText, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "../components/common/Badge";
import { Button } from "../components/common/Button";
import { Section } from "../components/common/Section";
import { services } from "../components/Services/ServiceData";
import { serviceDetails } from "../components/Services/ServiceDetailsData";
import { useLanguage } from "../i18n";
import { WHATSAPP_URL } from "../lib/contact";

type ListCardProps = {
  title: string;
  items: string[];
  icon: typeof FileText;
};

function ListCard({ title, items, icon: Icon }: ListCardProps) {
  return (
    <div className="rounded-2xl border border-[rgba(37,99,235,0.18)] bg-[image:var(--card-gradient)] p-6 shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(226,129,46,0.12)] text-[var(--amber-dark)]">
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="text-2xl font-extrabold">{title}</h2>
      </div>

      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-7 text-[var(--slate)]">
            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--teal)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServiceDetails() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const service = services.find((item) => item.slug === slug);
  const detailSlug = service?.detailSlug ?? slug ?? "";
  const details = serviceDetails[detailSlug];

  if (!service) {
    return (
      <Section className="min-h-[60vh]">
        <div className="mx-auto max-w-3xl text-center">
          <Badge tone="amber">Service Details</Badge>
          <h1 className="mt-5 text-4xl font-extrabold">Service not found</h1>
          <Button to="/online-services#services" variant="secondary" className="mt-8">
            <ArrowLeft className="h-5 w-5" />
            Back to Services
          </Button>
        </div>
      </Section>
    );
  }

  const pageTitle = details?.title[language] ?? service.title;
  const secondaryTitle = details ? details.title[language === "en" ? "ta" : "en"] : service.description;
  const documents = details?.documents[language] ?? [
    "Contact us on WhatsApp for the required document checklist.",
  ];
  const uses = details?.uses[language] ?? [
    "Our team will guide you with the application and next steps.",
  ];

  return (
    <>
      <Section className="bg-[image:var(--page-gradient)] pb-10 pt-12 sm:pt-16">
        <Link
          to="/online-services#services"
          className="inline-flex items-center gap-2 font-bold text-[var(--amber-dark)] transition hover:text-[var(--blue)]"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Services
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Badge tone="amber">{service.category}</Badge>
            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold text-balance sm:text-5xl">
              {pageTitle}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--slate)]">
              {secondaryTitle}
            </p>
          </div>

          <div className="rounded-2xl border border-[rgba(37,99,235,0.18)] bg-[rgba(255,253,248,0.72)] p-6 shadow-[var(--shadow-soft)]">
            <p className="font-data text-xs uppercase tracking-[0.14em] text-[var(--teal)]">
              Online Service Support
            </p>
            <p className="mt-3 leading-8 text-[var(--slate)]">
              Share your documents through WhatsApp and our team will guide you with the application process.
            </p>
            <Button href={WHATSAPP_URL} variant="whatsapp" className="mt-5">
              <MessageCircle className="h-5 w-5" />
              WhatsApp Now
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-[var(--paper)] pt-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <ListCard title={language === "ta" ? "தேவையான ஆவணங்கள்" : "Documents Required"} items={documents} icon={FileText} />
          <ListCard title={language === "ta" ? "பயன்பாடுகள்" : "Uses"} items={uses} icon={CheckCircle2} />
        </div>
      </Section>
    </>
  );
}
