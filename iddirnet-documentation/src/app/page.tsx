import Testing from "./components/testingQA";
import Deployment from "./components/deploymentMethods";
import HomeSection from "./components/Homepage";
import FooterSection from "./components/footer";
import Navigation from "./components/Navigation";
import SetupInstructions from "./components/setup_instructions";
import NamingConventions from "./components/codeStandard";
import CodeStructure from "./components/codeStructure";

export default function Home() {
  return (
    <div>
      <Navigation />
      <div id="home">
        <HomeSection />
      </div>
              <SetupInstructions /> 
      <NamingConventions />
      <div id="code-structure">
        <CodeStructure />
      </div>
    
 
      <div id="testing">
        <Testing />
      </div>   
      <div id="deployment">
        <Deployment />
      </div>
      <FooterSection />
    </div>
  );
}