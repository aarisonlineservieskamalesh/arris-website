import { Bus, Plane, Train, Umbrella } from "lucide-react";
import { CategoryPage } from "../components/common/CategoryPage";
import { useLanguage } from "../i18n";

const items = [
  { icon: Bus, title: "Bus Booking", desc: "Local and long-distance bus booking support." },
  { icon: Train, title: "Train Tickets", desc: "Train ticket guidance and travel planning assistance." },
  { icon: Plane, title: "Flight Booking", desc: "Domestic flight booking support with clear details." },
  { icon: Umbrella, title: "Holiday Packages", desc: "Family and group travel planning support." },
];

const trust = ["Clear booking support", "Family travel guidance", "Phone and WhatsApp updates"];

const ToursTravels = () => {
  const { t } = useLanguage();

  return (
    <CategoryPage
      eyebrow={t("nav.toursTravels")}
      title={t("pages.travelsTitle")}
      description={t("pages.travelsDesc")}
      items={items}
      trustPoints={trust}
      tone="teal"
    />
  );
};

export default ToursTravels;