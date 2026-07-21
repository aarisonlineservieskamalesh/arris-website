import {
  Phone,
  MessageCircle,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 py-24 text-white">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-semibold uppercase tracking-widest">
            <span className="h-2.5 w-2.5 rounded-full bg-green-400"></span>
            Contact Us Today
          </div>

          {/* Heading */}
          <h2 className="mt-8 text-4xl font-black leading-tight md:text-5xl">
            Ready to Apply for Your
            <span className="block text-cyan-200">
              Government Online Service?
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Get fast, secure, and hassle-free assistance for Aadhaar, PAN Card,
            Passport, Driving Licence, Community Certificate, Income
            Certificate, Ration Card, and many more government services.
          </p>

          {/* Contact Numbers */}
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <a
              href="tel:+918825564290"
              className="flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-5 text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Phone size={22} />
              <div className="text-left">
                <p className="text-sm text-gray-500">Call Us</p>
                <p className="font-bold">+91 88255 64290</p>
              </div>
            </a>

            <a
              href="tel:+917695937030"
              className="flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-5 text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Phone size={22} />
              <div className="text-left">
                <p className="text-sm text-gray-500">Call Us</p>
                <p className="font-bold">+91 76959 37030</p>
              </div>
            </a>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/918825564290"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-green-600"
            >
              <MessageCircle size={20} />
              WhatsApp Now
            </a>

            <a
              href="tel:+918825564290"
              className="inline-flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold transition-all duration-300 hover:bg-white hover:text-blue-700"
            >
              <Phone size={20} />
              Call Now
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Address Card */}
          <div className="mx-auto mt-14 max-w-xl rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-white/20 p-3">
                <MapPin size={26} />
              </div>

              <div className="text-left">
                <h3 className="text-xl font-bold text-white">
                  AARIS GROUP
                </h3>

                <p className="mt-2 leading-7 text-blue-100">
                  Azad Nagar,
                  <br />
                  Suramangalam,
                  <br />
                  Salem – 636005,
                  <br />
                  Tamil Nadu,
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <p className="mt-10 text-blue-100">
            📞 Call us today or send a WhatsApp message to get started.
            Our team is ready to assist you with all government online
            services.
          </p>
        </div>
      </div>
    </section>
  );
}