import ClientImage from "../../assets/client.png";

function PeopleSays() {
  return (
    <section className="container mx-auto px-4">
      <h1 className="text-[#1A1A1A] text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center">
        What people says
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="border border-[#E5E5E5] p-6 rounded-2xl flex flex-col justify-between"
          >
            <p className="text-[#1A1A1A] text-sm sm:text-base">
              “Lorem ipsum dolor sit amet consectetur. Nibh libero facilisis
              ultricies et eget sagittis amet iaculis. Nunc fringilla imperdiet
              facilisis sit. A nunc iaculis magna dapibus cras. Sit erat gravida
              nisi eget at sapien interdum.”
            </p>

            <div className="flex items-center gap-4 mt-6 sm:mt-12">
              <img
                src={ClientImage}
                alt="Client"
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="flex flex-col">
                <span className="text-[#1A1A1A] text-sm font-semibold">
                  Ralspanh Edwards
                </span>
                <span className="text-[#6A6A6A] text-xs sm:text-sm">Buyer</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PeopleSays;
