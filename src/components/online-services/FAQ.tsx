import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What documents are required for online services?",
    answer:
      "The required documents depend on the service. Once you contact us, we'll provide a complete checklist and guide you through the process.",
  },
  {
    question: "How long does it take to complete my application?",
    answer:
      "Processing time varies depending on the government department. We submit your application quickly and keep you updated on its status.",
  },
  {
    question: "Can I send my documents through WhatsApp?",
    answer:
      "Yes. You can securely send your documents through WhatsApp or visit our office directly.",
  },
  {
    question: "How can I track my application?",
    answer:
      "Our team continuously tracks your application and shares updates via WhatsApp or phone until it is completed.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Cash, UPI, Bank Transfer, Google Pay, PhonePe, and Paytm.",
  },
  {
    question: "Do I need to visit your office?",
    answer:
      "Not always. Many services can be completed online. If your presence is required for biometric verification or signatures, we'll inform you in advance.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-white py-24">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(#d7e4f8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            Frequently Asked Questions
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-8 text-center text-5xl font-black text-slate-900">
          Got{" "}
          <span className="italic text-blue-600">
            Questions?
          </span>{" "}
          We've Got Answers
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-gray-500">
          Find answers to the most common questions about our online services.
        </p>

        {/* FAQ */}
        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-gray-600 leading-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}