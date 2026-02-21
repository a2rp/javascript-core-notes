import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiSliders } from "react-icons/fi";

const JavascriptOperators = () => {
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
                    <FiSliders />
                </span>

                <span className="title">Operators</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                {/* Arithmetic */}
                <div className="section">
                    <h3>Arithmetic</h3>
                    <p>
                        Arithmetic operators perform mathematical calculations.
                        They are used for addition, subtraction, multiplication,
                        division and more.
                    </p>

                    <pre className="code">
                        {`let a = 10;
let b = 3;

a + b;  // 13
a - b;  // 7
a * b;  // 30
a / b;  // 3.333...
a % b;  // 1  remainder
a ** b; // 1000`}
                    </pre>
                </div>

                {/* Assignment */}
                <div className="section">
                    <h3>Assignment</h3>
                    <p>
                        Assignment operators store values in variables. They can
                        also update values using shorthand syntax.
                    </p>

                    <pre className="code">
                        {`let x = 5;
x += 2;  // 7
x -= 1;  // 6
x *= 3;  // 18
x /= 2;  // 9`}
                    </pre>
                </div>

                {/* Comparison */}
                <div className="section">
                    <h3>Comparison</h3>
                    <p>
                        Comparison operators check relationships between values
                        and return true or false.
                    </p>

                    <pre className="code">
                        {`5 > 3;   // true
5 < 3;   // false
5 >= 5;  // true
5 != 4;  // true`}
                    </pre>
                </div>

                {/* Strict vs Loose */}
                <div className="section">
                    <h3>Strict vs Loose equality</h3>
                    <p>
                        Loose equality uses == and performs type conversion.
                        Strict equality uses === and checks both value and type.
                        Strict equality is recommended.
                    </p>

                    <pre className="code">
                        {`5 == "5";   // true  type conversion
5 === "5";  // false type mismatch
null == undefined;  // true
null === undefined; // false`}
                    </pre>
                </div>

                {/* Logical */}
                <div className="section">
                    <h3>Logical operators</h3>
                    <p>
                        Logical operators combine conditions. They are often
                        used in decision making.
                    </p>

                    <pre className="code">
                        {`true && false;  // false
true || false;  // true
!true;          // false`}
                    </pre>
                </div>

                {/* Nullish */}
                <div className="section">
                    <h3>Nullish coalescing ??</h3>
                    <p>
                        The nullish operator returns the right value only if the
                        left side is null or undefined. It does not treat 0 or
                        empty string as false.
                    </p>

                    <pre className="code">
                        {`let value = null;
value ?? "default";  // "default"

0 ?? 100;  // 0
"" ?? "text";  // ""`}
                    </pre>
                </div>

                {/* Optional chaining */}
                <div className="section">
                    <h3>Optional chaining ?.</h3>
                    <p>
                        Optional chaining safely accesses nested properties. It
                        prevents errors if a property does not exist.
                    </p>

                    <pre className="code">
                        {`let user = {};

user.profile?.name;  // undefined
// No error even though profile does not exist`}
                    </pre>
                </div>

                {/* Ternary */}
                <div className="section">
                    <h3>Ternary operator</h3>
                    <p>
                        The ternary operator is a short form of if else. It
                        returns one value if condition is true and another if
                        false.
                    </p>

                    <pre className="code">
                        {`let age = 18;

let status = age >= 18 ? "Adult" : "Minor";
// "Adult"`}
                    </pre>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default JavascriptOperators;
