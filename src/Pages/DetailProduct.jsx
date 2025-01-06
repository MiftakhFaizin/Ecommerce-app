import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import checkIcon from "../assets/green-checkmark-icon.png"
import { useState } from "react"
import AlertLogin from "../Components/AlertLogin"

const DetailProduct = () => {
    const userLogin = localStorage.login ? true : false
    const { id } = useParams()
    const dispatch = useDispatch()
    const dataProducts = useSelector(state => state.dataProducts)
    const dataToRender = dataProducts.filter(product => product.id == id)
    const idProductstCart = useSelector(state => state.cart).map(product => product.id)
    const [alertLogin, setAlertLogin] = useState(false)

    const handleAddToCart = (idProduct, titleProduct, price, productImage) => {
        userLogin ? 
        dispatch({type: "ADD_TO_CART", payload: {id: idProduct, titleProduct: titleProduct, price: price, amount: 1, productImage: productImage}})
        :
        setAlertLogin(true)
    }

    const closeAlertLogin = () => {
        setAlertLogin(false)
    }

    return (
        <div className="flex justify-center">
            <div className="container px-[40px] pt-[50px]">
                {dataToRender.map((product, index) => {
                    return (
                        <div key={index} className="flex justify-center gap-[50px] py-[60px]">
                            <img className=" w-[400px] h-[300px] object-contain" src={product.image}></img>
                            <div className="flex flex-col gap-6 w-[500px]">
                                <p className="font-bold text-[25px]">{product.title}</p>
                                <p className="font-semibold text-[25px]">${product.price}</p>
                                <p className="text-[16px] text-slate-600 text-justify">{product.description}</p>
                                {idProductstCart.includes(product.id) ? 
                                <button disabled className="flex justify-center items-center gap-2 mt-[20px] py-[10px] px-[20px] bg-black text-white rounded-md">Already In Cart <img className="inline object-contain w-[20px] h-[18px]" src={checkIcon}></img></button>
                                :
                                <button onClick={() => {handleAddToCart(product.id, product.title, product.price, product.image)}} className="mt-[20px] py-[10px] px-[20px] bg-black hover:bg-gray-800 text-white rounded-md">Add To Cart</button>
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
            {alertLogin ?
            <AlertLogin closeAlertLogin={closeAlertLogin} />
            :
            null
            }
        </div>
    )
}

export default DetailProduct