import loadingIcon from "../assets/load.png"

export const SpinLoaderLogin = () => {
    return (
        <div className="flex justify-center items-center fixed bg-black bg-opacity-50 h-screen top-0 right-0 bottom-0 left-0 z-2">
            <div className="flex flex-col">
                <img className="object-contain w-[60px] h-[60px] animate-spin" src={loadingIcon}></img>
                <p className="text-white text-[18px] font-bold pl-[4px] mt-[10px] animate-pulse">Login...</p>
            </div>
        </div>
    )
}
