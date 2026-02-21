// variablesDataTypes/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiDatabase,
    FiCode,
    FiTarget,
    FiInfo,
} from "react-icons/fi";

const VariablesDataTypes = () => {
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
                    <FiDatabase />
                </span>

                <span className="title">Variables & Data Types</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3>Variables</h3>
                    <p>
                        Variables are named containers to store values. In
                        JavaScript you create variables using var, let, or
                        const.
                    </p>
                </div>

                <div className="section">
                    <h3>var</h3>
                    <p>
                        var is function scoped and can be re-declared. It can
                        cause bugs in modern code, so avoid it unless required.
                    </p>

                    <pre className="code">
                        {`var a = 10;
var a = 20;
console.log(a); // 20`}
                    </pre>
                </div>

                <div className="section">
                    <h3>let</h3>
                    <p>
                        let is block scoped and can be reassigned, but cannot be
                        re-declared in the same scope.
                    </p>

                    <pre className="code">
                        {`let score = 5;
score = 6;
console.log(score); // 6`}
                    </pre>
                </div>

                <div className="section">
                    <h3>const</h3>
                    <p>
                        const is block scoped and cannot be reassigned. Use it
                        by default. For objects and arrays, the reference is
                        fixed but internal values can change.
                    </p>

                    <pre className="code">
                        {`const user = { name: "Ash" };
user.name = "Ashish";
console.log(user.name); // "Ashish"`}
                    </pre>
                </div>

                <div className="section">
                    <h3>Scope basics</h3>
                    <p>
                        Scope means where a variable can be accessed. let and
                        const follow block scope, var follows function scope.
                    </p>

                    <pre className="code">
                        {`if (true) {
  let x = 1;
  const y = 2;
  console.log(x, y); // 1 2
}
// console.log(x); // ReferenceError`}
                    </pre>
                </div>

                <div className="section">
                    <h3>Temporal Dead Zone</h3>
                    <p>
                        With let and const, the variable exists in the scope but
                        cannot be used before its declaration line.
                    </p>

                    <pre className="code">
                        {`// console.log(a); // ReferenceError
let a = 10;
console.log(a); // 10`}
                    </pre>
                </div>

                <div className="section">
                    <h3>Primitive Types</h3>
                    <p>
                        Primitive values are stored directly and are immutable.
                        JavaScript primitives are string, number, boolean, null,
                        undefined, symbol, and bigint.
                    </p>

                    <div className="miniGrid">
                        <div className="chip">string</div>
                        <div className="chip">number</div>
                        <div className="chip">boolean</div>
                        <div className="chip">null</div>
                        <div className="chip">undefined</div>
                        <div className="chip">symbol</div>
                        <div className="chip">bigint</div>
                    </div>
                </div>

                <div className="section">
                    <h3>string</h3>
                    <pre className="code">
                        {`const name = "Ash";
console.log(name.length); // 3`}
                    </pre>
                </div>

                <div className="section">
                    <h3>number</h3>
                    <pre className="code">
                        {`const price = 99.5;
console.log(price + 0.5); // 100`}
                    </pre>
                </div>

                <div className="section">
                    <h3>boolean</h3>
                    <pre className="code">
                        {`const isOnline = true;
console.log(isOnline); // true`}
                    </pre>
                </div>

                <div className="section">
                    <h3>null</h3>
                    <p>
                        null means intentional empty value. You set it when you
                        want "nothing here".
                    </p>

                    <pre className="code">
                        {`let data = null;
console.log(data); // null`}
                    </pre>
                </div>

                <div className="section">
                    <h3>undefined</h3>
                    <p>
                        undefined means a variable exists but no value is
                        assigned yet.
                    </p>

                    <pre className="code">
                        {`let x;
console.log(x); // undefined`}
                    </pre>
                </div>

                <div className="section">
                    <h3>symbol</h3>
                    <p>
                        symbol creates unique identifiers, often used as object
                        keys to avoid collisions.
                    </p>

                    <pre className="code">
                        {`const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false`}
                    </pre>
                </div>

                <div className="section">
                    <h3>bigint</h3>
                    <p>
                        bigint is for very large integers beyond Number safe
                        limit. Use n at the end.
                    </p>

                    <pre className="code">
                        {`const big = 9007199254740993n;
console.log(big); // 9007199254740993n`}
                    </pre>
                </div>

                <div className="section">
                    <h3>Non Primitive</h3>
                    <p>
                        Non-primitive values are reference types. They are
                        stored in memory and variables hold references.
                    </p>

                    <div className="miniGrid">
                        <div className="chip">object</div>
                        <div className="chip">array</div>
                        <div className="chip">function</div>
                    </div>
                </div>

                <div className="section">
                    <h3>object</h3>
                    <pre className="code">
                        {`const user = { name: "Ash", age: 22 };
console.log(user.name); // "Ash"`}
                    </pre>
                </div>

                <div className="section">
                    <h3>array</h3>
                    <pre className="code">
                        {`const nums = [1, 2, 3];
console.log(nums[1]); // 2`}
                    </pre>
                </div>

                <div className="section">
                    <h3>function</h3>
                    <p>
                        Functions are also values in JavaScript. You can store
                        them in variables and pass them around.
                    </p>

                    <pre className="code">
                        {`const add = (a, b) => a + b;
console.log(add(2, 3)); // 5`}
                    </pre>
                </div>

                <div className="section">
                    <h3>Type system</h3>
                    <p>
                        JavaScript is dynamically typed. Types are attached to
                        values, not variables.
                    </p>

                    <div className="note">
                        <span className="noteIcon">
                            <FiInfo />
                        </span>
                        <span className="noteText">
                            Same variable can hold different types at different
                            times.
                        </span>
                    </div>
                </div>

                <div className="section">
                    <h3>Dynamic typing</h3>
                    <pre className="code">
                        {`let v = 10;
v = "ten";
console.log(v); // "ten"`}
                    </pre>
                </div>

                <div className="section">
                    <h3>typeof operator</h3>
                    <p>
                        typeof tells the type of a value. Small gotcha: typeof
                        null returns "object".
                    </p>

                    <pre className="code">
                        {`console.log(typeof "hi"); // "string"
console.log(typeof 10); // "number"
console.log(typeof null); // "object"`}
                    </pre>
                </div>

                <div className="section">
                    <h3>Type coercion</h3>
                    <p>
                        Coercion means JavaScript automatically converts types.
                        Use strict equality to avoid surprises.
                    </p>

                    <pre className="code">
                        {`console.log("5" + 1); // "51"
console.log("5" - 1); // 4
console.log(5 == "5"); // true
console.log(5 === "5"); // false`}
                    </pre>
                </div>

                <div className="section">
                    <h3>Truthy vs falsy</h3>
                    <p>
                        In conditions, some values behave like false. Everything
                        else is truthy.
                    </p>

                    <pre className="code">
                        {`console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("ok")); // true`}
                    </pre>

                    <div className="note2">
                        <span className="noteIcon2">
                            <FiTarget />
                        </span>
                        <span className="noteText2">
                            Falsy values: 0, "", null, undefined, NaN, false
                        </span>
                    </div>
                </div>

                <div className="footer">
                    <div className="footerTitle">Quick takeaway</div>
                    <ul className="footerList">
                        <li>
                            - Use const by default, let when reassignment needed
                        </li>
                        <li>- Prefer === over ==</li>
                        <li>- Remember typeof null is "object"</li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default VariablesDataTypes;
