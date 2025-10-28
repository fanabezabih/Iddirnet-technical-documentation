export default function SetupInstructions() {
    return (
        <div
            id="setup-instructions"
            className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 xl:max-w-[970px] xl:ml-65 2xl:max-w-[1350px] 2xl:ml-80"
            style={{ fontFamily: "'Nunito', sans-serif", color: '#171717' }}
        >
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center" style={{ color: '#1E2736' }}>
                Setup
            </h1>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                <div
                    className="lg:w-1/3 bg-[#1E2736] text-white rounded-lg p-6 shadow-md"
                >
                    <h2 className="text-xl font-semibold mb-4" style={{ color: '#FF9800' }}>
                        Backend Setup
                    </h2>
                    <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
                        <li>Navigate to backend directory</li>
                        <li>Create virtual environment</li>
                        <li>Install dependencies</li>
                        <li>Run migrations</li>
                        <li>Start dev server</li>
                    </ol>
                </div>

                <div className="lg:w-1/3 bg-[#B8823C] text-white rounded-lg p-6 shadow-md">
                    <h2 className="text-xl font-semibold mb-4">
                        Frontend Web Setup
                    </h2>
                    <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
                        <li>cd frontend</li>
                        <li>npm install</li>
                        <li>npm run dev</li>
                        <li>npm run build</li>
                        <li>npm start</li>
                    </ol>
                </div>

                <div
                    className="lg:w-1/3 bg-white rounded-lg p-6 shadow-md border-2"
                    style={{ color: '#1E2736', borderColor: '#1E2736' }}
                >
                    <h2 className="text-xl font-semibold mb-4" style={{ color: '#FF9800' }}>
                        Frontend Mobile Setup
                    </h2>
                    <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
                        <li>Open the Android project folder</li>
                        <li>Sync and download all dependencies</li>
                        <li>Build the project</li>
                        <li>Run the app in an emulator</li>
                        <li>Generate Signed APK Bundle</li>
                        <li>Install and start the app on a device</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}