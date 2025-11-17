import JoinUsTodayImage from "../../assets/JoinUsToday.png";

function JoinUsToday() {
  return (
    <section className="container mx-auto px-4">
      <div className="bg-[#F7813B] rounded-2xl flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left p-4 lg:p-10">
          <h1 className="text-4xl sm:text-5xl lg:text-[67px] font-semibold leading-snug sm:leading-tight lg:leading-[120%] text-[#FCFCFC]">
            Why Wait? Join Us Today!
          </h1>
          <p className="text-[#FCFCFC] mt-4 text-base sm:text-lg">
            Start your journey with Us and experience a platform designed for
            trust, quality, and convenience.
          </p>
          <button className="bg-[#192D4E] text-[#FEECEB] text-base sm:text-lg px-6 py-3 rounded-[20px] mt-4 cursor-pointer hover:bg-[#0f1b38] transition-colors">
            Sign Up Now
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={JoinUsTodayImage}
            alt="Join Us Today Image"
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[700px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default JoinUsToday;
