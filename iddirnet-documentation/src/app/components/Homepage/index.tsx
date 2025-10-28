import Image from "next/image"

export default function HomeSection() {
    return (
        <div
            className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8 sm:space-y-12 font-sans"
            style={{ fontFamily: "'Nunito', sans-serif", color: '#171717' }}
        >
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 mt-8">
                No more guesswork, just trust. <span className="text-orange-400">Just IddirNet.</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center mb-12">
                <div className="md:w-150 leading-relaxed text-sm sm:text-base text-justify">
                    <p>IddirNet is a digital platform built for Ethiopian communities called Iddirs, designed to modernize their
                        traditional systems. It brings accountability, clarity, and convenience to one of Ethiopia's most
                        cherished social institutions empowering members to manage contributions, track finances, and reserve shared
                        resources with full transparency.We bring communities together.IddirNet makes it easy to join,
                        support, and connect with others, sharing life's joys
                        and easing burdens all in one trusted space. We are  dedicated to strengthening the values of trust, transparency, and
                        solidarity within Ethiopian Iddirs.</p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                    <Image
                        src="/images/community and togetherness.jpg"
                        alt="Community and togetherness"
                        width={300}
                        height={200}
                        className="rounded-lg shadow-md"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="border border-orange-400 p-4 rounded-lg shadow-sm">
                    <p className="text-sm sm:text-base mb-3"> Every contribution, expense, and balance is recorded digitally, no more guesswork or disputes. </p>
                    <Image
                        src="/images/Contribution.jpeg"
                        alt="Contribution tracking"
                        width={120}
                        height={80}
                        className="mx-auto rounded"
                    />
                </div>

                <div className="border border-orange-400 p-4 rounded-lg shadow-sm">
                    <p className="text-sm sm:text-base mb-3">Members can easily check availability and reserve community assets without having to rely on word of mouth.</p>
                    <Image
                        src="/images/resources-removebg-preview.png"
                        alt="Resource management"
                        width={120}
                        height={80}
                        className="mx-auto rounded"
                    />
                </div>
                     
               
                <div className="border border-orange-400 p-4 rounded-lg shadow-sm">
                    <p className="text-sm sm:text-base mb-3">While modernizing them, IddirNet honors the core values of mutual aid and solidarity that defines iddirs.</p>
                    <Image
                        src="/images/mutual_solidarity-removebg-preview.png"
                        alt="Mutual solidarity"
                        width={120}
                        height={80}
                        className="mx-auto rounded"
                    />
                </div>
            </div>
        </div>
    )
}