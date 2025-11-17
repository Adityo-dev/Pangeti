import Image1 from "../../assets/Frame1.png";
import Image2 from "../../assets/Frame2.png";
import Image3 from "../../assets/Frame3.png";
import Image4 from "../../assets/Frame4.png";
import Image5 from "../../assets/Frame5.png";
import Image6 from "../../assets/Frame6.png";

// data
const data = [
  {
    id: 1,
    image: Image1,
    title: "Sign Up & Create Your Profile",
    subTitle: "Quickly create your account and share your details.",
  },
  {
    id: 2,
    image: Image2,
    title: "Browse & Discover",
    subTitle: "Find products and services that suit your needs.",
  },
  {
    id: 3,
    image: Image3,
    title: "Connect with Suppliers",
    subTitle: "Reach out directly to suppliers for details.",
  },
  {
    id: 4,
    image: Image4,
    title: "Place Your Order",
    subTitle: "Securely place your order and enjoy protected payments.",
  },
  {
    id: 5,
    image: Image5,
    title: "Track & Receive",
    subTitle: "Follow your order from our warehouse to your door.",
  },
  {
    id: 6,
    image: Image6,
    title: "Rate & Review",
    subTitle: "Leave your feedback and help others make better choices.",
  },
];

function HowITWORKS() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-[#1A1A1A] text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center">
        How IT WORKS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center px-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />

            <h2 className="text-[18px] sm:text-[20px] font-semibold text-[#1A1A1A]">
              {item.title}
            </h2>
            <p className="text-[#1A1A1A] text-sm sm:text-base mt-2">
              {item.subTitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowITWORKS;
