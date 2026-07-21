import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Home,
  FileText,
  Star,
  ListChecks,
  Image,
  HelpCircle,
  Mail,
  CreditCard,
  IdCard,
  GraduationCap,
  Landmark,
  BadgeCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <div className="flex items-center gap-4">

              <img
                src="/logo.png"
                alt="AARIS GROUP"
                className="h-14 w-14 rounded-xl bg-slate-800 p-2"
              />

              <div>
                <h2 className="text-3xl font-bold text-white">
                  AARIS GROUP
                </h2>

                <p className="text-sm text-blue-400">
                  Online Services
                </p>
              </div>
            </div>

            <p className="mt-6 leading-8">
              Your trusted Digital Service Hub in Salem, Tamil Nadu.
              Fast, reliable and hassle-free government online
              services with professional support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li className="flex items-center gap-3">
                <Home size={18} className="text-yellow-400" />
                Home
              </li>

              <li className="flex items-center gap-3">
                <FileText size={18} className="text-yellow-400" />
                All Services
              </li>

              <li className="flex items-center gap-3">
                <ListChecks size={18} className="text-yellow-400" />
                How It Works
              </li>

              <li className="flex items-center gap-3">
                <Star size={18} className="text-yellow-400" />
                Why Choose Us
              </li>

              <li className="flex items-center gap-3">
                <Image size={18} className="text-yellow-400" />
                Reviews
              </li>

              <li className="flex items-center gap-3">
                <HelpCircle size={18} className="text-yellow-400" />
                FAQ
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-400" />
                Contact
              </li>

            </ul>
          </div>

          {/* Popular Services */}
          <div>

            <h3 className="mb-6 font-bold uppercase tracking-wider text-white">
              Popular Services
            </h3>

            <ul className="space-y-4">

              <li className="flex gap-3">
                <IdCard size={18} className="text-yellow-400" />
                Aadhaar Update
              </li>

              <li className="flex gap-3">
                <CreditCard size={18} className="text-yellow-400" />
                PAN Card
              </li>

              <li className="flex gap-3">
                <BadgeCheck size={18} className="text-yellow-400" />
                Passport
              </li>

              <li className="flex gap-3">
                <GraduationCap size={18} className="text-yellow-400" />
                First Graduate Certificate
              </li>

              <li className="flex gap-3">
                <Landmark size={18} className="text-yellow-400" />
                Community Certificate
              </li>

              <li className="flex gap-3">
                <FileText size={18} className="text-yellow-400" />
                Income Certificate
              </li>

              <li className="flex gap-3">
                <FileText size={18} className="text-yellow-400" />
                Birth Certificate
              </li>

              <li className="flex gap-3">
                <FileText size={18} className="text-yellow-400" />
                Driving Licence
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-6 font-bold uppercase tracking-wider text-white">
              Contact
            </h3>

            <ul className="space-y-5">

              <li className="flex gap-3">
                <Phone size={18} className="text-yellow-400" />
                +91 88255 64290
              </li>

              <li className="flex gap-3">
                <Phone size={18} className="text-yellow-400" />
                +91 76959 37030
              </li>

              <li className="flex gap-3">
                <MessageCircle size={18} className="text-green-400" />
                WhatsApp Available
              </li>

              <li className="flex gap-3">
                <Clock size={18} className="text-yellow-400" />
                Mon - Sat : 9:30 AM - 8:00 PM
              </li>

              <li className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-yellow-400"
                />

                <span>
                  <strong>AARIS GROUP</strong>
                  <br />
                  Azad Nagar,
                  <br />
                  Suramangalam,
                  <br />
                  Salem - 636005,
                  <br />
                  Tamil Nadu, India
                </span>

              </li>

            </ul>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">
            AARIS GROUP
          </span>
          . All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}