import { BsCart3 } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { BiWorld } from "react-icons/bi";

function NavBarRightSection() {
  return (
    <div className="flex items-center gap-6">
      <div className="cursor-pointer hidden lg:block">
        <BsCart3 size={24} />
      </div>
      <div className="bg-[#E5E5E5] w-10 h-10 hidden lg:flex items-center justify-center rounded-full p-[10px] cursor-pointer">
        <BiWorld size={24} />
      </div>
      <div className="bg-[#E5E5E5] w-10 h-10 flex items-center justify-center rounded-full p-[10px] cursor-pointer">
        <IoIosMenu size={24} />
      </div>
    </div>
  );
}

export default NavBarRightSection;
