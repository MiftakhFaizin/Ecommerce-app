import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const DetailProduct = () => {
    const { id } = useParams()
    const dataProducts = useSelector(state => state.dataProducts)
    const dataToRender = dataProducts.filter(product => product.id == id)

    useEffect(() => {
        console.log(id)
    }, [])

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
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DetailProduct