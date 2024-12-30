const LoginPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col justify-around border border-slate-300 rounded-md shadow-md shadow-slate-400 py-[20px] px-[30px]">
                <p className="font-sans font-bold text-[30px]">Welcome Back!</p>
                <div className="flex flex-col gap-[25px] py-[40px]">
                    <input type="text" placeholder="username" className="border-b border-slate-500 outline-none font-sans text-[15px] pb-[10px]"/>
                    <input type="password" placeholder="password" className="border-b border-slate-500 outline-none font-sans text-[15px] pb-[10px]"/>
                </div>
                <button className="bg-black rounded-md font-sans text-white font-bold py-[7px] px-[10px]">Login</button>
            </div>
        </div>
    )
}

export default LoginPage