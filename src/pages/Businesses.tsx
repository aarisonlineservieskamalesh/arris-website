import { Link } from "react-router-dom";
import {
  ArrowRight,
  FileText,
  Smartphone,
  Home,
  Plane,
} from "lucide-react";

const businesses = [
  {
    title: "AARIS Online Services",
    icon: FileText,
    path: "/online-services",
    desc: "Government, Certificates & Digital Services",
    color: "from-sky-500 to-cyan-500",
  },
  {
    title: "AARIS Mobiles",
    icon: Smartphone,
    path: "/mobiles",
    desc: "Mobiles, Accessories & Repairs",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "AARIS Home Appliances",
    icon: Home,
    path: "/home-appliances",
    desc: "TV, AC, Fridge, Washing Machine & More",
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "AARIS Tours & Travels",
    icon: Plane,
    path: "/tours-travels",
    desc: "Flight, Train, Bus & Holiday Packages",
    color: "from-sky-400 to-blue-500",
  },
];

const Businesses = () => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100 py-24">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-sky-300/30 blur-[130px]" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-300/30 blur-[130px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff70_1px,transparent_1px),linear-gradient(to_bottom,#ffffff70_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full border border-sky-300 bg-white px-5 py-2 text-sm font-semibold text-sky-700 shadow-md">
            Welcome to AARIS
          </span>

          <h1 className="mt-6 text-5xl font-black text-slate-900 lg:text-6xl">
            Explore Our Businesses
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Choose a business below to explore our services. We provide
            government services, mobile solutions, home appliances, and travel
            services—all under one trusted brand.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {businesses.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                to={item.path}
                className="group relative overflow-hidden rounded-[30px] border border-sky-100 bg-white/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-sky-300 hover:shadow-[0_30px_70px_rgba(14,165,233,0.20)]"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-sky-100/0 via-sky-100/40 to-cyan-100/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">

                  {/* Icon */}

                  <div
                    className={`mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${item.color} shadow-xl`}
                  >
                    <Icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Title */}

                  <h2 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h2>

                  {/* Description */}

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.desc}
                  </p>

                  {/* Button */}

                  <div className="mt-8 inline-flex items-center gap-2 font-semibold text-sky-600 transition-all group-hover:gap-4">
                    Visit Business
                    <ArrowRight className="h-5 w-5" />
                  </div>

                </div>

              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Businesses;