export default function Products() {
    const products = [
        {
            name: "Informational website",
            imageUrl: "/images/informational website.png",
            link: "https://iddirnet.vercel.app/  ",
        },
        {
            name: "Dashboard",
            imageUrl: "/images/Dashboard(1).png",
            link: "https://iddirnet-beige.vercel.app/login  ",
        },
        {
            name: "Mobile App",
            imageUrl: "/images/Welcome(1).png",
            link: "",
        },
    ];
    
    return (
        <div className="mt-30 ml-5 mr-5">
            <h1 className="md:text-[30px] text-center mb-5 font-bold" style={{ color: '#FF9800' }}>Product Overview</h1>

            <div className="flex flex-wrap justify-center md:gap-3  xl:gap-20  lg:gap-15  2xl:gap-40     p-6 mb-15 ">
                {products.map((product) => (
                    <a
                        key={product.name}
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full sm:w-[240px] md:w-[223px] lg:w-[253px] 2xl:w-[450px] text-center transition-transform hover:scale-105"
                    >
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-62 object-cover"
                            />
                            <p className="mt-2 font-medium text-black text-[20px]">{product.name}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}