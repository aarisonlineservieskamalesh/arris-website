import { Arrow } from "./HeroData";

interface Props {
  icon: any;
  title: string;
  desc: string;
  highlight?: boolean;
}

const HeroServiceCard = ({
  icon: Icon,
  title,
  desc,
  highlight,
}: Props) => {
  return (
    <div
      className={`group flex items-center justify-between rounded-3xl border p-6 transition-all duration-300 hover:translate-x-2 ${
        highlight
          ? "border-amber-500 bg-amber-500/10"
          : "border-white/10 bg-[#23395B]/80"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`rounded-xl p-4 ${
            highlight ? "bg-amber-500" : "bg-blue-500"
          }`}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>

        <div>
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-400">{desc}</p>
        </div>
      </div>

      <Arrow className="text-gray-400 transition group-hover:translate-x-2" />
    </div>
  );
};

export default HeroServiceCard;