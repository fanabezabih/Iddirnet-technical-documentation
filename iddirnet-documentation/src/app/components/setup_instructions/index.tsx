export default function SetupInstructions() {
    return (
        <div
            id="setup-instructions"
            className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 xl:max-w-[970px] xl:ml-74 2xl:max-w-[1350px] 2xl:ml-104"
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
            <div className="mt-8 space-y-6">
                <h3 className="text-xl font-bold text-gray-800">
                    Workflow Configuration
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm mb-6">
                    This section details our project's CI/CD pipeline, which is automated using GitHub Actions. The workflow configuration file defines the process for testing and deploying our application. It is designed to run a full test suite on every push to the `develop` branch and automatically deploy to production when a pull request is successfully merged into the `main` branch, ensuring that only validated code is released.
                </p>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 mb-6 overflow-x-auto">
                    <pre className="text-sm">
                        <code>{`name: CI/CD Pipeline
on:
  push:
    branches: [ develop ]
  pull_request:
    branches: [ main ]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Set up Python
      uses: actions/setup-python@v4
      with:
        python-version: '3.11'
    - name: Install dependencies
      run: |
        pip install -r requirements.txt
    - name: Run tests
      run: |
        pytest
  build-and-deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.event_name == 'pull_request' && github.event.action == 'closed' && github.event.pull_request.merged == true
    steps:
    - uses: actions/checkout@v3
    - name: Deploy to production
      run: |
        # Deployment commands here`}</code>
                    </pre>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed text-sm">
                            <li>Create .github/workflows directory in your repository</li>
                            <li>Add workflow YAML files for each component</li>
                            <li>Configure environment secrets in GitHub repository settings</li>
                            <li>Set up triggers for push to develop and PR to main</li>
                        </ol>
                    </div>
                    <div>
                        <ol start={5} className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed text-sm">
                            <li>Define jobs for testing, building, and deployment</li>
                            <li>Configure job dependencies with needs keyword</li>
                            <li>Set up notifications for build failures</li>
                            <li>Monitor workflow runs in Actions tab of repository</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}



