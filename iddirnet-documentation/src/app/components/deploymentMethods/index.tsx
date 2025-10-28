export default function Deployment() {
    return (
        <div
            className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8 sm:space-y-12 font-sans"
            style={{ fontFamily: "'Nunito', sans-serif", color: '#171717' }}
        >

            <section>
                <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8" style={{ color: '#FF9800' }}>
                    Deployment Strategy
                </h1>
                <p className="leading-relaxed text-[#1E2736] max-w-4xl mx-auto mb-8 sm:mb-12 text-justify text-sm sm:text-base">
                    Deploying the IddirNet platform components involved careful consideration of performance, scalability,
                    ease of maintenance, and user accessibility. We chose deployment solutions that maximize reliability while aligning
                    with community needs and technology stack strengths. Across backend, frontend, and mobile app deployments, our strategy
                    emphasizes automation, seamless integration, and a strong user experience to ensure fast delivery and sustainable operations.
                </p>

                <div className="space-y-8 sm:space-y-12 max-w-4xl mx-auto">

                
                    <div className="relative bg-white rounded-lg shadow-lg p-6 sm:p-8 border-4 border-[#FF9800]">
                        <div
                            className="absolute -left-4 sm:-left-8 top-6 sm:top-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF9800] text-white text-center font-bold text-sm sm:text-lg select-none"
                            style={{ lineHeight: '2.5rem' }}
                        >
                            1
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-[#FF9800]">Backend Deployment – Heroku</h2>
                        <p className="text-[#1E2736] leading-relaxed text-sm sm:text-base mb-6">
                            We chose Heroku for hosting our backend because it offers an easy deployment process, tight PostgreSQL integration,
                            and reliable management of server resources. This lets us focus on developing features while Heroku handles scaling and uptime,
                            essential for secure and efficient API operations supporting payments and notifications.
                        </p>

                        <p className="text-[#1E2736] leading-relaxed text-xl sm:text-base font-semibold mb-4">
                            Instructions for deployment
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <ol className="list-decimal list-inside space-y-2 text-[#1E2736] leading-relaxed text-sm sm:text-base">
                                    <li>Add gunicorn and psycopg2 to requirements.txt </li>
                                    <li>Create procfile</li>
                                    <li>Add runtime.txt specifying python-3.11.</li>
                                    <li>Set DEBUG=False and configure ALLOWED_HOSTS</li>
                                    <li> Move SECRET_KEY to environment variables.</li>
                                    <li>Install the Heroku CLI and run heroku login.</li>
                                </ol>
                            </div>

                            <div>
                                <ol start={7} className="list-decimal list-inside space-y-2 text-[#1E2736] leading-relaxed text-sm sm:text-base">
                                    <li>Create the app using heroku Iddirnet-backend-api.</li>
                                    <li> Create heroku-postgresql</li>
                                    <li>Set environment variables via heroku config:set.</li>
                                    <li>Push your code with git push heroku main.</li>
                                    <li>Let Heroku build and launch the app automatically.</li>
                                    <li>Test the API endpoints using Postman.</li>
                                </ol>
                            </div>
                        </div>
                    </div>


                    <div className="relative bg-white rounded-lg shadow-lg p-6 sm:p-8 border-4 border-[#1E2736]">
                        <div
                            className="absolute -left-4 sm:-left-8 top-6 sm:top-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1E2736] text-white text-center font-bold text-sm sm:text-lg select-none"
                            style={{ lineHeight: '2.5rem' }}
                        >
                            2
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-[#1E2736]">Frontend Deployment – Vercel</h2>
                        <p className="text-[#1E2736] leading-relaxed text-sm sm:text-base mb-6">
                            Vercel was selected for the frontend dashboard due to its seamless integration with React, automated end-to-end deployment, and global content delivery network
                            ensuring fast and responsive user interfaces. Vercel's preview environments enable smooth collaboration and quick iteration of UI features.
                        </p>

                        <p className="text-[#1E2736] leading-relaxed text-sm sm:text-base font-semibold mb-4">
                            Instructions for Deployment
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <ol className="list-decimal list-inside space-y-2 text-[#1E2736] leading-relaxed text-sm sm:text-base">
                                    <li>Prepare locally </li>
                                    <li>Connect to Vercel </li>
                                    <li>Configure build settings </li>
                                    <li>Add environment variables  in Vercel project settings.</li>
                                </ol>
                            </div>

                            <div>
                                <ol start={5} className="list-decimal list-inside space-y-2 text-[#1E2736] leading-relaxed text-sm sm:text-base">
                                    <li>Deploy –  run npx vercel </li>
                                    <li>Monitor logs – Check GitHub Actions for deploy logs.</li>
                                    <li>Test live site – visit the Vercel URL.</li>
                                </ol>
                            </div>
                        </div>
                    </div>


                    <div className="relative bg-white rounded-lg shadow-lg p-6 sm:p-8 border-4 border-[#FF9800]">
                        <div
                            className="absolute -left-4 sm:-left-8 top-6 sm:top-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF9800] text-white text-center font-bold text-sm sm:text-lg select-none"
                            style={{ lineHeight: '2.5rem' }}
                        >
                            3
                        </div>
                        <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-[#FF9800]">Mobile Deployment – APK Bundles & Google Play Store</h2>
                        <p className="text-[#1E2736] leading-relaxed text-sm sm:text-base mb-6">
                            The mobile app is packaged as APK bundles to optimize size for diverse Android devices common in Ethiopian communities,
                            and published on Google Play Store to reach users efficiently with easy updates and secure delivery.
                        </p>

                        <p className="text-[#1E2736] leading-relaxed text-sm sm:text-base font-semibold mb-4">
                            Instructions for Deployment
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <ol className="list-decimal list-inside space-y-2 text-[#1E2736] leading-relaxed text-sm sm:text-base">
                                    <li>Generate signed AAB with release keystore</li>
                                    <li>Get access for Play Developer account</li>
                                    <li>Create new app in Play Console</li>
                                    <li>Upload app icon, feature graphic, and screenshots</li>
                                    <li>Write app title and description</li>
                                </ol>
                            </div>

                            <div>
                                <ol start={6}className="list-decimal list-inside space-y-2 text-[#1E2736] leading-relaxed text-sm sm:text-base">
                                    <li>Complete Data Safety and content compliance</li>
                                    <li>Upload signed AAB to Production track</li>
                                    <li>Add release notes for the version</li>
                                    <li>Set app as Free and choose countries</li>
                                    <li>Review and roll out to Production</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}