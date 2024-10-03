import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { MdOutlinePersonAddAlt } from "react-icons/md";

function Header() {
  return (
    <header className="flex m-4 items-center justify-between px-16">
      <div class=" flex justify-between items-center ">
        <ul class="flex gap-5 items-center  ">
          
            <li>
            <Image
              src={"/vector.png"}
              width={300}
              height={300}
              alt="logo"
              priority
              class="w-16 mt-[8px]"
            /> 
           </li>

          <Link href="/Categories"> خدمات </Link>
          <li> </li>
          <li> کلاسها </li>
          <li> فروشگاه </li>
          <li> </li>
          <li> اساتید </li>
          <li>
            <Link href="/">میتیلو</Link>
          </li>
        </ul>
      </div>
      <div className=" bg-gray-200 flex  items-center gap-3 rounded-md px-3 py-1">
        <span>
          <FiSearch className="text-purple-600" />
        </span>
        <input
          className=" bg-gray-200"
          type="text"
          placeholder="جست وجو کنید..."
        />
      </div>

      <ul className="flex items-center gap-5 ">
        <li className="w-max">📞</li>
        <li className="w-max"> 🛒 </li>
        <li className="w-max">   | ورود </li>
        <li className="w-max flex items-center gap-2">
          <MdOutlinePersonAddAlt className="text-xl" />
          <span> ثبت نام</span>
        </li>
      </ul>
    </header>
  );
}
export default Header;