"use client";

import Image from "next/image"
export default function ProductOverview() {

    return (
        <div className="mt-30 ml-5 mr-5">

            
            <div>
                <h1 className="md:text-[30px] xl:text-[30px] 2xl:text-[30px] sm:text-[20px]  text-center mb-5 font-bold" style={{ color: '#FF9800' }}>System Architecture Diagram</h1>
                <div className="flex justify-center">
                    <a
                        href="https://lucid.app/lucidchart/6393432c-4a1d-4bfc-ba5d-4481f24f53eb/edit?viewport_loc=-3156%2C-4813%2C15854%2C7496%2C0_0&invitationId=inv_8f37ff96-0b6a-4f26-adb2-5e7f63830814"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                        <div className="bg-white rounded-lg shadow-lg p-4 max-w-4xl">
                            <Image
                                src="/images/System architecture.png"
                                alt="System Architecture Diagram"
                                width={1700}
                                height={1500}
                                className="w-full h-auto rounded"
                            />
                            <p className="mt-3 text-sm sm:text-base text-black">
                                The system architecture illustrates how IddirNet's components interact, from the mobile app and web dashboard to the backend services and database. This design ensures scalability, security, and seamless data flow across all platform features.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
            
            <h1 className="md:text-[30px] xl:text-[30px] 2xl:text-[30px] sm:text-[20px] text-center mt-20 font-bold" style={{ color: '#FF9800' }}>Entity Relationship Diagram</h1>
<div className="flex flex-col gap-8">
    <div className="w-full leading-relaxed text-sm sm:text-base">
        <p className="text-center max-w-4xl mx-auto text-black">The ERD for IddirNet presents a well-structured database design that effectively supports the platform's core purpose: bringing
            transparency and efficiency to Ethiopian iddir communities. It clearly defines key entities such as users, iddirs, transactions, payments,
            and resources and establishes logical relationships between them. By linking members to their respective iddirs and tracking every financial
            contribution and resource rental, the model ensures accountability and reduces ambiguity. The inclusion of timestamps, status flags, and detailed
            transaction records supports both day-to-day operations and future reporting needs.</p>
    </div>
    <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105">
            <Image
                src="/images/ERD.png"
                alt="Entity Relationship Diagram"
                width={800}
                height={600}
                className="w-full h-auto rounded"
            />
        </div>
    </div>
</div>
        </div>
    )
}