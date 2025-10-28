"use client";
import React from "react";

export default function NamingConventions() {
  return (
    <div
      className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8 sm:space-y-12 font-sans 2xl:ml-85 xl:ml-67"
      style={{ fontFamily: "'Nunito', sans-serif", color: '#171717' }}
    >
    
      <section className="flex flex-col md:flex-row gap-6 md:gap-16 lg:gap-60 items-center ">
        <div className=" space-y-5">
          <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: '#FF9800' }}>
            Naming Conventions & Coding Standards
          </h1>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-justify 2xl:ml-0 2xl:w-[1100px]  xl:w-[900px] ">
            Consistent naming conventions and coding standards are essential for maintaining code quality,
            readability, and collaboration across the IddirNet platform. These standards ensure that all team members
            can easily understand and work with the codebase, regardless of which component they are focusing on.
            By following these guidelines, we create a unified development experience that supports scalability
            and long-term maintenance of the platform.
          </p>
        </div>
      </section>

 
      <section className="mt-16 sm:mt-20 2xl:max-w-[1400px] xl:max-w-[900px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="flex flex-col gap-6 sm:gap-8">
            <section className="bg-[#0c1929] text-white rounded-md border border-[#B88704] p-4 sm:p-5 shadow-sm">
              <h2 className="text-xl sm:text-3xl font-light mb-3 sm:mb-4">Frontend</h2>
              <p className="text-lg sm:text-2xl mb-2">Structure & Functions</p>
              <ul className="list-disc pl-5 mb-3 space-y-1 text-sm sm:text-base">
                <li>
                  Uses functional components (
                  <span className="font-mono text-xs sm:text-sm">function ComponentName() &#123; ... &#125;</span>).
                </li>
                <li>
                  Uses React hooks (
                  <span className="font-mono text-xs sm:text-sm">useState</span>, <span className="font-mono text-xs sm:text-sm">useEffect</span>,{" "}
                  <span className="font-mono text-xs sm:text-sm">useMemo</span>).
                </li>
                <li>
                  Custom hooks are in <span className="font-mono text-xs sm:text-sm">hooks/</span> and follow the{" "}
                  <span className="font-mono text-xs sm:text-sm">useX</span> naming convention.
                </li>
                <li>
                  File/folder naming is <span className="font-mono text-xs sm:text-sm">camelCase</span> (
                  <span className="italic">shared-components/Header/index.js</span>).
                </li>
              </ul>
              <p className="text-lg sm:text-2xl mb-2">Naming Conventions</p>
              <ul className="list-disc pl-5 mb-3 space-y-1 text-sm sm:text-base">
                <li>
                  Functions: <span className="font-mono text-xs sm:text-sm">camelCase</span> (
                  <span className="italic">handleChange, togglePasswordVisibility</span>)
                </li>
                <li>
                  Components: <span className="font-mono text-xs sm:text-sm">PascalCase</span> (
                  <span className="italic">LoginPage, ProductsIndex</span>)
                </li>
                <li>
                  Variables: <span className="font-mono text-xs sm:text-sm">camelCase</span> (
                  <span className="italic">sidebarOpen, showModal</span>)
                </li>
              </ul>
              <p className="text-lg sm:text-2xl"> Standards</p>
              <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
                <li>
                  <b>Exports:</b> Default export for components.
                </li>
                <li>
                  <b>Code is modular:</b> Each component, hook, utility in its own file.
                </li>
                <li>
                  <b>Styles:</b> Component-specific CSS files.
                </li>
                <li>
                  <b>Test files:</b> Located with <span className="font-mono text-xs sm:text-sm">.test.js</span> extension and use Jest/RTL.
                </li>
              </ul>
            </section>
            <section className="bg-white text-[#0D3B3A] rounded-md border border-[#B88704] p-4 sm:p-5 shadow-sm">
              <h2 className="text-xl sm:text-3xl font-light mb-3 sm:mb-4 tracking-wide">Mobile</h2>
              <p className="text-lg sm:text-2xl mb-2">Structure & Functions</p>
              <ul className="list-disc pl-5 mb-3 space-y-1 text-sm sm:text-base">
                <li>Methods are defined with language-specific syntax (e.g., <span className="font-mono text-xs sm:text-sm">fun</span> in Kotlin).</li>
                <li>Uses clear, descriptive documentation comments (e.g., in Kotlin).</li>
                <li>Network/data operations use dedicated classes (e.g., <span className="font-mono text-xs sm:text-sm">ApiInterface</span>, <span className="font-mono text-xs sm:text-sm">Repository</span>).</li>
              </ul>
              <p className="text-lg sm:text-2xl mb-2">Naming Conventions</p>
              <ul className="list-disc pl-5 mb-3 space-y-1 text-sm sm:text-base">
                <li>
                  Methods/Functions: <span className="font-mono text-xs sm:text-sm">camelCase</span> (
                  <span className="italic">fetchUserData()</span>)
                </li>
                <li>
                  Classes: <span className="font-mono text-xs sm:text-sm">PascalCase</span> (
                  <span className="italic">UserProfileViewModel, PaymentService</span>)
                </li>
                <li>
                  Variables: <span className="font-mono text-xs sm:text-sm">camelCase</span> (
                  <span className="italic">userName, isLoading</span>)
                </li>
                <li>
                  UI Elements: Type-prefixed <span className="font-mono text-xs sm:text-sm">camelCase</span> (
                  <span className="italic">submitButton, emailTextField</span>)
                </li>
              </ul>
              <p className="text-lg sm:text-2xl">Standards</p>
              <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
                <li>Explicit error handling with platform-specific patterns (e.g., <span className="font-mono text-xs sm:text-sm">try/catch</span>).</li>
                <li>Structured logging via platform frameworks (e.g., <span className="font-mono text-xs sm:text-sm">Logcat</span>, Crashlytics).</li>
                <li>Type annotations for parameters/returns (e.g., <span className="font-mono text-xs sm:text-sm">String?</span>, <span className="font-mono text-xs sm:text-sm">List&lt;User&gt;</span>).</li>
                <li>Modular architecture: Separate UI, business logic, and data layers (MVVM/MVP).</li>
                <li>Resource management (e.g., <span className="font-mono text-xs sm:text-sm">res/drawable</span>).</li>
                <li>Dependency injection for testability (e.g., Koin).</li>
                <li>Platform-specific best practices (e.g., <span className="font-mono text-xs sm:text-sm">ViewModel</span> in Jetpack).</li>
              </ul>
            </section>
          </div>
          <div className="flex flex-col gap-6 sm:gap-8">
            <section className="flex items-center justify-center border border-[#B88704] rounded-md bg-white p-32 sm:p-36 shadow-sm min-h-[600px]">
              <h1 className="text-2xl sm:text-4xl font-bold text-[#0D3B3A] text-center leading-relaxed">
                Naming
                <br />
                Conventions &amp;
                <br />
                Coding Standards
              </h1>
            </section>
            <section className="bg-[#0c1929] text-white rounded-md border border-cyan-800 p-4 sm:p-5 pb-40 shadow-sm min-h-[770px]">
              <h2 className="text-xl sm:text-3xl font-light mb-3 sm:mb-4 tracking-wide">Backend</h2>
              <p className="text-lg sm:text-2xl mb-2">Structure & Functions</p>
              <ul className="list-disc pl-5 mb-3 space-y-1 text-sm sm:text-base">
                <li>Uses Django conventions: <span className="font-mono text-xs sm:text-sm">views</span>, <span className="font-mono text-xs sm:text-sm">models</span>, and URL routing.</li>
                <li>Functions are defined using <span className="font-mono text-xs sm:text-sm">def</span> and follow <span className="font-mono text-xs sm:text-sm">snake_case</span>.</li>
                <li>URL config in <span className="font-mono text-xs sm:text-sm">urls.py</span> uses descriptive names for routes.</li>
              </ul>
              <p className="text-lg sm:text-2xl mb-2">Naming Conventions</p>
              <ul className="list-disc pl-5 mb-3 space-y-1 text-sm sm:text-base">
                <li>
                  Functions: <span className="font-mono text-xs sm:text-sm">snake_case</span> (<span className="italic">get_user_data</span>)
                </li>
                <li>
                  Classes (if present): <span className="font-mono text-xs sm:text-sm">PascalCase</span> (<span className="italic">UserProfileView</span>)
                </li>
                <li>Variables: <span className="font-mono text-xs sm:text-sm">snake_case</span></li>
              </ul>
              <p className="text-lg sm:text-2xl">Standards</p>
              <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
                <li>Modular apps and clear separation of concerns.</li>
                <li>Default Django documentation style for files.</li>
                <li>Uses Django's recommended import structure.</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}



