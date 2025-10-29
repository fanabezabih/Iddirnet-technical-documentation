export default function Deployment() {
    return (
        <div 
            className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8 sm:space-y-12 font-sans 2xl:ml-110 xl:ml-75" 
            style={{ fontFamily: "'Nunito', sans-serif", color: '#171717' }}
        >
            <section className="flex flex-col md:flex-row gap-6 md:gap-16 lg:gap-60 items-center">
                <div className="md:w-2/3 space-y-5">
                    <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: '#FF9800' }}>
                        Deployment Strategy
                    </h1>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-justify xl:w-[900] 2xl:w-[1222]">
                        Deploying the IddirNet platform components involved careful consideration of performance, scalability,
                        ease of maintenance, and user accessibility. We chose deployment solutions that maximize reliability while aligning
                        with community needs and technology stack strengths. Across backend, frontend, and mobile app deployments, our strategy
                        emphasizes automation, seamless integration, and a strong user experience to ensure fast delivery and sustainable operations.
                    </p>
                </div>
            </section>

            <section className="mt-16 sm:mt-20 2xl:max-w-[1400px] xl:max-w-[900px] 2xl:ml-20">
                <div className="space-y-8 sm:space-y-12">
                    <div className="relative bg-white rounded-xl p-6 shadow-sm border-2 border-[#FF9800] hover:shadow-md transition-shadow">
                        <div
                            className="absolute -left-4 sm:-left-8 top-6 sm:top-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF9800] text-white text-center font-bold text-sm sm:text-lg select-none"
                            style={{ lineHeight: '2.5rem' }}
                        >
                            1
                        </div>
                        <h2 className="text-xl font-bold mb-3" style={{ color: '#FF9800' }}>
                            Backend Deployment – Heroku
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We chose Heroku for hosting our backend because it offers an easy deployment process, tight PostgreSQL integration,
                            and reliable management of server resources. This lets us focus on developing features while Heroku handles scaling and uptime,
                            essential for secure and efficient API operations supporting payments and notifications.
                        </p>

                        <p className="text-gray-700 leading-relaxed font-semibold mb-4">
                            Instructions for deployment
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed text-sm">
                                    <li>Add gunicorn and psycopg2 to requirements.txt</li>
                                    <li>Create procfile</li>
                                    <li>Add runtime.txt specifying python-3.11.</li>
                                    <li>Set DEBUG=False and configure ALLOWED_HOSTS</li>
                                    <li>Move SECRET_KEY to environment variables.</li>
                                    <li>Install the Heroku CLI and run heroku login.</li>
                                </ol>
                            </div>

                            <div>
                                <ol start={7} className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed text-sm">
                                    <li>Create the app using heroku Iddirnet-backend-api.</li>
                                    <li>Create heroku-postgresql</li>
                                    <li>Set environment variables via heroku config:set.</li>
                                    <li>Push your code with git push heroku main.</li>
                                    <li>Let Heroku build and launch the app automatically.</li>
                                    <li>Test the API endpoints using Postman.</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className="relative bg-white rounded-xl p-6 shadow-sm border-2 border-gray-800 hover:shadow-md transition-shadow">
                        <div
                            className="absolute -left-4 sm:-left-8 top-6 sm:top-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1E2736] text-white text-center font-bold text-sm sm:text-lg select-none"
                            style={{ lineHeight: '2.5rem' }}
                        >
                            2
                        </div>
                        <h2 className="text-xl font-bold mb-3 text-gray-800">
                            Frontend Deployment – Vercel
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Vercel was selected for the frontend dashboard due to its seamless integration with React, automated end-to-end deployment, and global content delivery network
                            ensuring fast and responsive user interfaces. Vercel's preview environments enable smooth collaboration and quick iteration of UI features.
                        </p>

                        <p className="text-gray-700 leading-relaxed font-semibold mb-4">
                            Instructions for Deployment
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed text-sm">
                                    <li>Prepare locally</li>
                                    <li>Connect to Vercel</li>
                                    <li>Configure build settings</li>
                                    <li>Add environment variables in Vercel project settings.</li>
                                </ol>
                            </div>

                            <div>
                                <ol start={5} className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed text-sm">
                                    <li>Deploy – run npx vercel</li>
                                    <li>Monitor logs – Check GitHub Actions for deploy logs.</li>
                                    <li>Test live site – visit the Vercel URL.</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Deployment */}
                    <div className="relative bg-white rounded-xl p-6 shadow-sm border-2 border-[#FF9800] hover:shadow-md transition-shadow">
                        <div
                            className="absolute -left-4 sm:-left-8 top-6 sm:top-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF9800] text-white text-center font-bold text-sm sm:text-lg select-none"
                            style={{ lineHeight: '2.5rem' }}
                        >
                            3
                        </div>
                        <h2 className="text-xl font-bold mb-3" style={{ color: '#FF9800' }}>
                            Mobile Deployment – APK Bundles & Google Play Store
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The mobile app is packaged as APK bundles to optimize size for diverse Android devices common in Ethiopian communities,
                            and published on Google Play Store to reach users efficiently with easy updates and secure delivery.
                        </p>

                        <p className="text-gray-700 leading-relaxed font-semibold mb-4">
                            Instructions for Deployment
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed text-sm">
                                    <li>Generate signed AAB with release keystore</li>
                                    <li>Get access for Play Developer account</li>
                                    <li>Create new app in Play Console</li>
                                    <li>Upload app icon, feature graphic, and screenshots</li>
                                    <li>Write app title and description</li>
                                </ol>
                            </div>

                            <div>
                                <ol start={6} className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed text-sm">
                                    <li>Complete Data Safety and content compliance</li>
                                    <li>Upload signed AAB to Production track</li>
                                    <li>Add release notes for the version</li>
                                    <li>Set app as Free and choose countries</li>
                                    <li>Review and roll out to Production</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* CI/CD Section */}
                    <div className="relative bg-white rounded-xl p-8 shadow-md border-2 border-gray-800 hover:shadow-lg transition-shadow">
                        <div
                            className="absolute -left-4 sm:-left-8 top-8 sm:top-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1E2736] text-white text-center font-bold text-sm sm:text-lg select-none"
                            style={{ lineHeight: '2.5rem' }}
                        >
                            4
                        </div>
                        <h2 className="text-xl font-bold mb-5 text-gray-800">
                            CI/CD Pipeline – GitHub Actions
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6 text-base">
                            Our CI/CD pipeline leverages GitHub Actions to automate testing, building, and deployment across all components. This ensures code quality, 
                            reduces manual errors, and enables rapid, reliable delivery of features to production environments.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-3">
                                    <svg className="w-6 h-6 mr-3" style={{ color: '#1E2736' }} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <h3 className="font-semibold text-gray-800 text-lg">Pre-Deployment Checks</h3>
                                </div>
                                <p className="text-sm text-gray-600">All codebases run comprehensive tests, build verification, and lint checks before deployment to ensure code quality.</p>
                            </div>
                            
                            <div className="bg-gray-50 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-3">
                                    <svg className="w-6 h-6 mr-3" style={{ color: '#1E2736' }} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <h3 className="font-semibold text-gray-800 text-lg">Automated Deployment</h3>
                                </div>
                                <p className="text-sm text-gray-600">Code is automatically deployed to production environments when PR from develop to main is merged, streamlining our release process.</p>
                            </div>
                            
                            <div className="bg-gray-50 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-3">
                                    <svg className="w-6 h-6 mr-3" style={{ color: '#1E2736' }} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <h3 className="font-semibold text-gray-800 text-lg">Status Visibility</h3>
                                </div>
                                <p className="text-sm text-gray-600">Build and test status are clearly visible in pull requests from develop to main and repository dashboard for transparent development workflow.</p>
                            </div>
                            
                            <div className="bg-gray-50 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-3">
                                    <svg className="w-6 h-6 mr-3" style={{ color: '#1E2736' }} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <h3 className="font-semibold text-gray-800 text-lg">Branch Strategy</h3>
                                </div>
                                <p className="text-sm text-gray-600">Features are pushed to develop branch, then PRs are created from develop to main for code review and deployment.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}