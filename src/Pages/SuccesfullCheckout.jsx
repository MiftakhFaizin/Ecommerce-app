import { Link } from "react-router-dom"

const SuccesfullCheckout = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-200 to-gray-400">
            <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col justify-center items-center max-md:w-[80vw]">
                <p className="font-bold text-2xl text-black mb-4">Checkout Successful!</p>
                <p className="text-gray-700 mb-8 text-center">Thank you for your purchase. Your order has been placed successfully.</p>
                <Link to="/">
                    <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
                        Back to Shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default SuccesfullCheckout