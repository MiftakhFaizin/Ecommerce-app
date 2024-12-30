import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="flex justify-between px-[40px] py-[15px]">
            <ul className="flex gap-[15px] items-center">
                <NavLink to="" className={({ isActive }) => (isActive ? "font-sans font-semibold text-red-500 text-[15px]" : "font-sans font-semibold text-black text-[15px]")}>Home</NavLink>
                <NavLink to="" className={({ isActive }) => (isActive ? "font-sans font-semibold text-red-500 text-[15px]" : "font-sans font-semibold text-black text-[15px]")}>Electronics</NavLink>
                <NavLink to="" className={({ isActive }) => (isActive ? "font-sans font-semibold text-red-500 text-[15px]" : "font-sans font-semibold text-black text-[15px]")}>Jewelery</NavLink>
                <NavLink to="" className={({ isActive }) => (isActive ? "font-sans font-semibold text-red-500 text-[15px]" : "font-sans font-semibold text-black text-[15px]")}>Mens's clothing</NavLink>
                <NavLink to="" className={({ isActive }) => (isActive ? "font-sans font-semibold text-red-500 text-[15px]" : "font-sans font-semibold text-black text-[15px]")}>Women's clothing</NavLink>
            </ul>
            <ul className="flex gap-[15px] items-center">
                <NavLink to="" className="font-sans font-semibold text-black text-[15px]">Cart</NavLink>
                <NavLink to="" className="font-sans font-semibold text-black text-[15px]">Login</NavLink>
            </ul>
        </div>
    )
}

export default Navbar