import { ShieldCheck } from "lucide-react";
import { Section } from "./Section";

type Props = {
  points: string[];
};

export function TrustStrip({ points }: Props) {
  return (
    <Section dark>
      <div className="grid gap-5 md:grid-cols-3">
        {points.map((point) => (
          <div key={point} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <ShieldCheck className="text-[var(--amber)]" />
            <h3 className="mt-4 font-bold">{point}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
}