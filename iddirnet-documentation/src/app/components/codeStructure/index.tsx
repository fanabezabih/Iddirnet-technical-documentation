"use client";
import React from "react";


export default function NamingConventions() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center py-10 px-2 md:px-12">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-25" style={{ gridAutoRows: '1fr' }}>
        <div className="flex flex-col gap-8">
          <section className="bg-[#B88704] text-white xl:w-155 rounded-md border border-[#B88704] p-5 shadow-md h-full">
            <h2 className="text-3xl md:text-5xl font-light mb-4">Frontend</h2>

            <p className="md:text-3xl">Structure & Functions</p>
            <ul className="list-disc pl-6 mb-4 space-y-1 md:text-xl text-base">
              <li>
                Uses functional components (
                <span className="font-mono">function ComponentName() &#123; ... &#125;</span>).
              </li>
              <li>
                Uses React hooks (
                <span className="font-mono">useState</span>, <span className="font-mono">useEffect</span>,{" "}
                <span className="font-mono">useMemo</span>).
              </li>
              <li>
                Custom hooks are in <span className="font-mono">hooks/</span> and follow the{" "}
                <span className="font-mono">useX</span> naming convention.
              </li>
              <li>
                File/folder naming is <span className="font-mono">camelCase</span> (
                <span className="italic">shared-components/Header/index.js</span>).
              </li>
            </ul>

            <p className="md:text-3xl">Naming Conventions</p>
            <ul className="list-disc pl-6 mb-4 space-y-1 md:text-xl text-base">
              <li>
                Functions: <span className="font-mono">camelCase</span> (
                <span className="italic">handleChange, togglePasswordVisibility</span>)
              </li>
              <li>
                Components: <span className="font-mono">PascalCase</span> (
                <span className="italic">LoginPage, ProductsIndex</span>)
              </li>
              <li>
                Variables: <span className="font-mono">camelCase</span> (
                <span className="italic">sidebarOpen, showModal</span>)
              </li>
            </ul>

            <p className="md:text-3xl"> Standards</p>
            <ul className="list-disc pl-6 space-y-1 md:text-xl text-base">
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
                <b>Test files:</b> Located with <span className="font-mono">.test.js</span> extension and use Jest/RTL.
              </li>
            </ul>
          </section>

          <section className="bg-white text-[#0D3B3A] rounded-md border border-[#B88704] p-8 shadow-md h-full">
            <h2 className="text-2xl md:text-5xl font-light mb-4 tracking-wide">Mobile</h2>

            <p className="text-xl md:text-3xl">Structure & Functions</p>
            <ul className="list-disc md:text-xl pl-6 mb-4 text-base">
              <li>Methods are defined with language-specific syntax (e.g., <span className="font-mono">fun</span> in Kotlin).</li>
              <li>Uses clear, descriptive documentation comments (e.g., in Kotlin).</li>
              <li>Network/data operations use dedicated classes (e.g., <span className="font-mono">ApiInterface</span>, <span className="font-mono">Repository</span>).</li>
            </ul>
            
            <p className="text-xl md:text-3xl">Naming Conventions</p>
            <ul className="list-disc pl-6 mb-4 md:text-xl text-base">
              <li>
                Methods/Functions: <span className="font-mono">camelCase</span> (
                <span className="italic">fetchUserData()</span>)
              </li>
              <li>
                Classes: <span className="font-mono">PascalCase</span> (
                <span className="italic">UserProfileViewModel, PaymentService</span>)
              </li>
              <li>
                Variables: <span className="font-mono">camelCase</span> (
                <span className="italic">userName, isLoading</span>)
              </li>
              <li>
                UI Elements: Type-prefixed <span className="font-mono">camelCase</span> (
                <span className="italic">submitButton, emailTextField</span>)
              </li>
            </ul>
            
            <p className="text-xl md:text-3xl">Standards</p>
            <ul className="list-disc pl-6 md:text-xl text-base">
              <li>Explicit error handling with platform-specific patterns (e.g., <span className="font-mono">try/catch</span>).</li>
              <li>Structured logging via platform frameworks (e.g., <span className="font-mono">Logcat</span>, Crashlytics).</li>
              <li>Type annotations for parameters/returns (e.g., <span className="font-mono">String?</span>, <span className="font-mono">List&lt;User&gt;</span>).</li>
              <li>Modular architecture: Separate UI, business logic, and data layers (MVVM/MVP).</li>
              <li>Resource management (e.g., <span className="font-mono">res/drawable</span>).</li>
              <li>Dependency injection for testability (e.g., Koin).</li>
              <li>Platform-specific best practices (e.g., <span className="font-mono">ViewModel</span> in Jetpack).</li>
            </ul>
          </section>
        </div>

        <div className="flex flex-col gap-8">
          <section className="flex items-center justify-center border border-[#B88704] rounded-md bg-white p-10 shadow-md h-full">
            <h1 className="lg:text-5xl text-4xl 2xl:text-6xl font-bold text-[#0D3B3A] text-center leading-relaxed">
              Naming
              <br />
              Conventions &amp;
              <br />
              Coding Standards
            </h1>
          </section>

          <section className="bg-[#00353D] text-white rounded-md border border-cyan-800 p-10 shadow-md h-full">
            <h2 className="text-2xl md:text-5xl font-light mb-4 tracking-wide">Backend</h2>

            <p className="md:text-3xl">Structure & Functions</p>
            <ul className="list-disc pl-6 mb-4 space-y-1 md:text-xl text-base">
              <li>Uses Django conventions: <span className="font-mono">views</span>, <span className="font-mono">models</span>, and URL routing.</li>
              <li>Functions are defined using <span className="font-mono">def</span> and follow <span className="font-mono">snake_case</span>.</li>
              <li>URL config in <span className="font-mono">urls.py</span> uses descriptive names for routes.</li>
            </ul>
            <p className="md:text-3xl">Naming Conventions</p>
            <ul className="list-disc pl-6 md:text-xl mb-4 space-y-1 text-base">
              <li>
                Functions: <span className="font-mono">snake_case</span> (<span className="italic">get_user_data</span>)
              </li>
              <li>
                Classes (if present): <span className="font-mono">PascalCase</span> (<span className="italic">UserProfileView</span>)
              </li>
              <li>Variables: <span className="font-mono">snake_case</span></li>
            </ul>
            <p className="md:text-3xl">Standards</p>
            <ul className="md:text-xl list-disc pl-6 space-y-1 text-base">
              <li>Modular apps and clear separation of concerns.</li>
              <li>Default Django documentation style for files.</li>
              <li>Uses Django's recommended import structure.</li>
            </ul>
          </section>
        </div>
      </div>

    </main>
  );
}