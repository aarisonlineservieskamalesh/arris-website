 import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: any;
  category: string;
}

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  category,
}: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-2xl">

      {/* Top */}

      <div className="flex items-start justify-between">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg transition duration-300 group-hover:scale-110">

          <Icon className="h-8 w-8 text-white" />

        </div>

        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
          {category}
        </span>

      </div>

      {/* Content */}

      <div className="mt-6">

        <h3 className="text-xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          {description}
        </p>

      </div>

      {/* Bottom */}

      <div className="mt-8 flex items-center justify-between">

        <span className="text-sm font-medium text-slate-500">
          View Details
        </span>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white">

          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />

        </div>

      </div>

    </div>
  );
};

export default ServiceCard;