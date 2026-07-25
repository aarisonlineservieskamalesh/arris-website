import { cx } from "../../lib/cx";
import type { IconType } from "../../types/icons";

type Tone = "teal" | "amber";

const TONE_CLASSES: Record<Tone, string> = {
  teal: "bg-[rgba(30,138,130,0.12)] text-[var(--teal)]",
  amber: "bg-[rgba(226,129,46,0.12)] text-[var(--amber-dark)]",
};

type Size = "md" | "lg";

const SIZE_CLASSES: Record<Size, { box: string; icon: string }> = {
  // 48px box / 24px icon — used in nav-style rows (e.g. HeroServiceCard)
  md: { box: "h-12 w-12 rounded-xl", icon: "h-6 w-6" },
  // 56px box / 28px icon — used in feature/category cards
  lg: { box: "h-14 w-14 rounded-2xl", icon: "h-7 w-7" },
};

type Props = {
  icon: IconType;
  tone?: Tone;
  size?: Size;
  className?: string;
};

export function IconTile({ icon: Icon, tone = "teal", size = "lg", className }: Props) {
  const sizing = SIZE_CLASSES[size];

  return (
    <div className={cx("flex shrink-0 items-center justify-center", sizing.box, TONE_CLASSES[tone], className)}>
      <Icon className={sizing.icon} />
    </div>
  );
}