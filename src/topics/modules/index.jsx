import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiPackage } from "react-icons/fi";

const Modules = () => {
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
                    <FiPackage />
                </span>

                <span className="title">Modules</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                {/* ES Modules */}
                <div className="section">
                    <h3>ES modules</h3>
                    <p>
                        ES modules allow JavaScript code to be split into
                        reusable files. Each file is treated as its own module
                        with its own scope. Nothing leaks to the global scope
                        unless exported.
                    </p>

                    <pre className="code">
                        {`// math.js
export const add = (a, b) => a + b;

// app.js
import { add } from "./math.js";

console.log(add(2, 3));
// 5`}
                    </pre>
                </div>

                {/* Default export */}
                <div className="section">
                    <h3>Default export</h3>
                    <p>
                        A module can have one default export. It is imported
                        without curly braces and can be renamed during import.
                    </p>

                    <pre className="code">
                        {`// greet.js
export default function greet(name) {
    return "Hello " + name;
}

// app.js
import greet from "./greet.js";

console.log(greet("Ashish"));
// Hello Ashish`}
                    </pre>
                </div>

                {/* Named export */}
                <div className="section">
                    <h3>Named export</h3>
                    <p>
                        Named exports allow multiple values to be exported from
                        a file. They must be imported using curly braces.
                    </p>

                    <pre className="code">
                        {`// utils.js
export const PI = 3.14;
export const square = (n) => n * n;

// app.js
import { PI, square } from "./utils.js";

console.log(PI);
// 3.14

console.log(square(4));
// 16`}
                    </pre>
                </div>

                {/* Dynamic import */}
                <div className="section">
                    <h3>Dynamic import</h3>
                    <p>
                        Dynamic import allows modules to be loaded on demand. It
                        returns a Promise. This is useful for lazy loading and
                        performance optimization.
                    </p>

                    <pre className="code">
                        {`// lazy load a module
import("./math.js")
    .then((module) => {
        console.log(module.add(5, 5));
        // 10
    })
    .catch((err) => {
        console.error(err);
    });`}
                    </pre>

                    <p>
                        Dynamic import helps reduce initial bundle size by
                        loading code only when needed.
                    </p>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Modules;
