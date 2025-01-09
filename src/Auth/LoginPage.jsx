import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../redux/Slices"
import { useNavigate } from "react-router-dom"
import { SpinLoaderLogin } from "../Components/SpinLoader"

const LoginPage = () => {
    const [usernameInputValue, setUsernameInputValue] = useState("")
    const [passwordInputValue, setPasswordInputValue] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleUsernameInput = (e) => {
        setUsernameInputValue(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setPasswordInputValue(e.target.value)
    }

    const handleLoginBtn = () => {
        const fetchDataUsers = async () => {
            try {
                setLoading(true)
                let dataUsers = await fetch("https://fakestoreapi.com/users")
                dataUsers = await dataUsers.json()

                let findUser = dataUsers.find(user => user.username === usernameInputValue)
                if(findUser) {
                    if(findUser.password === passwordInputValue) {
                        dispatch(login(findUser.id))
                        navigate("/")
                    } else {
                        throw "Wrong password"
                    }
                } else {
                    throw "Wrong username"
                }
            } catch(err) {
                alert(err)
            } finally {
                setLoading(false)
            }
        }
        fetchDataUsers()
    } 

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col justify-around border border-slate-300 rounded-md shadow-md shadow-slate-400 py-[20px] px-[30px]">
                <p className="font-sans font-bold text-[30px]">Welcome Back!</p>
                <div className="flex flex-col gap-[25px] py-[40px]">
                    <input onChange={handleUsernameInput} type="text" placeholder="username" className="border-b border-slate-500 outline-none font-sans text-[15px] pb-[10px]"/>
                    <input onChange={handlePasswordInput} type="password" placeholder="password" className="border-b border-slate-500 outline-none font-sans text-[15px] pb-[10px]"/>
                </div>
                <button onClick={handleLoginBtn} className="bg-black rounded-md font-sans text-white font-bold py-[7px] px-[10px]">Login</button>
            </div>
            {loading ?
            <SpinLoaderLogin />
            : 
            null
            }
        </div>
    )
}

export default LoginPage