import { BatteryCharging, Headphones, Smartphone, Wrench } from "lucide-react";
import { useLanguage } from "../i18n";
import { CategoryPage } from "../components/common/CategoryPage";

const items = [
  { icon: Smartphone, title: "Mobile Phones", desc: "New phone purchase guidance and model availability support." },
  { icon: Headphones, title: "Accessories", desc: "Cases, chargers, earphones and daily mobile essentials." },
  { icon: BatteryCharging, title: "Recharge & SIM", desc: "Recharge, SIM support and basic account assistance." },
  { icon: Wrench, title: "Repair Guidance", desc: "Screen, battery and service-center guidance for common issues." },
];

const trust = ["Original product guidance", "Local support desk", "Clear service updates"];

const Mobiles = () => {
  const { t } = useLanguage();

  return (
    <CategoryPage
      eyebrow={t("nav.mobiles")}
      title={t("pages.mobilesTitle")}
      description={t("pages.mobilesDesc")}
      items={items}
      trustPoints={trust}
      tone="teal"
    />
  );
};

export default Mobiles;