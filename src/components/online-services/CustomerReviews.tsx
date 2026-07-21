import { Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Selvam",
    location: "Sivagangai",
    review:
      "Mobile number change done quickly. Fast and efficient, couldn't ask for more!",
  },
  {
    name: "Hema",
    location: "Theni",
    review:
      "Certificate status checked fast. Reliable service, I always come back here!",
  },
  {
    name: "Farhan",
    location: "Salem",
    review:
      "PAN instant service is excellent. Got my work done without any trouble!",
  },
  {
    name: "Priya",
    location: "Madurai",
    review:
      "Very professional team. Passport application process was smooth and quick.",
  },
  {
    name: "Arun",
    location: "Coimbatore",
    review:
      "Income certificate completed before the expected date. Highly recommended.",
  },
];

export default function CustomerReviews() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(#d7e4f8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            CUSTOMER REVIEWS
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-8 text-center text-5xl font-black text-slate-900">
          Trusted by{" "}
          <span className="italic text-blue-600">
            Thousands
          </span>{" "}
          in Our Community
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-gray-500">
          Real feedback from customers who trusted our online services.
        </p>

        {/* Navigation */}
        <div className="review-prev absolute left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg lg:flex">
          <ChevronLeft />
        </div>

        <div className="review-next absolute right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg lg:flex">
          <ChevronRight />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: ".review-prev",
            nextEl: ".review-next",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          spaceBetween={25}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="mt-16 pb-16"
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Stars */}
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="min-h-[120px] text-lg italic leading-9 text-slate-600">
                  "{item.review}"
                </p>

                {/* User */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-slate-900">
                      {item.name}
                    </h4>

                    <div className="mt-1 flex items-center gap-1 text-gray-500">
                      <MapPin size={16} className="text-blue-600" />
                      {item.location}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}