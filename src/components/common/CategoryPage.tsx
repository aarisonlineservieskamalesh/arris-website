import type { IconType } from "../../types/icons";
import { Card } from "./Card";
import { ContactPanel } from "./ContactPanel";
import { PageHeader } from "./PageHeader";
import { Section } from "./Section";
import { IconTile } from "./IconTile";
import { TrustStrip } from "./TrustStrip";

export type CategoryItem = {
  icon: IconType;
  title: string;
  desc: string;
};

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  items: CategoryItem[];
  trustPoints: string[];
  tone?: "teal" | "amber";
};

export function CategoryPage({ eyebrow, title, description, items, trustPoints, tone = "teal" }: Props) {
  return (
    <>
      <Section>
        <PageHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Card key={item.title}>
              <IconTile icon={item.icon} tone={tone} />
              <h3 className="mt-5 text-xl font-extrabold">{item.title}</h3>
              <p className="mt-3 leading-7 text-[var(--slate)]">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <TrustStrip points={trustPoints} />

      <Section>
        <ContactPanel />
      </Section>
    </>
  );
}