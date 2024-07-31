import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants"
import Button from "./Button"


const Nav = () => {
  return (
    <header className="padding-x z-10 w-full">
        <nav className="flex justify-between items-center max-container ">
            <a href="/">
            <img src={headerLogo} 
            alt="Logo"
            width={200}
            height={40} />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-14 max-lg:hidden">
                {navLinks.map((link) => (
                    <li key={link.label}>
                        <a href={link.href} className="font-montserrat leading-normal text-lg text-slate-gray
                        hover:text-earth-green relative group">
                            {link.label}
                        <div className="absolute w-full h-0.5 bg-earth-green scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                        </a>
                    </li>
                ))}
                <Button label={'Book Now'} />
            </ul>
            <div className="hidden max-lg:block">
                <img src={hamburger}
                alt="hamburger"
                width={25}
                height={25}
                className="cursor-pointer" />
            </div>
        </nav>
    </header>
  )
}

export default Nav