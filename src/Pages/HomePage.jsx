import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import CartIcon from "../assets/shopping-cart-icon.png"

const HomePage = () => {
    const dataProducts = useSelector(state => state.dataProducts)
    const [dataToRender, setDataToRender] = useState([])
    const { category }  = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch("https://fakestoreapi.com/products")
            response = await response.json()
            dispatch({type: "ADD_DATA_PRODUCTS", payload: response})
        }
        dataProducts.length === 0 ? fetchData() : null
    }, [])

    useEffect(() => {
        category ? setDataToRender(dataProducts.filter(product => product.category === category)) : setDataToRender(dataProducts)
    }, [dataProducts, category])

    const handleAddToCart = (titleProduct, price, productImage) => {
        dispatch({type: "ADD_TO_CART", payload: {titleProduct: titleProduct, price: price, amount: 1, productImage: productImage}})
    }

    return (
        <div className="flex justify-center px-[40px] min-h-screen">
            <div className="container pt-[100px] pb-[50px]">
                <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-[15px] gap-y-[20px]">
                    {dataToRender.map((product, index) => {
                        return (
                            <div key={index} className="flex flex-col shadow-sm shadow-slate-800 rounded-md h-[450px] gap-[20px] px-[20px]">
                                <img className="w-full h-[250px] py-[10px] object-contain" src={product.image}></img>
                                <div className="flex flex-col h-[80px] gap-[10px] pl-[20px]">
                                    <p className="text-black font-bold w-[200px] h-[50px] line-clamp-2">{product.title}</p>
                                    <p className="text-black h-[20px]">${product.price}</p>
                                </div>
                                <div className="flex justify-between px-[20px]">
                                    <button className="py-[6px] px-[7px] border border-black hover:bg-black hover:text-white rounded-md transition-colors duration-200 ease-in-out"><Link to={`/detail-product/${product.id}`}>Detail Product</Link></button>
                                    <button onClick={() => {handleAddToCart(product.title, product.price, product.image)}} className="self-center"><img className="object-contain w-[20px] h-[20px]" src={CartIcon}></img></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HomePage