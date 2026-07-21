import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100">
      {/* Animated Background */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-[120px] animate-pulse"></div>

      <div className="absolute top-40 right-0 h-[450px] w-[450px] rounded-full bg-cyan-300/20 blur-[120px] animate-pulse delay-1000"></div>

      <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-sky-300/20 blur-[100px]"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-16 px-6 py-24 lg:flex-row">
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            One Brand.
            <br />
            <span className="bg-gradient-to-r from-blue-700 via-cyan-500 to-sky-400 bg-clip-text text-transparent">
              Multiple Solutions.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">
            Delivering premium Government Online Services,
            Mobile Solutions, Tours & Travels,
            Home Appliances and Digital Business Services
            with trust, innovation and customer satisfaction.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
          

<Link
  to="/businesses"
  className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition hover:scale-105"
>
  Explore Businesses →
</Link>

            <button className="rounded-full border border-white/50 bg-white/70 px-8 py-4 font-semibold shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white">
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          {/* Main Glass Card */}
          <div className="relative h-[520px] w-[520px] overflow-hidden rounded-[40px] border border-white/40 bg-white/20 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.15)] backdrop-blur-3xl">
            {/* Glass Layers */}
            <div className="absolute inset-6 rounded-3xl border border-white/30 bg-white/30 backdrop-blur-xl"></div>

            <div className="absolute inset-12 rounded-3xl border border-white/20 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-2xl"></div>

            {/* Center Circle */}
            <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-white/30 shadow-2xl backdrop-blur-3xl"></div>

            {/* Floating Shapes */}
            <div className="absolute left-10 top-10 h-20 w-20 rounded-2xl border border-white/30 bg-white/30 backdrop-blur-xl shadow-xl"></div>

            <div className="absolute right-10 top-16 h-16 w-16 rounded-xl border border-white/30 bg-white/25 backdrop-blur-xl shadow-xl"></div>

            <div className="absolute bottom-20 left-14 h-24 w-24 rounded-3xl border border-white/30 bg-white/25 backdrop-blur-xl shadow-xl"></div>

            <div className="absolute bottom-12 right-12 h-16 w-16 rounded-full border border-white/30 bg-white/30 backdrop-blur-xl shadow-xl"></div>

            <div className="absolute left-1/2 top-24 h-3 w-32 -translate-x-1/2 rounded-full bg-white/50 blur-sm"></div>

            <div className="absolute left-1/2 bottom-24 h-3 w-40 -translate-x-1/2 rounded-full bg-white/40 blur-sm"></div>
          </div>

          {/* Floating Cards */}
          <div className="absolute -left-10 top-10 rounded-2xl bg-white px-5 py-4 shadow-2xl transition hover:-translate-y-2">
            📄 <span className="font-semibold">Gov. Services</span>
          </div>

          <div className="absolute -right-10 top-28 rounded-2xl bg-white px-5 py-4 shadow-2xl transition hover:-translate-y-2">
            📱 <span className="font-semibold">Mobile Solutions</span>
          </div>

          <div className="absolute bottom-20 -left-8 rounded-2xl bg-white px-5 py-4 shadow-2xl transition hover:-translate-y-2">
            ✈️ <span className="font-semibold">Tours & Travels</span>
          </div>

          <div className="absolute bottom-4 right-8 rounded-2xl bg-white px-5 py-4 shadow-2xl transition hover:-translate-y-2">
            🏠 <span className="font-semibold">Home Appliances</span>
          </div>

          {/* Experience Badge */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 text-white shadow-2xl">
            ⭐ Trusted Since 2015
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;