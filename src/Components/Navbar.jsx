import { NavLink, useNavigate } from "react-router-dom"
import CartIcon from "../assets/shopping-cart-icon.png"
import HamburgerIcon from "../assets/hamburger-menu.png"
import CloseIcon from "../assets/cross-icon.png"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../redux/Slices"
import { useState } from "react"

const Navbar = () => {
    const userLogin = useSelector(state => state.auth.login)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [logoutConfirm, setLogoutConfirm] = useState(false)
    const [hamburgerMenu, setHamburgerMenu] = useState(false)

    return (
        <div className="flex justify-center max-md:sticky max-md:top-0 max-md:bg-white max-md:bg-opacity-70 max-md:backdrop-blur-sm">
            <div className="container px-[40px] py-[15px]">
                <div className="flex justify-between">
                    <button onClick={() => {setHamburgerMenu(true)}} className="md:hidden"><img className="object-contain w-[20px] h-[20px]" src={HamburgerIcon}></img></button>
                    <ul className={`flex gap-[15px] items-center max-md:fixed max-md:items-start max-md:bg-black max-md:shadow-lg max-md:shadow-white max-md:-left-[50%] ${hamburgerMenu && "translate-x-[50%]"} max-md:top-0 max-md:h-[100vh] ${hamburgerMenu && "max-md:w-[90%]"} max-md:flex-col max-md:gap-[40px] max-md:pt-[50px] max-md:pl-[20%] transition-all duration-200 ease-linear`}>
                        <button onClick={() => {setHamburgerMenu(false)}} className="md:hidden w-[20px] h-[20px] "><img className="object-contain" src={CloseIcon}></img></button>
                        <NavLink onClick={() => {setHamburgerMenu(false)}} to="" className={({ isActive }) => (isActive ? "font-sans font-semibold text-red-500 text-[15px]" : "font-sans font-semibold text-black max-md:text-white text-[15px]")}>Home</NavLink>
                        <NavLink onClick={() => {setHamburgerMenu(false)}} to="/electronics" className={({ isActive }) => (isActive ? "font-sans font-semibold text-red-500 text-[15px]" : "font-sans font-semibold text-black max-md:text-white text-[15px]")}>Electronics</NavLink>
                        <NavLink onClick={() => {setHamburgerMenu(false)}} to="/jewelery" className={({ isActive }) => (isActive ? "font-sans font-semibold text-red-500 text-[15px]" : "font-sans font-semibold text-black max-md:text-white text-[15px]")}>Jewelery</NavLink>
                        <NavLink onClick={() => {setHamburgerMenu(false)}} to="/men's clothing" className={({ isActive }) => (isActive ? "font-sans font-semibold text-red-500 text-[15px]" : "font-sans font-semibold text-black max-md:text-white text-[15px]")}>Mens's clothing</NavLink>
                        <NavLink onClick={() => {setHamburgerMenu(false)}} to="/women's clothing" className={({ isActive }) => (isActive ? "font-sans font-semibold text-red-500 text-[15px]" : "font-sans font-semibold text-black max-md:text-white text-[15px]")}>Women's clothing</NavLink>
                    </ul>
                    <ul className="flex gap-[15px] items-center">
                        {userLogin ? <NavLink to="/cart" className="font-sans font-semibold text-black text-[15px]"><img className="w-[25px] h-[25px] object-contain" src={CartIcon} /></NavLink> : null}
                        {!userLogin ? 
                        <NavLink to="/LoginPage" className="font-sans font-semibold text-black text-[15px]">Login</NavLink> 
                        : 
                        <button onClick={() => {setLogoutConfirm(true)}} className="font-sans font-semibold text-black text-[15px]">Logout</button>
                        }
                    </ul>
                </div>
            </div>
            {logoutConfirm &&
            <div className="fixed flex justify-center items-center bg-black bg-opacity-50 top-0 right-0 bottom-0 left-0 z-10">
                <div className="flex flex-col justify-center items-center gap-[20px] w-[500px] h-[200px] px-[10px] bg-white rounded-md">
                    <p className="text-[25px] font-bold">Are you sure want to logout?</p>
                    <div className="flex gap-[20px]">
                        <button onClick={() => {setLogoutConfirm(false)}} className="bg-black hover:bg-slate-900 px-[15px] py-[7px] text-white rounded-md transition-all duration-300 ease-in-out">Cancel</button>
                        <button 
                        onClick={() => {
                            dispatch(logout())
                            navigate("LoginPage")
                        }}
                        className="bg-red-600 hover:bg-red-500 px-[15px] py-[7px] text-white rounded-md transition-all duration-300 ease-in-out">Logout</button>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Navbar