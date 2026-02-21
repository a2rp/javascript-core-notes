// functions/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCode,
    FiZap,
    FiRepeat,
    FiGitBranch,
    FiCpu,
} from "react-icons/fi";

const Functions = () => {
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
                    <FiZap />
                </span>

                <span className="title">Functions</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">Function Basics</h3>
                    <p className="p">
                        A function is a reusable block of code. You call it when
                        you want the same logic again. Functions can take inputs
                        and can return outputs.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Function declaration</h3>
                    <p className="p">
                        A named function declared with the function keyword.
                        Declarations are hoisted, so you can call them before
                        they appear in the file.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`function add(a, b) {
  return a + b;
}

add(2, 3);`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Function expression</h3>
                    <p className="p">
                        A function stored in a variable. Expressions are not
                        hoisted like declarations.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`const multiply = function (a, b) {
  return a * b;
};

multiply(2, 3);`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Arrow functions</h3>
                    <p className="p">
                        A shorter syntax for writing functions. Arrow functions
                        do not have their own this, they use this from the outer
                        scope.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`const greet = (name) => {
  return \`Hello, \${name}\`;
};

const square = (n) => n * n;`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Parameters vs arguments</h3>
                    <p className="p">
                        Parameters are the names in the function definition.
                        Arguments are the real values you pass when calling the
                        function.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`function welcome(name) { // name is a parameter
  return \`Hi \${name}\`;
}

welcome("Ashish"); // "Ashish" is an argument`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Default parameters</h3>
                    <p className="p">
                        If an argument is not provided, you can set a default
                        value in the function signature.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`function sayHi(name = "Guest") {
  return \`Hi \${name}\`;
}

sayHi();
sayHi("Ashish");`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Rest parameters</h3>
                    <p className="p">
                        Rest parameters collect multiple arguments into a single
                        array. Useful when you do not know how many values will
                        be passed.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

sum(1, 2, 3, 4);`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Advanced Function Concepts</h3>
                    <p className="p">
                        These concepts help you write cleaner and more reusable
                        code, especially in real apps and React.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Return values</h3>
                    <p className="p">
                        A return value is what a function sends back to the
                        caller. Without return, the function returns undefined.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`function getPrice() {
  return 499;
}

const price = getPrice();`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">First class functions</h3>
                    <p className="p">
                        In JavaScript, functions are values. You can store them
                        in variables, pass them as arguments, or return them
                        from other functions.
                    </p>

                    <div className="miniRow">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiGitBranch />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Store</div>
                                <div className="miniSub">
                                    const fn = () =&gt; {}
                                </div>
                            </div>
                        </div>

                        <div className="mini">
                            <span className="miniIcon">
                                <FiRepeat />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Pass</div>
                                <div className="miniSub">doWork(fn)</div>
                            </div>
                        </div>

                        <div className="mini">
                            <span className="miniIcon">
                                <FiCpu />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Return</div>
                                <div className="miniSub">return fn</div>
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
                            {`function run(task) {
  return task();
}

run(() => "done");`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Higher order functions</h3>
                    <p className="p">
                        A higher order function either takes a function as an
                        input or returns a function as output. Common examples
                        are map, filter, and reduce.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`const nums = [1, 2, 3];

const doubled = nums.map((n) => n * 2);`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Callback functions</h3>
                    <p className="p">
                        A callback is a function passed into another function to
                        be called later. You see callbacks in events, timers,
                        and array methods.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`setTimeout(() => {
  console.log("Runs after 1 second");
}, 1000);`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Pure vs impure functions</h3>
                    <p className="p">
                        A pure function returns the same output for the same
                        input and does not change anything outside itself.
                        Impure functions depend on or modify external state.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Examples
                        </div>
                        <pre className="code">
                            {`// pure
function add(a, b) {
  return a + b;
}

// impure
let count = 0;
function inc() {
  count = count + 1;
  return count;
}`}
                        </pre>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Functions;
