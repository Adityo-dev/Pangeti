import { AiOutlineAndroid } from "react-icons/ai";

import { SiApple } from "react-icons/si";
import FooterLinksList from "./FooterLinksList";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 mt-24">
      <div className="container mx-auto px-4">
        {/* Footer Links */}
        <FooterLinksList />

        {/* Social icons */}
        <SocialIcons />

        {/* Branding & Download buttons */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-6">
          <div className="bg-orange-500 text-white px-6 py-2 rounded font-semibold text-center sm:text-left">
            Pangeti
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="flex items-center justify-center bg-[#0D8EF6] text-white px-6 py-3 rounded-full cursor-pointer font-semibold gap-2 w-full sm:w-auto hover:opacity-90 transition">
              <SiApple size={20} /> Download For iOS
            </button>
            <button className="flex items-center justify-center bg-[#000000] text-white px-6 py-3 rounded-full cursor-pointer font-semibold gap-2 w-full sm:w-auto hover:opacity-90 transition">
              <AiOutlineAndroid size={20} /> Download For Android
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
