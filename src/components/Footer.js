import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
        <div className="p-4 text-center text-neutral-700 dark:text-neutral-200 ">
          <span className=" text-2xl font-extrabold">©</span> 2023 Copyright:
          <Link className="text-neutral-800 dark:text-neutral-400" href="/">
            <span> Tareq Hasan</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
