const listItems = [
  {
    id: 1,
    name: "Categories",
    url: "#",
  },
  {
    id: 2,
    name: "Shop",
    url: "#",
  },
  {
    id: 3,
    name: "About",
    url: "#",
  },
  {
    id: 4,
    name: "Contact",
    url: "#",
  },
];

function NavList() {
  return (
    <ul className="hidden lg:flex items-center gap-6">
      {listItems.map((item) => (
        <li
          key={item?.id}
          className="text-lg text-[#666666] hover:text-[#F7813B] cursor-pointer  transition-all duration-300"
        >
          {item?.name}
        </li>
      ))}
    </ul>
  );
}

export default NavList;
