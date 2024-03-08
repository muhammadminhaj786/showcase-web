import React from "react";
import AnimatedCursor from "react-animated-cursor";
import './App.css'
import { Footer, Header, MainSection, Services, WorkFlow } from "./pages";

const App = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: '#FF47FF' // Set your desired color here
        }}
        outerStyle={{
          border: '3px solid #FF47FF' // Set your desired color here
        }}
      />
      {/* our web pages */}
      <Header />
      <MainSection />
      <Services />
      <WorkFlow />
      <Footer />
    </>
  );
};

export default App;
