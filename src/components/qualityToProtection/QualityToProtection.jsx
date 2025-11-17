// data
import Image1 from "../../assets/as1.png";
import Image2 from "../../assets/as2.png";
import Image3 from "../../assets/as3.png";

const QualityToProtectionData = [
  {
    id: 1,
    image: Image1,
    title: "Production Quality Assurance",
    subTitle:
      "We ensure that all products meet the highest standards through third-party factory audits and product inspections. With certified manufacturers, you can be confident in the quality of every order.",
  },
  {
    id: 2,
    image: Image2,
    title: "Secure Purchase Protection",
    subTitle:
      "We ensure that all products meet the highest standards through third-party factory audits and product inspections. With certified manufacturers, you can be confident in the quality of every order.",
  },
  {
    id: 3,
    image: Image3,
    title: "Verified Shipping & Delivery",
    subTitle:
      "We ensure that all products meet the highest standards through third-party factory audits and product inspections. With certified manufacturers, you can be confident in the quality of every order.",
  },
];

function QualityToProtection() {
  return (
    <section className="container mx-auto px-4 py-10">
      {/* Heading */}
      <h3 className="text-[#1A1A1A] text-3xl sm:text-4xl md:text-5xl font-bold uppercase leading-[120%] w-full xl:max-w-[60%]">
        Trade with Confidence: From Quality to Protection
      </h3>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 sm:mt-12">
        {QualityToProtectionData.map((item) => (
          <div
            key={item.id}
            className="border border-[#192D4E] rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8 object-contain"
            />
            <h2 className="text-[#1A1A1A] font-semibold text-xl sm:text-2xl mb-3">
              {item.title}
            </h2>
            <p className="text-[#666666] text-sm sm:text-base">
              {item.subTitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default QualityToProtection;
