import { IoIosSearch } from "react-icons/io";
import HeroImage from "../../assets/hero-image.png";

export default function HeroSection() {
  const tags = [
    "Men's Clothes",
    "Shoes",
    "Bags",
    "Iphone",
    "Sunglasses",
    "Iphone",
    "Bags",
    "Men's Clothes",
    "Iphone",
    "Shoes",
    "Sunglasses",
  ];

  return (
    <section className="w-full flex items-center bg-[#E5E5E5]">
      <div className="container mx-auto flex flex-col xl:flex-row items-center gap-10 xl:gap-6 px-4">
        {/* Left Side */}
        <div className="lg:w-[70%] flex flex-col justify-center text-center xl:text-left py-10 md:py-16">
          <h1 className="text-[32px] sm:text-[40px] md:text-[55px] xl:text-[72px] font-bold leading-[120%] text-[#1A1A1A]">
            YOUR GLOBAL MARKETPLACE FOR PRODUCTS & SERVICES
          </h1>

          <p className="text-[#484848] text-sm sm:text-base md:text-lg mt-4 max-w-xl mx-auto xl:mx-0">
            Lorem ipsum dolor sit amet consectetur. Donec praesent quis faucibus
            neque arcu commodo. Quis eu dignissim laoreet euismod laoreet
            faucibus. Lectus vitae at faucibus faucibus eu hendrerit. Velit
            suspendisse fermentum et tellus sed.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl my-6 mx-auto xl:mx-0 w-full">
            <input
              type="text"
              placeholder="Search ..."
              className="w-full border bg-white border-white rounded-[47px] px-5 py-3 sm:py-4 
              focus:outline-none focus:border-[#F7813B] transition-all duration-300 shadow text-sm sm:text-base"
            />

            <button
              className="bg-[#F7813B] text-white w-[38px] h-[38px] sm:w-[40px] sm:h-[40px] 
              flex items-center justify-center rounded-full cursor-pointer absolute top-1/2 
              -translate-y-1/2 right-3 sm:right-4"
            >
              <IoIosSearch size={22} className="sm:size-6" />
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3 max-w-xl mx-auto xl:mx-0 justify-center xl:justify-start">
            {tags.map((item, index) => (
              <span
                key={index}
                className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border border-[#192D4E] 
                text-[#192D4E] rounded-full cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative hidden xl:block">
          <img
            src={HeroImage}
            alt="Shopping Cart"
            className="object-cover xl:w-[816px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
