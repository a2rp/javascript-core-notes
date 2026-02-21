// commonInterviewTraps/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiAlertTriangle,
    FiCode,
} from "react-icons/fi";

const CommonInterviewTraps = () => {
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
                    <FiAlertTriangle />
                </span>

                <span className="title">Common Interview Traps</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        These are the most common JavaScript traps asked in
                        interviews. The goal is not to memorize, but to
                        understand why the output happens.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">== vs ===</h3>
                    <p className="p">
                        == compares after type conversion - === compares without
                        conversion. Prefer === for predictable results.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">{`console.log(5 == "5");   // true - "5" becomes 5
console.log(5 === "5");  // false - number vs string
console.log(null == undefined);  // true - special case
console.log(null === undefined); // false`}</pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">null vs undefined</h3>
                    <p className="p">
                        undefined means "not assigned" - null is "intentionally
                        empty". Both mean "no value", but they are different
                        types.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">{`let a;
let b = null;

console.log(a);          // undefined
console.log(b);          // null
console.log(typeof a);   // "undefined"
console.log(typeof b);   // "object" - legacy JavaScript quirk`}</pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">var scope</h3>
                    <p className="p">
                        var is function scoped - let and const are block scoped.
                        This can create bugs inside loops and if blocks.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">{`if (true) {
  var x = 10;
  let y = 20;
}

console.log(x); // 10 - var escapes the block
// console.log(y); // ReferenceError - let stays inside block`}</pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Hoisting behavior</h3>
                    <p className="p">
                        Hoisting means declarations are moved to the top of
                        their scope during compilation. var becomes undefined
                        before assignment. let and const exist in a temporal
                        dead zone until initialized.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">{`console.log(a); // undefined
var a = 5;

// console.log(b); // ReferenceError - temporal dead zone
let b = 10;`}</pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Event loop basics</h3>
                    <p className="p">
                        JavaScript runs one thing at a time (single thread). The
                        event loop decides when queued tasks run. Promises
                        (microtasks) run before timers (macrotasks).
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">{`console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

// Output:
// A
// D
// C
// B`}</pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Closure question patterns</h3>
                    <p className="p">
                        A closure is when a function remembers variables from
                        its outer scope even after the outer function finishes.
                        Common interview pattern is returning a function.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">{`function makeCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3`}</pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Async timing questions</h3>
                    <p className="p">
                        Async questions usually test order of execution. Know
                        sync code runs first, then promise microtasks, then
                        timer callbacks.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">{`async function run() {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  }, 0);

  await Promise.resolve();
  console.log("3");
}

run();
console.log("4");

// Output:
// 1
// 4
// 3
// 2`}</pre>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CommonInterviewTraps;
