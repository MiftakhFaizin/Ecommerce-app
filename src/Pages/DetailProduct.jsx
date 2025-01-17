import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import checkIcon from "../assets/green-checkmark-icon.png"
import { useEffect, useState, useMemo } from "react"
import AlertLogin from "../Components/AlertLogin"
import { addToCart } from "../redux/Slices"
import { SkeletonLoaderDetailProduct } from "../Components/SkeletonLoader"

const DetailProduct = () => {
    const userLogin = useSelector(state => state.auth.login)
    const userId = useSelector(state => state.auth.userId)
    const { id } = useParams()
    const dataProducts = useSelector(state => state.dataProducts)
    const [dataProduct, setDataProduct] = useState({})
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const idProductsCart = useMemo(() => {
        const cartForUserId = cart.find(product => product.userId === userId)
        return cartForUserId ? cartForUserId.products.map(product => product.idProduct) : []
    }, [userId, cart])
    const [alertLogin, setAlertLogin] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [tryAgainButton, setTryAgainButton] = useState(false)

    const handleAddToCart = (idProduct, titleProduct, price, productImage) => {
        userLogin ? 
        dispatch(addToCart({userId, idProduct, titleProduct, price, amount: 1, productImage}))
        :
        setAlertLogin(true)
    }

    const closeAlertLogin = () => {
        setAlertLogin(false)
    }

    useEffect(() => {
        const fetchDataProduct = async () => {
            try {
                setLoading(true)
                let response = await fetch(`https://fakestoreapi.com/products/${id}`)
                response = await response.json()
                response && setError(false)
                setDataProduct(response)
            } catch (err) {
                setError(true)
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        
        dataProducts.length === 0 ? fetchDataProduct() : setDataProduct(dataProducts.find(product => product.id === Number(id)))
    }, [tryAgainButton])

    return (
        <div className="flex justify-center">
            {loading ? 
            <SkeletonLoaderDetailProduct />
            : error ?
            <div className="container h-[80vh] flex justify-center items-center">
                <div className="flex flex-col gap-5">
                    <p className="text-slate-500 text-[18px]">Failed to load data</p>
                    <button onClick={() => {setTryAgainButton(!tryAgainButton)}} className="px-[7px] py-[7px] bg-black hover:bg-slate-900 text-white rounded-md">Try Again</button>
                </div>
            </div>
            :
            <div className="container px-[40px] pt-[50px]">
                <div className="flex max-md:flex-col justify-center max-md:items-center gap-[50px] py-[60px]">
                    <img className=" w-[400px] h-[300px] max-md:w-[200px] max-md:h-[150px] object-contain" src={dataProduct.image}></img>
                    <div className="flex flex-col gap-6 w-[500px] max-md:w-full">
                        <p className="font-bold text-[25px]">{dataProduct.title}</p>
                        <p className="font-semibold text-[25px]">${dataProduct.price}</p>
                        <p className="text-[16px] text-slate-600 text-justify">{dataProduct.description}</p>
                        {idProductsCart.includes(dataProduct.id) ? 
                        <button disabled className="flex justify-center items-center gap-2 mt-[20px] py-[10px] px-[20px] bg-black text-white rounded-md">Already In Cart <img className="inline object-contain w-[20px] h-[18px]" src={checkIcon}></img></button>
                        :
                        <button onClick={() => {handleAddToCart(dataProduct.id, dataProduct.title, dataProduct.price, dataProduct.image)}} className="mt-[20px] py-[10px] px-[20px] bg-black hover:bg-gray-800 text-white rounded-md">Add To Cart</button>
                        }
                    </div>
                </div>
            </div>
            }
            
            {alertLogin &&
            <AlertLogin closeAlertLogin={closeAlertLogin} />
            }
        </div>
    )
}

export default DetailProduct