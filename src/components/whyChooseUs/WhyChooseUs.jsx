import CrtImage from "../../assets/car.png";
import CheckImage from "../../assets/check.png";
import CardImage from "../../assets/card.png";
import SupportImage from "../../assets/support.png";

// data
const whyChooseUseData = [
  {
    id: 1,
    image: CheckImage,
    title: "Verified Suppliers",
    subTitle: "100% authenticated business partner",
  },
  {
    id: 2,
    image: CrtImage,
    title: "Global Shipping",
    subTitle: "Fast & reliable worldwide delivery ",
  },
  {
    id: 3,
    image: CardImage,
    title: "Secure Payments",
    subTitle: "Multiple Secure Payment Options",
  },
  {
    id: 4,
    image: SupportImage,
    title: "24/7 Customer Service",
    subTitle: "Round the clock customer service",
  },
];

function WhyChooseUs() {
  return (
    <section className="container mx-auto px-4 py-10">
      {/* Section Title */}
      <div className="flex items-center gap-3 mb-8">
        <p className="bg-[#FCAB3F] w-[40px] h-[3px]"></p>
        <h2 className="text-xl sm:text-2xl font-semibold text-[#FCAB3F]">
          Why Choose Us
        </h2>
      </div>

      {/* Responsive Grid */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-6
        "
      >
        {whyChooseUseData.map((item) => (
          <div
            key={item.id}
            className="border border-[#192D4E] p-5 sm:p-6 rounded-2xl hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt="icon"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />

            <h3 className="text-[#1A1A1A] text-lg sm:text-xl font-medium mt-6">
              {item.title}
            </h3>

            <p className="text-sm sm:text-base text-[#484848] mt-2">
              {item.subTitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
