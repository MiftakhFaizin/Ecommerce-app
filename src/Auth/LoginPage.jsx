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
    const [error, setError] = useState("")

    const handleUsernameInput = (e) => {
        setError("")
        setUsernameInputValue(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setError("")
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
                        setLoading(false)
                        navigate("/")
                    } else {
                        throw "Invalid password"
                    }
                } else {
                    throw "Invalid username"
                }
            } catch(err) {
                setLoading(false)
                setError(err)
            }
        }

        if(usernameInputValue && !passwordInputValue) {
            setError("Please enter your password")
        } else if(!usernameInputValue && passwordInputValue) {
            setError("Please enter your username")
        } else if(!usernameInputValue && !passwordInputValue) {
            setError("Please enter your username and password")
        } else {
            fetchDataUsers()
        }
    } 

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-200 to-gray-400">
            <div className="flex flex-col justify-around w-[400px] h-[400px] bg-white border border-slate-300 rounded-lg shadow-md shadow-slate-400 py-[20px] px-[30px]">
                <p className="font-sans font-bold text-[30px] text-center">Welcome Back!</p>
                <p className="font-sans text-[15px] text-center text-gray-600">Login to your account</p>
                <div className="flex flex-col pt-[30px]">
                    <input onChange={handleUsernameInput} type="text" placeholder="username" className="border-b border-slate-500 outline-none font-sans text-[15px] pb-[10px]"/>
                    <input onChange={handlePasswordInput} type="password" placeholder="password" className="border-b border-slate-500 outline-none font-sans text-[15px] mt-[25px] pb-[10px]"/>
                    <p className={`text-red-600 text-[15px] h-[5px] mt-[10px] ${error ? 'visible' : 'invisible'}`}>{error}</p>
                </div>
                <button onClick={handleLoginBtn} className="bg-black rounded-md font-sans text-white font-bold mt-[10px] py-[7px] px-[10px]">Login</button>
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