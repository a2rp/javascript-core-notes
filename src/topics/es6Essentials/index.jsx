import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiZap } from "react-icons/fi";

const ES6Essentials = () => {
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

                <span className="title">ES6+ Essentials</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                {/* Destructuring */}
                <div className="section">
                    <h3>Destructuring</h3>
                    <p>
                        Destructuring allows extracting values from arrays or
                        objects into variables in a clean way.
                    </p>

                    <pre className="code">
                        {`const user = { name: "Ash", age: 25 };

const { name, age } = user;

console.log(name); // Ash
console.log(age);  // 25`}
                    </pre>
                </div>

                {/* Spread */}
                <div className="section">
                    <h3>Spread</h3>
                    <p>
                        Spread expands arrays or objects into individual
                        elements.
                    </p>

                    <pre className="code">
                        {`const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

console.log(arr2); // [1, 2, 3, 4]`}
                    </pre>
                </div>

                {/* Rest */}
                <div className="section">
                    <h3>Rest</h3>
                    <p>Rest collects multiple values into a single array.</p>

                    <pre className="code">
                        {`function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3)); // 6`}
                    </pre>
                </div>

                {/* Default parameters */}
                <div className="section">
                    <h3>Default parameters</h3>
                    <p>Default values are used if no argument is provided.</p>

                    <pre className="code">
                        {`function greet(name = "Guest") {
  return "Hello " + name;
}

console.log(greet()); // Hello Guest`}
                    </pre>
                </div>

                {/* Template literals */}
                <div className="section">
                    <h3>Template literals</h3>
                    <p>
                        Template literals use backticks and allow string
                        interpolation.
                    </p>

                    <pre className="code">
                        {`const name = "Ash";
const message = \`Welcome \${name}\`;

console.log(message); // Welcome Ash`}
                    </pre>
                </div>

                {/* Modules */}
                <div className="section">
                    <h3>Modules</h3>
                    <p>
                        Modules allow splitting code into separate files for
                        better structure.
                    </p>
                </div>

                {/* export */}
                <div className="section">
                    <h3>export</h3>

                    <pre className="code">
                        {`// math.js
export function add(a, b) {
  return a + b;
}`}
                    </pre>
                </div>

                {/* import */}
                <div className="section">
                    <h3>import</h3>

                    <pre className="code">
                        {`// main.js
import { add } from "./math.js";

console.log(add(2, 3)); // 5`}
                    </pre>
                </div>

                {/* Classes */}
                <div className="section">
                    <h3>Classes</h3>
                    <p>
                        Classes provide a cleaner syntax for creating objects
                        and constructors.
                    </p>

                    <pre className="code">
                        {`class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hi " + this.name;
  }
}

const p = new Person("Ash");
console.log(p.greet()); // Hi Ash`}
                    </pre>
                </div>

                {/* Static methods */}
                <div className="section">
                    <h3>Static methods</h3>
                    <p>
                        Static methods belong to the class itself, not
                        instances.
                    </p>

                    <pre className="code">
                        {`class MathUtil {
  static double(n) {
    return n * 2;
  }
}

console.log(MathUtil.double(5)); // 10`}
                    </pre>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ES6Essentials;
