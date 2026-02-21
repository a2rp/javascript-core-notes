// javascriptFundamentals/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCpu,
    FiCode,
    FiGlobe,
    FiZap,
    FiLayers,
    FiTerminal,
} from "react-icons/fi";

const JavascriptFundamentals = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper className={open ? "open" : ""}>
            <button
                type="button"
                className="topicHeader"
                onClick={toggle}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiCpu />
                </span>

                <span className="title">JavaScript Fundamentals</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        JavaScript is what makes the web interactive. These
                        fundamentals explain where JS runs, how it executes, and
                        how it connects to HTML and CSS.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">What is JavaScript</h3>
                    <p className="p">
                        JavaScript is a programming language used to add logic
                        and interactivity to web pages. It can update content,
                        respond to user actions, and work with data.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiTerminal />
                            </span>
                            Quick example
                        </div>
                        <pre className="code">
                            {`console.log("Hello JavaScript");
// Output - Hello JavaScript`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">History of JS</h3>
                    <p className="p">
                        JavaScript was created in 1995 to add interactivity to
                        web pages. It grew fast and became the main language of
                        the browser. Today it is standardized as ECMAScript.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">JS engine</h3>
                    <p className="p">
                        A JavaScript engine is the program that executes your JS
                        code. Example engines are V8 (Chrome, Node),
                        SpiderMonkey (Firefox), and JavaScriptCore (Safari).
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCpu />
                            </span>
                            Engine idea
                        </div>
                        <pre className="code">
                            {`// You write JS
// Engine parses it and runs it
// Result - output appears in console or UI`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Browser vs Node</h3>
                    <p className="p">
                        Browser JavaScript can work with the DOM, events, and
                        Web APIs. Node.js JavaScript runs outside the browser
                        and is used for backend work like servers, files, and
                        databases.
                    </p>

                    <div className="miniGrid">
                        <div className="mini">
                            <div className="miniTitle">
                                <span className="miniIcon">
                                    <FiGlobe />
                                </span>
                                Browser
                            </div>
                            <div className="miniSub">
                                DOM - events - fetch - storage
                            </div>
                        </div>

                        <div className="mini">
                            <div className="miniTitle">
                                <span className="miniIcon">
                                    <FiCode />
                                </span>
                                Node
                            </div>
                            <div className="miniSub">
                                server - file system - backend APIs
                            </div>
                        </div>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`// Browser
document.title = "JS running in browser";
// Result - page title changes

// Node
console.log("JS running in Node");
// Output - JS running in Node`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Interpreted vs compiled</h3>
                    <p className="p">
                        JavaScript is often called interpreted, but modern
                        engines use JIT (Just In Time) compilation. That means
                        code is compiled and optimized while running for better
                        performance.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiZap />
                            </span>
                            Simple meaning
                        </div>
                        <div className="calloutText">
                            JS runs fast today because engines optimize code as
                            it executes.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">ECMAScript</h3>
                    <p className="p">
                        ECMAScript is the standard that defines the JavaScript
                        language. ES6 introduced modern features like let,
                        const, arrow functions, classes, and modules.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiLayers />
                            </span>
                            ES6 example
                        </div>
                        <pre className="code">
                            {`const name = "Ash";
console.log(\`Hello \${name}\`);
// Output - Hello Ash`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">How JS works with HTML & CSS</h3>
                    <p className="p">
                        The browser turns HTML into a DOM tree. JavaScript can
                        read and change that DOM, and it can also update CSS by
                        changing classes or inline styles.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiGlobe />
                            </span>
                            DOM and style idea
                        </div>
                        <pre className="code">
                            {`// Example idea
// JS can update HTML text
// JS can add a class to change CSS
// Result - UI changes without page reload`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Script tag</h3>
                    <p className="p">
                        JavaScript is loaded in HTML using the script tag. Using
                        defer is usually preferred because it loads the script
                        without blocking HTML parsing.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Script loading
                        </div>
                        <pre className="code">
                            {`<script src="app.js" defer></script>
<!-- Result - app.js runs after HTML is parsed -->`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">DOM manipulation concept</h3>
                    <p className="p">
                        DOM manipulation means selecting elements and updating
                        them. You can change text, attributes, classes, and even
                        create new elements.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiTerminal />
                            </span>
                            Basic DOM update
                        </div>
                        <pre className="code">
                            {`const el = document.querySelector(".title");
el.textContent = "Updated by JS";
// Result - text inside .title changes`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Event driven model</h3>
                    <p className="p">
                        JavaScript reacts to events like click, input, and
                        submit. You attach event listeners, and when the event
                        happens, your callback runs.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiZap />
                            </span>
                            Click example
                        </div>
                        <pre className="code">
                            {`const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log("Clicked");
});

// Output - Clicked (when button is clicked)`}
                        </pre>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default JavascriptFundamentals;
