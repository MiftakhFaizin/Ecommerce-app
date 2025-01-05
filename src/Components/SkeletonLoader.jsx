const SkeletonLoader = () => {
        
    return (
        Array.from({length: 20}).map((_, index) => {
            return (
                <div key={index} className="flex flex-col h-[450px] gap-[20px] px-[20px] animate-pulse">
                    <div className="w-full h-[250px] py-[10px] bg-gray-200"></div>
                    <div className="flex flex-col h-[80px] gap-[10px]">
                        <div className="h-[18px] w-full bg-gray-200"></div>
                        <div className="h-[18px] w-full bg-gray-200"></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="w-[90px] h-[30px] bg-gray-200 rounded-md"></div>
                        <div className="h-[20px] w-[20px] rounded-[50%] bg-gray-200"></div>
                    </div>
                </div>
             )           
        })
    )
}

export default SkeletonLoader