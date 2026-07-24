import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Badge } from "../common/Badge";
import { Section } from "../common/Section";
import { useLanguage } from "../../i18n";
import { cx } from "../../lib/cx";

const faqs = [
  {
    question: "What documents are required for online services?",
    answer: "The required documents depend on the service. Once you contact us, we provide a complete checklist.",
  },
  {
    question: "How long does it take to complete my application?",
    answer: "Processing time varies by department. We submit quickly and keep you updated on the status.",
  },
  {
    question: "Can I send my documents through WhatsApp?",
    answer: "Yes. You can securely send documents through WhatsApp or visit our office directly.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, UPI, bank transfer, Google Pay, PhonePe and Paytm.",
  },
];

export default function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section className="bg-[var(--paper)]">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <Badge tone="amber">{t("online.faq")}</Badge>
          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">{t("online.faq")}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-[var(--slate)]">{t("online.faqDesc")}</p>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div key={faq.question} className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--cream)]">
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <h3 className="font-bold">{faq.question}</h3>
                  <ChevronDown className={cx("shrink-0 transition", isOpen && "rotate-180")} />
                </button>
                <div className={cx("grid transition-all duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-8 text-[var(--slate)]">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}