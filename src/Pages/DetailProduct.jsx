import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import checkIcon from "../assets/green-checkmark-icon.png"
import { useEffect, useState } from "react"
import AlertLogin from "../Components/AlertLogin"
import { addToCart } from "../redux/Slices"
import { SkeletonLoaderDetailProduct } from "../Components/SkeletonLoader"

const DetailProduct = () => {
    const userLogin = useSelector(state => state.auth.login)
    const userId = useSelector(state => state.auth.userId)
    const { id } = useParams()
    const [dataProduct, setDataProduct] = useState([])
    const dispatch = useDispatch()
    const idProductstCart = useSelector(state => state.cart).find(product => product.userId === userId).products.map(product => product.idProduct)
    const [alertLogin, setAlertLogin] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleAddToCart = (idProduct, titleProduct, price, productImage) => {
        userLogin ? 
        dispatch(addToCart({userId: userId, idProduct: idProduct, titleProduct: titleProduct, price: price, amount: 1, productImage: productImage}))
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
                setDataProduct(response)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        
        fetchDataProduct()
    }, [])

    return (
        <div className="flex justify-center">
            {loading ? 
            <SkeletonLoaderDetailProduct />
            :
            <div className="container px-[40px] pt-[50px]">
                <div className="flex justify-center gap-[50px] py-[60px]">
                    <img className=" w-[400px] h-[300px] object-contain" src={dataProduct.image}></img>
                    <div className="flex flex-col gap-6 w-[500px]">
                        <p className="font-bold text-[25px]">{dataProduct.title}</p>
                        <p className="font-semibold text-[25px]">${dataProduct.price}</p>
                        <p className="text-[16px] text-slate-600 text-justify">{dataProduct.description}</p>
                        {idProductstCart.includes(dataProduct.id) ? 
                        <button disabled className="flex justify-center items-center gap-2 mt-[20px] py-[10px] px-[20px] bg-black text-white rounded-md">Already In Cart <img className="inline object-contain w-[20px] h-[18px]" src={checkIcon}></img></button>
                        :
                        <button onClick={() => {handleAddToCart(dataProduct.id, dataProduct.title, dataProduct.price, dataProduct.image)}} className="mt-[20px] py-[10px] px-[20px] bg-black hover:bg-gray-800 text-white rounded-md">Add To Cart</button>
                        }
                    </div>
                </div>
            </div>
            }
            
            {alertLogin ?
            <AlertLogin closeAlertLogin={closeAlertLogin} />
            :
            null
            }
        </div>
    )
}

export default DetailProduct