'use client';

import { FaArrowRight } from 'react-icons/fa';

export default function Testing() {
  return (
    <div
      className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8 sm:space-y-12 font-sans 2xl:ml-105 xl:ml-75"
      style={{ fontFamily: "'Nunito', sans-serif", color: '#171717' }}
    >
      <section className="flex flex-col md:flex-row gap-6 md:gap-16 lg:gap-60 items-center">
        <div className="2xl:w-[700px] xl:w-[410px] space-y-5">
          <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: '#FF9800' }}>
            Quality Assurance
          </h1>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-justify">
            Testing ensures that IddirNet delivers a reliable, secure, and user-friendly experience to Ethiopian Iddir communities.
            It verifies all features work as intended, integrates seamlessly with payment and location services, and meets
            performance, security, and compliance standards for the community's trust and ease of use.
          </p>

          <a
            href="https://iddirnet-75e4b810c131.herokuapp.com/swagger/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-2 group font-semibold text-base text-orange-400"
          >
            Click here to view full swagger documentation
            <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Enhanced Full-Width Swagger Image */}
        <div className="md:w-1/3 flex justify-center">
          <div className="w-full max-w-md">
            <div className="relative group">
              <img
                src="/images/swagger.png"
                alt="Swagger API Documentation Preview"
                className="w-full h-auto rounded-xl border-2 border-[#FF9800] shadow-lg transition-transform duration-300 hover:scale-102"
              />
              {/* Preview Badge */}
              <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                Preview
              </div>
              {/* Lock Icon */}
              <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm6-8V5a2 2 0 00-2-2H8a2 2 0 00-2 2v2h8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Categories */}
      <section className="mt-16 sm:mt-20 2xl:max-w-[1400px] xl:max-w-[900px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-16">
          {/* Backend Testing */}
          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-[#FF9800] hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4" style={{ color: '#FF9800' }}>
              Backend Testing
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#FF9800] mr-2">•</span>
                <span>Functional APIs validation with Postman</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9800] mr-2">•</span>
                <span>Integration checks with Daraja & LocationIQ APIs</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9800] mr-2">•</span>
                <span>Load and performance tests using JMeter</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9800] mr-2">•</span>
                <span>Security vulnerability scans via OWASP ZAP</span>
              </li>
            </ul>
          </div>

          {/* Frontend Testing */}
          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-800 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Frontend Testing
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                <span>Selenium automated UI and role-based access tests</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                <span>Usability evaluations for admin dashboard</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                <span>API data consumption and UI integration checks</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-800 mr-2">•</span>
                <span>Cross-browser compatibility tests (Chrome, Firefox)</span>
              </li>
            </ul>
          </div>

          {/* Mobile Testing */}
          <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-[#FF9800] hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-4" style={{ color: '#FF9800' }}>
              Mobile Testing
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#FF9800] mr-2">•</span>
                <span>Appium tests for member registration, payments, receipts</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9800] mr-2">•</span>
                <span>Usability testing on low-end devices for diverse users</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9800] mr-2">•</span>
                <span>Performance validation on Android devices</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9800] mr-2">•</span>
                <span>API integration checks with Daraja and LocationIQ</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Unit Testing Section */}
      <section className="mt-16 sm:mt-20 2xl:max-w-[1400px] xl:max-w-[900px]">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#FF9800' }}>
          Unit Tests
        </h2>
        
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Django TestCase for models, views, and business logic (e.g., stock deduction, role permissions).
          </p>
          
          <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm">
              <code>{`python manage.py test
# Runs tests in feedlink_back_end/tests/`}</code>
            </pre>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Include tests for: is_edible=False routing, JWT role validation, and payment status updates.
          </p>
        </div>
      </section>

      {/* Integration Testing Section */}
      <section className="mt-16 sm:mt-20 2xl:max-w-[1400px] xl:max-w-[900px]">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#FF9800' }}>
          Integration Testing
        </h2>
        
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Comprehensive Postman collection covering auth, listings, orders, and M-Pesa simulation.
          </p>
          
          <a
            href="https://documenter.getpostman.com/view/45526338/2sB3HqHdvd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-semibold text-base text-orange-400 hover:text-orange-500 transition-colors"
          >
            View Postman Tests
            <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </a>
          
          <p className="text-gray-700 leading-relaxed">
            Includes: Sample M-Pesa callback payload for testing /api/payments/callback/
          </p>
        </div>
      </section>
    </div>
  );
}