import { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  Building2,
  ChevronRight,
  Globe2,
  Headphones,
  Home,
  Menu,
  MessageCircle,
  Phone,
  Plane,
  Smartphone,
  WashingMachine,
  X,
  FileText,
} from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

import { useLanguage } from "../../i18n";
import { cx } from "../../lib/cx";
import { WHATSAPP_URL, toTelHref } from "../../lib/contact";

/* =========================================================
   NAVIGATION
========================================================= */

const NAV_LINKS = [
  {
    to: "/",
    key: "nav.home",
    icon: Home,
  },
  {
    to: "/businesses",
    key: "nav.businesses",
    icon: Building2,
  },
  {
    to: "/online-services",
    key: "nav.onlineServices",
    icon: FileText,
  },
  {
    to: "/mobiles",
    key: "nav.mobiles",
    icon: Smartphone,
  },
  {
    to: "/home-appliances",
    key: "nav.homeAppliances",
    icon: WashingMachine,
  },
  {
    to: "/tours-travels",
    key: "nav.toursTravels",
    icon: Plane,
  },
  {
    to: "#contact",
    key: "nav.contact",
    icon: Headphones,
  },
] as const;

/* =========================================================
   LANGUAGE BUTTON
========================================================= */

function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label="Change language"
      className="
        group
        inline-flex
        h-10
        items-center
        justify-center
        gap-2
        rounded-xl
        border
        border-blue-100
        bg-white
        px-3.5
        text-xs
        font-bold
        text-slate-700
        shadow-sm
        transition-all
        duration-300

        hover:border-blue-300
        hover:bg-blue-50
        hover:text-blue-700
        hover:shadow-md

        focus:outline-none
        focus:ring-2
        focus:ring-blue-500/20
      "
    >
      <Globe2
        size={16}
        className="
          text-blue-600
          transition-transform
          duration-300
          group-hover:rotate-12
        "
      />

      {language === "en" ? "EN" : "தமிழ்"}
    </button>
  );
}

/* =========================================================
   DESKTOP NAVIGATION
========================================================= */

type DesktopNavProps = {
  closeDrawer?: () => void;
};

function DesktopNavigation({ closeDrawer }: DesktopNavProps) {
  const { t } = useLanguage();

  return (
    <nav
      className="
        hidden
        items-center
        gap-1
        xl:flex
      "
      aria-label="Main navigation"
    >
      {NAV_LINKS.map((link) => {
        if (link.to.startsWith("#")) {
          return (
            <a
              key={link.key}
              href={link.to}
              onClick={closeDrawer}
              className="
                relative
                rounded-xl
                px-3
                py-2.5
                text-[13px]
                font-semibold
                text-slate-600
                transition-all
                duration-300

                hover:bg-blue-50
                hover:text-blue-700
              "
            >
              {t(link.key)}
            </a>
          );
        }

        return (
          <NavLink
            key={link.key}
            to={link.to}
            className={({ isActive }) =>
              cx(
                `
                  relative
                  rounded-xl
                  px-3
                  py-2.5
                  text-[13px]
                  font-semibold
                  transition-all
                  duration-300
                `,
                isActive
                  ? `
                    bg-blue-50
                    text-blue-700

                    after:absolute
                    after:bottom-1
                    after:left-1/2
                    after:h-[2px]
                    after:w-5
                    after:-translate-x-1/2
                    after:rounded-full
                    after:bg-blue-600
                  `
                  : `
                    text-slate-600
                    hover:bg-blue-50
                    hover:text-blue-700
                  `,
              )
            }
          >
            {t(link.key)}
          </NavLink>
        );
      })}
    </nav>
  );
}

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

type MobileNavigationProps = {
  onNavigate: () => void;
};

function MobileNavigation({ onNavigate }: MobileNavigationProps) {
  const { t } = useLanguage();

  return (
    <nav
      className="
        flex-1
        overflow-y-auto
        px-4
        py-5
      "
      aria-label="Mobile navigation"
    >
      <div className="mb-4 px-2">
        <p
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.22em]
            text-slate-400
          "
        >
          Main Menu
        </p>
      </div>

      <div className="space-y-1.5">
        {NAV_LINKS.map((link) => {
          const Icon = link.icon;

          /* CONTACT HASH LINK */

          if (link.to.startsWith("#")) {
            return (
              <a
                key={link.key}
                href={link.to}
                onClick={onNavigate}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  px-3
                  py-3
                  text-sm
                  font-semibold
                  text-slate-700
                  transition-all
                  duration-200

                  hover:bg-blue-50
                  hover:text-blue-700
                "
              >
                <span className="flex items-center gap-3">
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-50
                      text-blue-600
                      transition-all
                      duration-200

                      group-hover:bg-blue-100
                    "
                  >
                    <Icon size={18} />
                  </span>

                  {t(link.key)}
                </span>

                <ChevronRight
                  size={17}
                  className="
                    text-slate-400
                    transition-all
                    duration-200

                    group-hover:translate-x-1
                    group-hover:text-blue-600
                  "
                />
              </a>
            );
          }

          /* ROUTE LINKS */

          return (
            <NavLink
              key={link.key}
              to={link.to}
              onClick={onNavigate}
              className={({ isActive }) =>
                cx(
                  `
                    group
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-3
                    py-3
                    text-sm
                    font-semibold
                    transition-all
                    duration-200
                  `,
                  isActive
                    ? `
                      bg-blue-600
                      text-white
                      shadow-[0_8px_22px_rgba(37,99,235,0.22)]
                    `
                    : `
                      text-slate-700
                      hover:bg-blue-50
                      hover:text-blue-700
                    `,
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span className="flex items-center gap-3">
                    <span
                      className={cx(
                        `
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          transition-all
                          duration-200
                        `,
                        isActive
                          ? "bg-white/15 text-white"
                          : "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
                      )}
                    >
                      <Icon size={18} />
                    </span>

                    {t(link.key)}
                  </span>

                  <ChevronRight
                    size={17}
                    className={cx(
                      `
                        transition-all
                        duration-200
                        group-hover:translate-x-1
                      `,
                      isActive ? "text-white/80" : "text-slate-400",
                    )}
                  />
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

/* =========================================================
   ACTION BUTTONS
========================================================= */

type ActionButtonsProps = {
  phone: string;
  mobile?: boolean;
};

function ActionButtons({
  phone,
  mobile = false,
}: ActionButtonsProps) {
  const { t } = useLanguage();

  const telHref = toTelHref(phone);

  if (mobile) {
    return (
      <div className="grid gap-2.5">
        {/* CALL */}

        <a
          href={telHref}
          className="
            flex
            h-12
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-blue-200
            bg-white
            text-sm
            font-semibold
            text-blue-700
            transition-all
            duration-300

            hover:border-blue-300
            hover:bg-blue-50
          "
        >
          <Phone size={18} />

          {t("nav.call")}
        </a>

        {/* WHATSAPP */}

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="
            flex
            h-12
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-green-600
            text-sm
            font-semibold
            text-white
            shadow-[0_10px_25px_rgba(22,163,74,0.22)]
            transition-all
            duration-300

            hover:bg-green-700
          "
        >
          <MessageCircle size={18} />

          {t("nav.whatsapp")}
        </a>
      </div>
    );
  }

  return (
    <>
      {/* DESKTOP CALL */}

      <a
        href={telHref}
        className="
          group
          inline-flex
          h-10
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-blue-200
          bg-white
          px-4
          text-[13px]
          font-semibold
          text-slate-800
          shadow-sm
          transition-all
          duration-300

          hover:border-blue-300
          hover:bg-blue-50
          hover:text-blue-700
          hover:shadow-md
        "
      >
        <Phone
          size={16}
          className="text-blue-600"
        />

        {t("nav.call")}
      </a>

      {/* DESKTOP WHATSAPP */}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="
          group
          inline-flex
          h-10
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-green-600
          px-4
          text-[13px]
          font-semibold
          text-white
          shadow-[0_8px_22px_rgba(22,163,74,0.22)]
          transition-all
          duration-300

          hover:-translate-y-0.5
          hover:bg-green-700
          hover:shadow-[0_12px_28px_rgba(22,163,74,0.30)]
        "
      >
        <MessageCircle
          size={16}
          className="
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />

        {t("nav.whatsapp")}
      </a>
    </>
  );
}

/* =========================================================
   HEADER
========================================================= */

export function Header() {
  const { t } = useLanguage();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const tickingRef = useRef(false);

  /* SCROLL HEADER EFFECT */

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;

      tickingRef.current = true;

      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 25);
        tickingRef.current = false;
      });
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* DISABLE BODY SCROLL */

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* ESC CLOSE */

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const openDrawer = useCallback(() => {
    setOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setOpen(false);
  }, []);

  const phone = t("common.phone");

  return (
    <header
      className={cx(
        `
          sticky
          top-0
          z-50
          w-full
          border-b
          transition-all
          duration-300
        `,
        open
          ? `
            border-blue-100/80
            bg-white
            shadow-[0_10px_35px_rgba(15,23,42,0.08)]
          `
          : scrolled
          ? `
            border-blue-100/80
            bg-white/95
            shadow-[0_10px_35px_rgba(15,23,42,0.08)]
            backdrop-blur-xl
          `
          : `
            border-transparent
            bg-white/85
            backdrop-blur-lg
          `,
      )}
    >
      {/* ==================================================
          MAIN HEADER
      ================================================== */}

      <div
        className={cx(
          `
            mx-auto
            flex
            max-w-[1440px]
            items-center
            justify-between
            px-4
            transition-all
            duration-300

            sm:px-6
            lg:px-8
          `,
          scrolled ? "h-[70px]" : "h-[82px]",
        )}
      >
        {/* LOGO */}

        <Link
          to="/"
          className="
            group
            flex
            min-w-fit
            items-center
            gap-3
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-blue-100
              bg-gradient-to-br
              from-white
              to-blue-50
              shadow-sm
              transition-all
              duration-300

              group-hover:-translate-y-0.5
              group-hover:border-blue-200
              group-hover:shadow-md
            "
          >
            <img
              src="/aaris-logo.jpeg"
              alt="AARIS Group"
              className="
                h-9
                w-9
                object-contain
              "
            />
          </div>

          <div>
            <h2
              className="
                text-[18px]
                font-extrabold
                leading-none
                tracking-[-0.025em]
                text-slate-900
              "
            >
              {t("common.brand")}
            </h2>

            <p
              className="
                mt-1.5
                font-data
                text-[9px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-slate-500
              "
            >
              {t("common.portal")}
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}

        <DesktopNavigation />

        {/* DESKTOP BUTTONS */}

        <div className="hidden items-center gap-2 xl:flex">
          <LanguageSwitch />

          <ActionButtons
            phone={phone}
          />
        </div>

        {/* MOBILE MENU */}

        <button
          type="button"
          onClick={openDrawer}
          aria-label="Open navigation menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="
            inline-flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-blue-100
            bg-white
            text-slate-700
            shadow-sm
            transition-all
            duration-300

            hover:border-blue-300
            hover:bg-blue-50
            hover:text-blue-700

            xl:hidden
          "
        >
          <Menu size={21} />
        </button>
      </div>

      {/* ==================================================
          MOBILE DRAWER
      ================================================== */}

      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}

            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeDrawer}
              aria-label="Close navigation"
              className="
                fixed
                inset-0
                z-40
                bg-slate-950/40
                backdrop-blur-[3px]

                xl:hidden
              "
            />

            {/* DRAWER */}

            <motion.aside
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 32,
              }}
              className="
                fixed
                bottom-0
                right-0
                top-0
                z-50
                flex
                w-full
                flex-col
                overflow-hidden
                border-blue-100
                bg-white
                shadow-[-20px_0_60px_rgba(15,23,42,0.18)]

                sm:w-[88vw]
                sm:max-w-[380px]
                sm:border-l

                xl:hidden
              "
            >
              {/* DRAWER HEADER */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-slate-100
                  px-5
                  py-5
                "
              >
                <Link
                  to="/"
                  onClick={closeDrawer}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-50
                    "
                  >
                    <img
                      src="/aaris-logo.jpeg"
                      alt="AARIS Group"
                      className="h-7 w-7"
                    />
                  </div>

                  <div>
                    <div
                      className="
                        text-sm
                        font-extrabold
                        text-slate-900
                      "
                    >
                      {t("common.brand")}
                    </div>

                    <div
                      className="
                        mt-1
                        text-[8px]
                        uppercase
                        tracking-[0.18em]
                        text-slate-500
                      "
                    >
                      {t("common.portal")}
                    </div>
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={closeDrawer}
                  aria-label="Close menu"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-200
                    text-slate-600
                    transition

                    hover:border-blue-300
                    hover:bg-blue-50
                    hover:text-blue-700
                  "
                >
                  <X size={19} />
                </button>
              </div>

              {/* ⭐ MOBILE NAVBAR GOES HERE */}

              <MobileNavigation
                onNavigate={closeDrawer}
              />

              {/* MOBILE FOOTER */}

              <div
                className="
                  border-t
                  border-slate-100
                  bg-slate-50/80
                  p-5
                "
              >
                <div className="mb-3">
                  <LanguageSwitch />
                </div>

                <ActionButtons
                  phone={phone}
                  mobile
                />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
