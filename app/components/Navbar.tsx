import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center">
      <nav className="fixed top-0 bg-white shadow-sm rounded-[5px] w-[80vw] h-12 flex justify-between items-center text-sm px-5 mt-5 z-50">
        <div>
          <p className="text-[#1378c7] font-bold">CubeTech Innovations</p>
        </div>
        <div className="flex gap-15">
          <p className="text-[#1378c7] font-bold">Products</p>
          <p className="text-[#1378c7] font-bold">Services</p>
          <p className="text-[#1378c7] font-bold">About Us</p>
          <p className="text-[#1378c7] font-bold">Blog</p>
          <p className="text-[#1378c7] font-bold">Contact Us</p>
        </div>
      </nav>
    </div>
  );
}
