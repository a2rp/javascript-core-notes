// memoryPerformance/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiCpu, FiCode } from "react-icons/fi";

const MemoryPerformance = () => {
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

                <span className="title">Memory and Performance</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">Stack vs heap</h3>
                    <p className="p">
                        JavaScript uses two main memory areas. The stack stores
                        short-lived data like function calls and primitive
                        values. The heap stores objects, arrays, and functions
                        because they can be larger and live longer.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Stack (primitive) vs Heap (object)
                        </div>
                        <pre className="code">
                            {`let a = 10;           // stack
let user = { name: "Ash" }; // heap (object lives in heap)

// user variable holds a reference (address) on stack`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Garbage collection</h3>
                    <p className="p">
                        Garbage collection is how JavaScript frees unused heap
                        memory automatically. When an object is no longer
                        reachable from your code, the engine can clean it up.
                        You do not manually free memory in JavaScript.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Unreachable objects get cleaned
                        </div>
                        <pre className="code">
                            {`let obj = { x: 1 };   // heap
obj = null;            // object becomes unreachable
// later: GC can free that memory`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Reference vs value</h3>
                    <p className="p">
                        Primitives are copied by value, so each variable gets
                        its own separate value. Objects and arrays are copied by
                        reference, meaning variables can point to the same
                        object in heap.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Value copy (primitive)
                        </div>
                        <pre className="code">
                            {`let x = 5;
let y = x;
y = 99;

console.log(x); // 5
console.log(y); // 99`}
                        </pre>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Reference copy (object)
                        </div>
                        <pre className="code">
                            {`const a = { score: 10 };
const b = a;

b.score = 99;

console.log(a.score); // 99
console.log(b.score); // 99`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Shallow copy vs deep copy</h3>
                    <p className="p">
                        A shallow copy copies the top-level structure but still
                        shares nested references. A deep copy duplicates nested
                        objects too, so changes do not leak back.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Shallow copy (spread)
                        </div>
                        <pre className="code">
                            {`const original = { name: "Ash", meta: { level: 1 } };
const copy = { ...original };

copy.name = "Bro";
copy.meta.level = 99;

console.log(original.name);      // "Ash"
console.log(original.meta.level); // 99 (shared nested object)`}
                        </pre>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Deep copy (structuredClone)
                        </div>
                        <pre className="code">
                            {`const original = { name: "Ash", meta: { level: 1 } };
const deep = structuredClone(original);

deep.meta.level = 99;

console.log(original.meta.level); // 1
console.log(deep.meta.level);     // 99`}
                        </pre>
                    </div>

                    <div className="callout">
                        <div className="calloutTitle">Quick tip</div>
                        <div className="calloutText">
                            Use <span className="mono">structuredClone</span>{" "}
                            when available. For older environments, you may use
                            JSON clone for simple data, but it breaks for dates,
                            functions, undefined, and special types.
                        </div>
                    </div>
                </div>

                <div className="footerNote">
                    <div className="footerTitle">Practical mindset</div>
                    <ul className="checks">
                        <li>
                            <span className="checkDot" /> Prefer immutability in
                            state updates
                        </li>
                        <li>
                            <span className="checkDot" /> Watch out for shared
                            nested objects
                        </li>
                        <li>
                            <span className="checkDot" /> Avoid keeping large
                            unused objects referenced
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default MemoryPerformance;
