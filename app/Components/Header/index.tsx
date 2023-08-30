import Image from "next/image";
import logo from "/public/logo.jpg"
const Header=()=>{
    return(
        <header className="bg-amber-50 sticky top-0 shadow-sm">
         <nav className="flex justify-between items-center px-4 lg:px-20 py-2 mx-w-7xl mx-auto">
            <Image src={logo}
            height="75"
            width="75"
            alt="logo"
            className="h-14 md:h-16"
            />
            <a href="" target="_blank">
              <button className="border rounded-full border-green-800 text-green-800 py-2 px-5 transition-shadow hover:shadow-lg">
                about me
              </button>
            </a>
         </nav>
        </header>
    )
}
export default Header;