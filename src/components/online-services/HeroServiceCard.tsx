import { ArrowRight } from "lucide-react";
import type { IconType } from "../../types/icons";
import { cx } from "../../lib/cx";
import { IconTile } from "../common/IconTile";

interface Props {
  icon: IconType;
  title: string;
  desc: string;
  highlight?: boolean;
}

const HeroServiceCard = ({ icon, title, desc, highlight }: Props) => {
  return (
    <div
      className={cx(
        "group flex items-center justify-between rounded-2xl border bg-[image:var(--card-gradient-strong)] p-4 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]",
        highlight ? "border-[rgba(226,129,46,0.48)]" : "border-[rgba(37,99,235,0.20)]",
      )}
    >
      <div className="flex min-w-0 items-center gap-4">
        <IconTile icon={icon} tone={highlight ? "amber" : "teal"} size="md" />
        <div className="min-w-0">
          <h3 className="truncate font-bold text-[var(--ink)]">{title}</h3>
          <p className="text-sm text-[var(--slate)]">{desc}</p>
        </div>
      </div>
      <ArrowRight className="shrink-0 text-[var(--amber-dark)] transition group-hover:translate-x-1" />
    </div>
  );
};

export default HeroServiceCard;