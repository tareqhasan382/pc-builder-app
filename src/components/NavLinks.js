import Link from "next/link";
import { useState } from "react";

const NavLinks = () => {
  const [active, setActive] = useState("");
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Categories +",
      link: "#",
      subMenu: true,
      subLinks: [
        { name: "CPU", link: "/" },
        { name: "Motherboard", link: "/" },
        { name: "RAM", link: "/" },
        { name: "Power Supply", link: "/" },
        { name: "Storage", link: "/" },
        { name: "Monitor", link: "/" },
      ],
    },
    {
      name: "PC Builder",
      link: "/pcBuilder/PcBuilder",
    },
  ];
  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className=" px-3 text-left group ">
            <Link
              href={link.link}
              className="hover:cursor-pointer hover:underline"
              onClick={() =>
                active !== link.name ? setActive(link.name) : setActive("")
              }
            >
              {link.name}
            </Link>
            {link.subLinks && (
              <div>
                <div className=" absolute hidden group-hover:md:block hover:md:block ">
                  <div className=" py-3 ">
                    <div className=" w-4 h-4 left-3 absolute mt-1 bg-white rotate-45 border border-red-400 "></div>
                  </div>
                  <div className=" bg-white px-3.5 border border-gray-950 ">
                    {link.subLinks.map((subMenu, index) => (
                      <div key={index}>
                        <Link
                          href={subMenu.link}
                          className=" text-gray-600 my-5 mx-3 hover:underline "
                        >
                          {subMenu.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/*============ mobile menu ================= " md:hidden  " */}
          <div className={`${active === link.name ? "md:hidden" : "hidden"}`}>
            {link?.subLinks?.map((slink, index) => (
              <div key={index}>
                <div>
                  <Link href={slink.link} className=" pl-7 md:pr-0 pr-5 ">
                    {slink.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/*============ mobile menu =================*/}
        </div>
      ))}
    </>
  );
};

export default NavLinks;
