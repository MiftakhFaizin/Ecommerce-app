import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import CartIcon from "../assets/shopping-cart-icon.png"
import CartIconSucces from "../assets/check-out-icon.png"
import { addDataProducts, addToCart } from "../redux/Slices"
import { SkeletonLoaderHomePage } from "../Components/SkeletonLoader"

const HomePage = () => {
    const userLogin = useSelector(state => state.auth.login)
    const userId = useSelector(state => state.auth.userId)
    const dataProducts = useSelector(state => state.dataProducts)
    const [dataToRender, setDataToRender] = useState([])
    const cart = useSelector(state => state.cart)
    const idProductsCart = useMemo(() => {
        const cartForUserId = cart.find(product => product.userId === userId)
        return cartForUserId ? cartForUserId.products.map(product => product.idProduct) : []
    }, [userId, cart])
    const { category }  = useParams()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [tryAgainButton, setTryAgainButton] = useState(false)

    const handleAddToCart = (idProduct, titleProduct, price, productImage) => {
        dispatch(addToCart({userId: userId, idProduct: idProduct, titleProduct: titleProduct, price: price, amount: 1, productImage: productImage}))
    }

    useEffect(() => {
        const fetchDataProduct = async () => {
            try {
                setError(false)
                setLoading(true)
                let response = await fetch(`https://fakestoreapi.com/products`)
                response = await response.json()
                response && dispatch(addDataProducts(response))
            } catch (err) {
                setError(true)
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        
        dataProducts.length === 0 && fetchDataProduct()
    }, [tryAgainButton])

    useEffect(() => {
        category ? setDataToRender(dataProducts.filter(product => product.category === category)) : setDataToRender(dataProducts)
    }, [dataProducts, category])


    return (
        <div className="flex justify-center min-h-screen">
            <div className="container px-[40px] pt-[100px] pb-[50px]">
                <div className={error === false ? "grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-[15px] gap-y-[20px]" : ""}>
                    {!loading ? 
                    error ?
                    <div className="container h-[50vh] flex justify-center items-center">
                        <div className="flex flex-col gap-5">
                            <p className="text-slate-500 text-[18px]">Failed to load data</p>
                            <button onClick={() => {setTryAgainButton(!tryAgainButton)}} className="px-[3px] py-[7px] bg-black hover:bg-slate-900 text-white rounded-md">Try Again</button>
                        </div>
                    </div>
                    :
                    dataToRender.map((product, index) => {
                        return (
                            <div key={index} className="flex flex-col shadow-sm shadow-slate-800 rounded-md h-[400px] gap-[20px] px-[20px]">
                                <img className="w-full h-[200px] py-[10px] object-contain" src={product.image}></img>
                                <div className="flex flex-col h-[80px] gap-[10px]">
                                    <p className="text-black font-bold w-full h-[50px] line-clamp-2">{product.title}</p>
                                    <p className="text-black h-[20px]">${product.price}</p>
                                </div>
                                <div className="flex justify-between">
                                    <button className="py-[6px] px-[7px] border border-black hover:bg-black hover:text-white rounded-md transition-colors duration-200 ease-in-out"><Link to={`/detail-product/${product.id}`}>Detail Product</Link></button>
                                    {idProductsCart.includes(product.id) ?
                                    <button><img className="object-contain w-[20px] h-[20px]" src={CartIconSucces}></img></button>
                                    :
                                    userLogin ? <button onClick={() => {handleAddToCart(product.id, product.title, product.price, product.image)}}><img className="object-contain w-[20px] h-[20px]" src={CartIcon}></img></button> : null
                                    }
                                </div>
                            </div>
                        )
                    })
                    :
                    <SkeletonLoaderHomePage />
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage