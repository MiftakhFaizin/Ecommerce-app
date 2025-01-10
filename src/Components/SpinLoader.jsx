import loadingIcon from "../assets/load.png"

export const SpinLoaderLogin = () => {
    return (
        <div className="flex justify-center items-center fixed bg-black bg-opacity-50 h-screen top-0 right-0 bottom-0 left-0 z-2">
           <img className="object-contain w-[60px] h-[60px] animate-spin" src={loadingIcon}></img>
        </div>
    )
}
