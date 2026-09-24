// App.jsx
import React from "react";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";
import AboutJavascript from "./components/aboutJavascript";
import JavascriptFundamentals from "./topics/javascriptFundamentals";
import VariablesAndDataTypes from "./topics/variablesAndDataTypes";
import Operators from "./topics/operators";
import ControlFlow from "./topics/controlFlow";
import Functions from "./topics/functions";
import ScopeExecutionContext from "./topics/scopeExecutionContext";
import Objects from "./topics/objects";
import Arrays from "./topics/arrays";
import Strings from "./topics/strings";
import ES6Essentials from "./topics/es6Essentials";
import DomManipulation from "./topics/domManipulation";
import Events from "./topics/events";
import AsynchronousJavascript from "./topics/asynchronousJavascript";
import FetchAndApis from "./topics/fetchAndApis";
import AdvancedConcepts from "./topics/advancedConcepts";
import ClassesAndOOP from "./topics/classesAndOOP";
import MemoryPerformance from "./topics/memoryPerformance";
import Modules from "./topics/modules";
import BrowserApis from "./topics/browserApis";
import FunctionalProgrammingConcepts from "./topics/functionalProgrammingConcepts";
import ModernFeatures from "./topics/modernFeatures";
import BestPractices from "./topics/bestPractices";
import CommonInterviewTraps from "./topics/commonInterviewTraps";
import EventLoopConcurrency from "./topics/eventLoopConcurrency";

const App = () => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main id="notes-main">
                <div className="contentWrapper">
                    {/* about css */}

                    <AboutJavascript />

                    <JavascriptFundamentals />
                    <VariablesAndDataTypes />
                    <Operators />
                    <ControlFlow />
                    <Functions />
                    <ScopeExecutionContext />
                    <Objects />
                    <Arrays />
                    <Strings />
                    <ES6Essentials />
                    <DomManipulation />
                    <Events />
                    <AsynchronousJavascript />
                    <FetchAndApis />
                    <AdvancedConcepts />
                    <ClassesAndOOP />
                    <MemoryPerformance />
                    <Modules />
                    <BrowserApis />
                    <FunctionalProgrammingConcepts />
                    <ModernFeatures />
                    <BestPractices />
                    <CommonInterviewTraps />
                    <EventLoopConcurrency />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
                <ScrollToTop />
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
