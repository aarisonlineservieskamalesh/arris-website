import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Service",
    description: "Reliable and secure government service assistance.",
  },
  {
    icon: Clock3,
    title: "Fast Processing",
    description: "Quick application processing with timely updates.",
  },
  {
    icon: BadgeCheck,
    title: "Experienced Team",
    description: "Professional guidance for every government service.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Friendly support before, during and after your application.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Why Choose AARIS?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            We simplify government services with fast processing, expert
            guidance and trusted customer support.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-sky-300 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100">
                  <Icon className="h-8 w-8 text-sky-600" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;