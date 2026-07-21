import {
  MessageCircle,
  FolderOpen,
  Monitor,
  SearchCheck,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Contact Us",
    description:
      "Call or WhatsApp us with the service you need. We'll guide you on the required documents and process.",
  },
  {
    icon: FolderOpen,
    title: "Submit Documents",
    description:
      "Bring or send your documents. We verify everything and provide a complete checklist before submission.",
  },
  {
    icon: Monitor,
    title: "We Apply Online",
    description:
      "Our experts submit your application accurately through the official government portal.",
  },
  {
    icon: SearchCheck,
    title: "Track Application",
    description:
      "We continuously monitor your application status and keep you updated until it is approved.",
  },
  {
    icon: CheckCircle2,
    title: "Receive Certificate",
    description:
      "Collect your certificate or acknowledgement digitally or in person. Fast, secure, and hassle-free.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(#d6e3f3 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            HOW IT WORKS
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-8 text-center text-5xl font-black text-slate-900">
          Get Your Service in{" "}
          <span className="italic text-blue-600">
            5 Simple Steps
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-gray-500">
          No confusion, no running around. We handle everything for you.
        </p>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Horizontal Line */}
          <div className="absolute left-0 right-0 top-16 hidden h-1 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 lg:block"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Circle */}
                  <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-blue-100 shadow-xl ring-8 ring-blue-50">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg">
                      <Icon size={40} strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-8 text-3xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 max-w-xs text-lg leading-8 text-gray-500">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}