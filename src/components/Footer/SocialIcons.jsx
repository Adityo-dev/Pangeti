import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function SocialIcons() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-6 mb-8">
      <div className="flex space-x-4 text-xl text-[#F7813B]">
        <FaFacebookF className="cursor-pointer" />
        <FaInstagram className="cursor-pointer" />
        <FaLinkedinIn className="cursor-pointer" />
        <FaYoutube className="cursor-pointer" />
        <FaTiktok className="cursor-pointer" />
        <FaXTwitter className="cursor-pointer" />
      </div>
    </div>
  );
}

export default SocialIcons;
