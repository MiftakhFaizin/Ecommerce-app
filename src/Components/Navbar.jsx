import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="flex justify-between px-[40px] py-[15px]">
            <ul className="flex gap-[15px] items-center">
                <NavLink to="" className={({ isActive }) => (isActive ? "font-sans font-semibold text-red-500 text-[15px]" : "font-sans font-semibold text-black text-[15px]")}>Home</NavLink>
                <NavLink to="/electronics" className={({ isActive }) => (isActive ? "font-sans font-semibold text-red-500 text-[15px]" : "font-sans font-semibold text-black text-[15px]")}>Electronics</NavLink>
                <NavLink to="/jewelery" className={({ isActive }) => (isActive ? "font-sans font-semibold text-red-500 text-[15px]" : "font-sans font-semibold text-black text-[15px]")}>Jewelery</NavLink>
                <NavLink to="/men's clothing" className={({ isActive }) => (isActive ? "font-sans font-semibold text-red-500 text-[15px]" : "font-sans font-semibold text-black text-[15px]")}>Mens's clothing</NavLink>
                <NavLink to="/women's clothing" className={({ isActive }) => (isActive ? "font-sans font-semibold text-red-500 text-[15px]" : "font-sans font-semibold text-black text-[15px]")}>Women's clothing</NavLink>
            </ul>
            <ul className="flex gap-[15px] items-center">
                {localStorage.login ? <NavLink to="" className="font-sans font-semibold text-black text-[15px]">Cart</NavLink> : null}
                {!localStorage.login ? 
                <NavLink to="/LoginPage" className="font-sans font-semibold text-black text-[15px]">Login</NavLink> 
                : 
                <NavLink onClick={() => {localStorage.removeItem("login")}} to="/LoginPage" className="font-sans font-semibold text-black text-[15px]">Logout</NavLink>
                }
            </ul>
        </div>
    )
}

export default Navbar