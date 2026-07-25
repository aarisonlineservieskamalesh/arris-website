import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../common/Badge";
import { Card } from "../common/Card";
import { IconTile } from "../common/IconTile";
import type { IconType } from "../../types/icons";

interface Props {
  title: string;
  description: string;
  icon: IconType;
  category: string;
  slug: string;
}

const ServiceCard = ({ title, description, icon, category, slug }: Props) => {
  return (
    <Link to={`/online-services/${slug}`} className="block h-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--amber)] focus:ring-offset-2">
      <Card className="group h-full">
        <div className="flex items-start justify-between gap-4">
          <IconTile icon={icon} tone="amber" className="transition group-hover:scale-105" />
          <Badge>{category}</Badge>
        </div>
        <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
        <p className="mt-3 leading-7 text-[var(--slate)]">{description}</p>
        <div className="mt-6 inline-flex items-center gap-2 font-bold text-[var(--amber-dark)]">
          View Details
          <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
        </div>
      </Card>
    </Link>
  );
};

export default ServiceCard;
