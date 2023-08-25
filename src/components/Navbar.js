"use client";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "./NavLinks";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { signOut, useSession } from "next-auth/react";
const Navbar = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className=" bg-yellow-100 fixed w-full ">
        <div className=" flex items-center font-medium justify-around ">
          <div className=" z-50 p-5 md:w-auto w-full flex justify-between ">
            <h3 className=" font-bold text-lg md:cursor-pointer ">
              PC BUILDER
            </h3>
            {/* ======mobile menu===== */}
            <div className=" md:hidden text-3xl">
              <button
                className="w-[28px] h-[28px] object-contain text-black"
                onClick={() => setOpen(!open)}
              >
                {open ? <CloseOutlined /> : <MenuOutlined />}
              </button>
            </div>
            {/* ======mobile menu===== */}
          </div>
          <ul className=" md:flex hidden uppercase items-center gap-8 font-[poppins]">
            <NavLinks />
          </ul>
          <div>
            <Link
              href="/login"
              className=" md:block hidden border border-slate-300 hover:border-slate-400 rounded p-1 bg-black text-white "
            >
              {session?.user ? (
                <button onClick={() => signOut()}>LogOut</button>
              ) : (
                <button>Login</button>
              )}
            </Link>
          </div>
          {/* =====Mobile device====== */}
          <ul
            className={`md:hidden absolute snap-normal left-0 bottom-0 text-black pl-4 duration-500 ${
              open ? "left-0 top-[76px] w-1/2 h-96 bg-red-600 " : "left-[-100%]"
            } `}
          >
            <div className=" mt-5 ">
              <NavLinks />
            </div>
            <div className=" my-7 ">
              <Link
                href="/login"
                className=" md:hidden border border-slate-300 hover:border-slate-400 rounded px-4 mt-3 py-1 bg-black text-white "
              >
                {session?.user ? (
                  <button onClick={() => signOut()}>LogOut</button>
                ) : (
                  <button>Login</button>
                )}
              </Link>
            </div>
          </ul>
          {/* =========== */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
