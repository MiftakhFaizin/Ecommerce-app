import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const HomePage = () => {
    const dataProducts = useSelector(state => state.dataProducts)
    const [dataProductsFiltered, setDataProductFiltered] = useState([])
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
        category ? setDataProductFiltered(dataProducts.filter(product => product.category === category)) : setDataProductFiltered(dataProducts)
    }, [dataProducts, category])

    return (
        <div className="flex justify-center px-[40px]">
            <div className="container pt-[100px]">
                <div className="grid grid-cols-4 gap-12">
                    {dataProductsFiltered.map((product, index) => {
                        return (
                            <div key={index} className="flex flex-col w-full h-[500px] gap-[20px]">
                                <img className="w-full h-[250px] border border-slate-500 shadow-sm shadow-slate-600 rounded-md py-[20px] px-[30px]" src={product.image}></img>
                                <div className="flex flex-col h-[80px] gap-[10px]">
                                    <p className="text-black font-bold h-[50px] line-clamp-2">{product.title}</p>
                                    <p className="text-black h-[20px]">{`$ ${product.price}`}</p>
                                </div>
                                <div className="flex">
                                    <button className="py-[6px] px-[7px] border border-black hover:bg-black hover:text-white rounded-md transition-colors duration-200 ease-in-out">Detail Product</button>
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