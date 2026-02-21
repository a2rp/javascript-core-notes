// strings/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiType, FiCode } from "react-icons/fi";

const Strings = () => {
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
                    <FiType />
                </span>

                <span className="title">Strings</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3>Strings</h3>
                    <p>
                        A string is text data in JavaScript. Strings are written
                        inside quotes - "hello", 'world', or backticks `like
                        this`. Strings are immutable, meaning methods return a
                        new string instead of changing the original.
                    </p>

                    <pre className="code">
                        {`const name = "Ash";
const city = 'Bangalore';

console.log(name); // Ash
console.log(city); // Bangalore`}
                    </pre>
                </div>

                <div className="section">
                    <h3>Template literals</h3>
                    <p>
                        Template literals use backticks and allow easy string
                        interpolation using ${"{...}"}. They also support
                        multi-line strings.
                    </p>

                    <pre className="code">
                        {`const name = "Ash";
const msg = \`Hello, \${name}!\`;

console.log(msg); // Hello, Ash!

const multi = \`Line 1
Line 2\`;

console.log(multi);
// Line 1
// Line 2`}
                    </pre>
                </div>

                <div className="section">
                    <h3>String methods</h3>
                    <p>
                        String methods help you transform, search, and extract
                        parts of text. Most commonly used methods are below.
                    </p>
                </div>

                <div className="section">
                    <h3>toUpperCase</h3>
                    <p>Converts the string to uppercase.</p>

                    <pre className="code">
                        {`const s = "hello";
console.log(s.toUpperCase()); // HELLO`}
                    </pre>
                </div>

                <div className="section">
                    <h3>toLowerCase</h3>
                    <p>Converts the string to lowercase.</p>

                    <pre className="code">
                        {`const s = "HeLLo";
console.log(s.toLowerCase()); // hello`}
                    </pre>
                </div>

                <div className="section">
                    <h3>trim</h3>
                    <p>
                        Removes spaces from the start and end of a string.
                        Useful for form input cleaning.
                    </p>

                    <pre className="code">
                        {`const raw = "   hello   ";
console.log(raw.trim()); // hello`}
                    </pre>
                </div>

                <div className="section">
                    <h3>slice</h3>
                    <p>
                        Extracts a part of a string and returns it. It does not
                        modify the original string.
                    </p>

                    <pre className="code">
                        {`const s = "JavaScript";
console.log(s.slice(0, 4)); // Java
console.log(s.slice(4)); // Script`}
                    </pre>
                </div>

                <div className="section">
                    <h3>replace</h3>
                    <p>
                        Replaces the first match of a substring and returns a
                        new string. For multiple replacements, you usually use a
                        regular expression.
                    </p>

                    <pre className="code">
                        {`const s = "I love JS";
console.log(s.replace("JS", "JavaScript")); // I love JavaScript`}
                    </pre>
                </div>

                <div className="section">
                    <h3>split</h3>
                    <p>
                        Splits a string into an array using a separator. Very
                        useful when working with CSV or user input.
                    </p>

                    <pre className="code">
                        {`const s = "a,b,c";
const arr = s.split(",");

console.log(arr); // ["a","b","c"]`}
                    </pre>
                </div>

                <div className="section">
                    <h3>includes</h3>
                    <p>
                        Checks if a string contains another substring. Returns
                        true or false.
                    </p>

                    <pre className="code">
                        {`const s = "frontend developer";
console.log(s.includes("dev")); // true
console.log(s.includes("backend")); // false`}
                    </pre>
                </div>

                <div className="footerNote">
                    <div className="footerTitle">Quick takeaway</div>
                    <ul className="checks">
                        <li>
                            <span className="checkDot" />
                            String methods return new strings - original does
                            not change
                        </li>
                        <li>
                            <span className="checkDot" />
                            Template literals are best for building dynamic text
                        </li>
                        <li>
                            <span className="checkDot" />
                            trim and split are very common in real forms and
                            APIs
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Strings;
