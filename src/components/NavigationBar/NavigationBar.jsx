import Logo from "../../assets/logo.png";
import NavBarRightSection from "./NavBarRightSection";
import NavList from "./NavList";

function NavigationBar() {
  return (
    <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
      <img
        src={Logo}
        alt="logo"
        className="object-container w-[124px] h-[45px]"
      />
      <NavList />
      <NavBarRightSection />
    </div>
  );
}

export default NavigationBar;
