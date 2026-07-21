import { badges, services } from "./HeroData";
import ServiceCard from "./HeroServiceCard";
import {
  MapPin,
  MessageCircle,
  Search,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100 min-h-screen">

      {/* Background Blur */}
      <div className="absolute -top-40 -left-32 h-[500px] w-[500px] rounded-full bg-sky-300/30 blur-[130px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-300/30 blur-[130px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff70_1px,transparent_1px),linear-gradient(to_bottom,#ffffff70_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative container mx-auto grid min-h-screen items-center gap-20 px-6 py-24 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-white px-5 py-2 shadow-lg">

            <Sparkles className="h-5 w-5 text-sky-600" />

            <span className="font-medium text-sky-700">
              Trusted Government Service Center
            </span>

          </div>

          {/* Badges */}

          <div className="mt-8 flex flex-wrap gap-3">

            {badges.map((item) => (

              <div
                key={item.text}
                className="flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >

                <item.icon
                  size={16}
                  className="text-sky-600"
                />

                <span className="text-sm font-medium text-slate-700">
                  {item.text}
                </span>

              </div>

            ))}

          </div>

          {/* Heading */}

          <h1 className="mt-10 text-5xl font-black leading-tight text-slate-900 lg:text-7xl">

            All Government

            <span className="block text-sky-600">
              Online Services
            </span>

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">

            Aadhaar • Ration Card • Passport • Certificates • MSME • GST •
            FSSAI • Patta • Website Development and 55+ Online Services under
            one roof.

          </p>

          {/* Address */}

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-sky-100 bg-white p-4 shadow-lg w-fit">

            <div className="rounded-xl bg-sky-100 p-3">

              <MapPin className="text-sky-600" />

            </div>

            <div>

              <p className="font-semibold text-slate-800">

                AARIS Online Services

              </p>

              <p className="text-sm text-slate-500">

                No.3 Pondy Tindivanam Main Road,
                Thiruchitrambalam Kootroad.

              </p>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <button className="rounded-2xl bg-sky-500 px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-sky-600">

              <MessageCircle className="mr-2 inline h-5 w-5" />

              WhatsApp Us

            </button>

            <button className="rounded-2xl border border-sky-200 bg-white px-8 py-4 font-semibold text-sky-700 shadow-lg transition hover:-translate-y-1 hover:bg-sky-50">

              <Search className="mr-2 inline h-5 w-5" />

              Browse Services

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="space-y-5">

          {services.map((item) => (

            <ServiceCard
              key={item.title}
              {...item}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default Hero;