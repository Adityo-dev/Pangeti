import { useMemo, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { MdImageSearch } from "react-icons/md";
import ProductImage from "../../assets/product2.png";
import starRate from "../../assets/star_rate.png";

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    title: "Bluetooth Wireless Earbuds with Deep Bass",
    price: "$20 - $28",
    rating: 4.2,
    img: ProductImage,
    category: "Audio",
  },
  {
    id: 2,
    title: "Noise Cancelling Headphones",
    price: "$50 - $70",
    rating: 5.0,
    img: ProductImage,
    category: "Audio",
  },
  {
    id: 3,
    title: "Portable Bluetooth Speaker",
    price: "$30 - $42",
    rating: 4.5,
    img: ProductImage,
    category: "Speakers",
  },
  {
    id: 4,
    title: "Smart Fitness Watch",
    price: "$80 - $120",
    rating: 4.8,
    img: ProductImage,
    category: "Wearables",
  },
  {
    id: 5,
    title: "USB-C Fast Charger",
    price: "$15 - $25",
    rating: 3.9,
    img: ProductImage,
    category: "Accessories",
  },
  {
    id: 6,
    title: "Smartphone Gimbal Stabilizer",
    price: "$60 - $90",
    rating: 4.6,
    img: ProductImage,
    category: "Accessories",
  },
  {
    id: 7,
    title: "Luxury Handbag (Demo)",
    price: "$120 - $200",
    rating: 4.4,
    img: ProductImage,
    category: "Fashion",
  },
  {
    id: 8,
    title: "Cosmetics Set",
    price: "$30 - $55",
    rating: 4.1,
    img: ProductImage,
    category: "Beauty",
  },
];

function IconHeart({ filled }) {
  return filled ? (
    <AiFillHeart className="w-5 h-5 text-white" />
  ) : (
    <AiOutlineHeart className="w-5 h-5 text-gray-300" />
  );
}

export default function Products() {
  const [products] = useState(SAMPLE_PRODUCTS);
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState(new Set());

  const filtered = useMemo(() => {
    let list = products.slice();

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(q));
    }

    return list;
  }, [products, query]);

  function toggleFavorite(id) {
    setFavorites((prev) => {
      const s = new Set(prev);
      s.has(id) ? s.delete(id) : s.add(id);
      return s;
    });
  }

  return (
    <>
      {/* Header */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-6">
        <div className="w-full max-w-xl">
          {/* Search Bar */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search ..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border bg-white border-white rounded-[47px] px-5 py-3 sm:py-4 
              focus:outline-none focus:border-[#F7813B] transition-all duration-300 shadow text-sm sm:text-base"
            />

            <button
              className="bg-[#F7813B] text-white w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] 
              flex items-center justify-center rounded-full cursor-pointer absolute top-1/2 
              -translate-y-1/2 right-3 sm:right-4"
            >
              <IoIosSearch size={22} className="sm:size-6" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 border bg-white border-white rounded-[47px] px-5 py-3 sm:py-4 shadow cursor-pointer">
          <MdImageSearch />
          Search by Image
        </div>
      </div>

      {/* Product grid */}
      <section className="container mx-auto px-4">
        <div
          className="grid 
          grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-6
         gap-4 md:gap-6"
        >
          {filtered.map((p) => (
            <article key={p.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-[200px] object-cover rounded-[12px]"
                />
                <button
                  onClick={() => toggleFavorite(p.id)}
                  className={`absolute top-3 right-3 p-[8px] rounded-[10px] flex items-center justify-center cursor-pointer ${
                    favorites.has(p.id) ? "bg-[#F7813B]" : "bg-[#1A1A1A80]"
                  }`}
                >
                  <IconHeart filled={favorites.has(p.id)} />
                </button>
              </div>

              <div className="pt-2">
                <div className="flex items-start justify-between">
                  <h3 className="max-w-[80%] text-sm font-medium line-clamp-2 text-[#1A1A1A] ">
                    {p.title}
                  </h3>

                  <div className="flex items-center gap-1">
                    <img
                      src={starRate}
                      alt="star"
                      className="object-container w-5 h-5"
                    />
                    <span className="text-xs text-[#484848]">{p.rating}</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-4">
                  <div className="text-sm font-medium text-[#FCAB3F]">
                    {p.price}
                  </div>

                  <p className="text-xs text-[#484848]">MOQ: 5</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No products found
          </div>
        )}
      </section>
    </>
  );
}
