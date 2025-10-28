import { FaArrowRight } from 'react-icons/fa';

export default function Testing() {
    return (
        <div
            className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-12 sm:space-y-16 font-sans"
            style={{ fontFamily: "'Nunito', sans-serif", color: '#171717' }}
        >
            <section className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="md:w-2/3">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#FF9800' }}>
                        Quality Assurance
                    </h1>
                    <p className="leading-relaxed text-black text-sm sm:text-base text-justify">
                        Testing ensures that IddirNet delivers a reliable, secure, and user-friendly experience to Ethiopian Iddir communities.
                        It verifies all features work as intended, integrates seamlessly with payment and location services, and meets
                        performance, security, and compliance standards for the community's trust and ease of use.
                    </p>

                    <a
                        href="https://iddirnet-75e4b810c131.herokuapp.com/swagger/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-4 text-[#1E2736] hover:underline font-semibold text-sm sm:text-base"
                    >
                        Click here to view full swagger documentation
                        <FaArrowRight className="ml-2" />
                    </a>
                </div>
                <div className="md:w-1/3 flex justify-center md:justify-end">
                    <img
                        src="images/swagger.png"
                        alt="Swagger Documentation"
                        className="w-full max-w-xs h-auto rounded-lg border-2 border-[#FF9800] shadow-lg"
                    />
                </div>
            </section>

            <section className="space-y-8">
                <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-20">

                    <div className="lg:w-1/3 bg-white text-[#1E2736] rounded-lg p-4 sm:p-6 shadow-md flex flex-col border-2 border-[#FF9800]">
                        <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: '#FF9800' }}>
                            Backend Testing
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                            <li>Functional APIs validation with Postman</li>
                            <li>Integration checks with Daraja & LocationIQ APIs</li>
                            <li>Load and performance tests using JMeter</li>
                            <li>Security vulnerability scans via OWASP ZAP</li>
                        </ul>
                    </div>

                    <div className="lg:w-1/3 bg-white text-[#1E2736] rounded-lg p-4 sm:p-6 shadow-md flex flex-col border-2 border-[#1E2736]">
                        <h2 className="text-lg sm:text-xl font-semibold mb-4">
                            Frontend Testing
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                            <li>Selenium automated UI and role-based access tests</li>
                            <li>Usability evaluations for admin dashboard</li>
                            <li>API data consumption and UI integration checks</li>
                            <li>Cross-browser compatibility tests (Chrome, Firefox)</li>
                        </ul>
                    </div>

                    <div className="lg:w-1/3 bg-white text-[#1E2736] rounded-lg p-4 sm:p-6 shadow-md flex flex-col border-2 border-[#FF9800]">
                        <h2 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: '#FF9800' }}>
                            Mobile Testing
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                            <li>Appium tests for member registration, payments, receipts</li>
                            <li>Usability testing on low-end devices for diverse users</li>
                            <li>Performance validation on Android devices</li>
                            <li>API integration checks with Daraja and LocationIQ</li>
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    );
}