import { AirVent, Refrigerator, Tv, WashingMachine } from "lucide-react";
import { CategoryPage } from "../components/common/CategoryPage";
import { useLanguage } from "../i18n";

const items = [
  { icon: Tv, title: "TV & Entertainment", desc: "Television and daily home entertainment appliance support." },
  { icon: AirVent, title: "AC Support", desc: "Air conditioner product guidance and service coordination." },
  { icon: Refrigerator, title: "Refrigerators", desc: "Fridge selection, availability and household support." },
  { icon: WashingMachine, title: "Washing Machines", desc: "Washing machine model and service guidance." },
];

const trust = ["Home-first recommendations", "Simple purchase guidance", "Trusted local coordination"];

const HomeAppliances = () => {
  const { t } = useLanguage();

  return (
    <CategoryPage
      eyebrow={t("nav.homeAppliances")}
      title={t("pages.appliancesTitle")}
      description={t("pages.appliancesDesc")}
      items={items}
      trustPoints={trust}
      tone="amber"
    />
  );
};

export default HomeAppliances;