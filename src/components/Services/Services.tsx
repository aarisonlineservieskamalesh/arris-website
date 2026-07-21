import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { categories, services } from "./ServiceData";
import ServiceCard from "../Services/ServiceCard";

const Services = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchCategory =
        activeCategory === "All" ||
        service.category === activeCategory;

      const matchSearch =
        service.title
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <section className="bg-slate-50 py-24">

      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Government Online Services
          </h2>

          <p className="mt-4 text-slate-500">
            Fast, Trusted and Secure Government Services.
          </p>

        </div>

        {/* Search */}

        <div className="mx-auto mt-12 max-w-2xl">

          <div className="flex items-center rounded-2xl border bg-white px-5 py-4 shadow-sm">

            <Search className="text-slate-400" />

            <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ml-3 w-full bg-transparent outline-none"
            />

          </div>

        </div>

        {/* Categories */}

        <div className="mt-10 flex flex-wrap justify-center gap-3">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 font-medium transition ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-700 hover:bg-blue-50"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Services */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {filteredServices.map((service) => (

            <ServiceCard
              key={service.id}
              {...service}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;