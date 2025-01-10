import PlusIcon from "../assets/plus-round-line-icon.png"
import MinusIcon from "../assets/minus-round-line-icon.png"
import BinIcon from "../assets/recycle-bin-line-icon.png"
import CloseIcon from "../assets/cross-icon.png"
import { useDispatch, useSelector } from "react-redux"
import { DeleteProduct, minusAmountProduct, plusAmountProduct } from "../redux/Slices"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Cart = () => {
    const userId = useSelector(state => state.auth.userId)
    const cartProducts = useSelector(state => {
        const cartForUserId = state.cart.find(product => product.userId === userId)
        return cartForUserId ? cartForUserId.products : []
    })
    const dispatch = useDispatch()
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    });
    const [totalCheckout, setTotalCheckout] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        userId ? null : navigate("/LoginPage")
    })

    useEffect(() => {
        const total = cartProducts.reduce((acc, product) => {
            return acc + (product.price * product.amount)
        }, 0)
        setTotalPrice(total)
    }, [cartProducts])
    


    return (
        <div className="flex justify-center">
            <div className="container px-[40px] pt-[60px]">
                <div className="flex justify-between pr-[10px]">
                    <p className="font-bold text-[25px]">Your Cart</p>
                    {cartProducts.length !== 0 ?
                    <button onClick={() => {setTotalCheckout(true)}} className="py-[6px] px-[7px] border border-black hover:bg-black hover:text-white rounded-md transition-colors duration-200 ease-in-out">Checkout</button>
                    :
                    null
                    }
                </div>
                {cartProducts.length !== 0 ?
                <div className="grid grid-cols-1 pt-[60px] pb-[50px]">
                    {cartProducts.map((product, index) => {
                        return (
                            <div key={index} className="grid grid-cols-2 pb-[20px] border-b border-gray-400 py-[40px]">
                                <div className="flex">
                                    <img className="w-[150px] h-[180px] object-contain flex-shrink-0" src={product.productImage}></img>
                                    <div className="flex flex-col justify-around pl-[30px]">
                                        <p className="text-[18px] font-bold">{product.titleProduct}</p>
                                        <button onClick={() => {dispatch(DeleteProduct({userId: product.userId, index: index}))}}><img className="object-contain w-[20px] h-[20px]" src={BinIcon}></img></button>
                                    </div>
                                </div>
                                <div className="place-self-end flex flex-col justify-between h-full">
                                    <p className="self-center text-[18px] font-bold">{formatter.format(product.price * product.amount)}</p>
                                    <div className="flex justify-between items-center w-[100px] h-[40px] px-[10px]">
                                        <button onClick={() => {dispatch(plusAmountProduct({userId: product.userId, index: index}))}}><img className="object-contain w-[20px] h-[20px]" src={PlusIcon}></img></button>
                                        <p>{product.amount}</p>
                                        <button onClick={() => {dispatch(minusAmountProduct({userId: product.userId, index: index}))}}><img className="object-contain w-[20px] h-[20px]" src={MinusIcon}></img></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                :
                <div className="flex justify-center items-center h-[70vh]">
                    <p className="text-slate-500 text-[20px]">No products added to cart</p>
                </div>
                }
            </div>
           {totalCheckout ?
            <div className="flex justify-center items-center fixed bg-black bg-opacity-50 h-screen top-0 right-0 bottom-0 left-0 z-2">
                <div className="flex flex-col bg-white rounded-md">
                    <div className="flex justify-start pl-[20px] pt-[10px]">
                        <button onClick={() => setTotalCheckout(false)} className="mt-[10px] mr-[10px]"><img className="object-contain w-[15px] h-[15px]" src={CloseIcon}></img></button>
                    </div>
                    <div className="flex flex-col max-h-[400px] w-[800px] mt-[40px] rounded-md overflow-y-auto">
                        {cartProducts.map((product, index) => {
                            return (
                                <div key={index} className="flex justify-between py-[20px] px-[20px] border-b border-slate-400">
                                    <div className="flex gap-[30px]">
                                        <img className="w-[50px] h-[80px] object-contain flex-shrink-0" src={product.productImage}></img>
                                        <p className="text-[18px] font-bold self-center">{product.titleProduct}</p>
                                    </div>
                                    <div className="pt-[20px] flex-shrink-0">
                                        <p>x {product.amount}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex justify-between pb-[20px] pt-[30px] px-[20px]">
                        <p>Total: {formatter.format(totalPrice)}</p>
                        <button onClick={() => {setTotalCheckout(true)}} className="py-[6px] px-[7px] border border-black hover:bg-black hover:text-white rounded-md transition-colors duration-200 ease-in-out">Checkout</button>
                    </div>
                </div>
            </div>
            :
            null
            }
        </div>
    )
}

export default Cart