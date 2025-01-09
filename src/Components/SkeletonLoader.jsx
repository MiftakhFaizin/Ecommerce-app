export const SkeletonLoaderHomePage = () => {
        
    return (
        Array.from({length: 20}).map((_, index) => {
            return (
                <div key={index} className="flex flex-col h-[450px] gap-[20px] px-[20px] animate-pulse">
                    <div className="w-full h-[250px] py-[10px] bg-gray-200"></div>
                    <div className="flex flex-col h-[80px] gap-[10px]">
                        <div className="h-[18px] w-full bg-gray-200"></div>
                        <div className="h-[18px] w-full bg-gray-200"></div>
                    </div>
                </div>
             )           
        })
    )
}

export const SkeletonLoaderDetailProduct = () => {
    return (
        <div className="container px-[40px] pt-[50px] animate-pulse">
            <div className="flex justify-center gap-[50px] py-[60px]">
                <div className=" w-[400px] h-[300px] bg-gray-200"></div>
                <div className="flex flex-col gap-6 w-[500px]">
                    <div className="h-[25px] w-[300px] bg-gray-200 rounded-md"></div>
                    <div className="h-[25px] w-[100px] bg-gray-200 rounded-md"></div>
                    <div className="h-[25px] w-[500px] bg-gray-200 rounded-md"></div>
                    <div className="h-[25px] w-[500px] bg-gray-200 rounded-md"></div>
                    <div className="h-[25px] w-[500px] bg-gray-200 rounded-md"></div>
                </div>
            </div>
        </div>
    )
}
