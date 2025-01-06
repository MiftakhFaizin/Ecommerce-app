import { Link } from "react-router-dom"
import CloseIcon from "../assets/cross-icon.png"

const AlertLogin = (props) => {

    return (
        <div className="flex justify-center items-center fixed bg-black bg-opacity-50 h-screen top-0 right-0 bottom-0 left-0 z-40">
            <div className="grid grid-rows-3 bg-white shadow-md shadow-slate-600 rounded-md w-[500px] h-[200px]">
                <button onClick={props.closeAlertLogin} className="place-self-end mt-[10px] mr-[10px] self-start"><img className="object-contain w-[15px] h-[15px]" src={CloseIcon}></img></button>
                <p className="place-self-center text-[18px] mb-[40px] text-red-600">Please login for add product to cart</p>
                <button className="place-self-center mr-[20px] mb-[10px] py-[7px] px-[18px] rounded-md bg-black text-white"><Link to="/LoginPage">Login</Link></button>
            </div>
        </div>
    )
}

export default AlertLogin