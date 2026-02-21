import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiZap } from "react-icons/fi";

const ModernFeatures = () => {
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

                <span className="title">Modern Features</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                {/* Optional chaining */}
                <div className="section">
                    <h3>Optional chaining</h3>
                    <p>
                        Optional chaining lets you safely access deeply nested
                        properties without throwing an error if something is
                        undefined.
                    </p>

                    <pre className="code">
                        {`const user = {};
console.log(user.profile?.name);
// undefined

// Without optional chaining this would throw an error`}
                    </pre>
                </div>

                {/* Nullish coalescing */}
                <div className="section">
                    <h3>Nullish coalescing</h3>
                    <p>
                        The nullish coalescing operator ?? returns the right
                        side only if the left side is null or undefined.
                    </p>

                    <pre className="code">
                        {`const count = 0;
const result = count ?? 10;
console.log(result);
// 0

// Unlike ||, it does not treat 0 as false`}
                    </pre>
                </div>

                {/* Object shorthand */}
                <div className="section">
                    <h3>Object shorthand</h3>
                    <p>
                        If variable name and object property name are same, you
                        can skip writing them twice.
                    </p>

                    <pre className="code">
                        {`const name = "Ash";
const age = 25;

const user = { name, age };
console.log(user);
// { name: "Ash", age: 25 }`}
                    </pre>
                </div>

                {/* Logical assignment operators */}
                <div className="section">
                    <h3>Logical assignment operators</h3>
                    <p>
                        These combine logical operators with assignment. They
                        make conditions shorter and cleaner.
                    </p>

                    <pre className="code">
                        {`let value = null;

value ??= 10;
console.log(value);
// 10

let flag = true;
flag &&= false;
console.log(flag);
// false`}
                    </pre>
                </div>

                {/* BigInt */}
                <div className="section">
                    <h3>BigInt</h3>
                    <p>
                        BigInt is used to represent very large integers beyond
                        the safe limit of normal numbers.
                    </p>

                    <pre className="code">
                        {`const big = 123456789012345678901234567890n;
console.log(big + 1n);
// 123456789012345678901234567891n`}
                    </pre>
                </div>

                {/* Symbol */}
                <div className="section">
                    <h3>Symbol</h3>
                    <p>
                        Symbol creates a unique identifier. Even if two symbols
                        have the same description, they are different.
                    </p>

                    <pre className="code">
                        {`const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);
// false`}
                    </pre>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ModernFeatures;
