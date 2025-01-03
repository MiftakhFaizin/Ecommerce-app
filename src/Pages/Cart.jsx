import PlusIcon from "../assets/plus-round-line-icon.png"
import MinusIcon from "../assets/minus-round-line-icon.png"
import { useDispatch, useSelector } from "react-redux"

const Cart = () => {
    const cartProduct = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    });

    const handlePlusAmount = (index) => {
        let newCartProduct = [...cartProduct]
        newCartProduct[index].amount++
        dispatch({type: "UPDATE_CART", payload: newCartProduct})
    }

    const handleMinusAmount = (index) => {
        let newCartProduct = [...cartProduct]
        newCartProduct[index].amount !== 1 ? newCartProduct[index].amount-- : null
        dispatch({type: "UPDATE_CART", payload: newCartProduct})
    }

    return (
        <div className="flex justify-center">
            <div className="container px-[40px] pt-[60px]">
                <p className="font-bold text-[25px]">Your Cart</p>
                <div className="grid grid-cols-1 pt-[60px] pb-[50px]">
                    {cartProduct.map((product, index) => {
                        return (
                            <div key={index} className="grid grid-cols-2 pb-[20px] border-b border-gray-400 py-[40px]">
                                <div className="flex gap-5">
                                    <img className="w-[150px] h-[180px] object-contain" src={product.productImage}></img>
                                    <div className="flex justify-center flex-col gap-5">
                                        <p className="text-[18px] font-bold">{product.titleProduct}</p>
                                    </div>
                                </div>
                                <div className="place-self-end flex flex-col justify-between h-full">
                                    <p className="self-center text-[18px] font-bold">{formatter.format(product.price * product.amount)}</p>
                                    <div className="flex justify-between items-center w-[100px] h-[40px] px-[10px]">
                                        <button onClick={() => {handlePlusAmount(index)}}><img className="object-contain w-[20px] h-[20px]" src={PlusIcon}></img></button>
                                        <p>{product.amount}</p>
                                        <button onClick={() => {handleMinusAmount(index)}}><img className="object-contain w-[20px] h-[20px]" src={MinusIcon}></img></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cart