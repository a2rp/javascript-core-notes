// functionalProgrammingConcepts/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiActivity,
    FiCode,
    FiShield,
    FiRepeat,
    FiZap,
} from "react-icons/fi";

const FunctionalProgrammingConcepts = () => {
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
                    <FiActivity />
                </span>

                <span className="title">Functional Programming Concepts</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        Functional programming in JavaScript means writing code
                        that is predictable and easier to test. The big ideas
                        are keeping data unchanged, using functions that return
                        values, and avoiding hidden changes.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Immutability</h3>
                    <p className="p">
                        Immutability means you do not change the original data.
                        Instead, you create a new copy with updates. This avoids
                        unexpected bugs in large apps.
                    </p>

                    <pre className="code">{`// Bad - mutates original
const nums = [1, 2, 3];
nums.push(4);
console.log(nums); // [1, 2, 3, 4]

// Good - create a new array
const nums2 = [1, 2, 3];
const next = [...nums2, 4];
console.log(nums2); // [1, 2, 3]
console.log(next);  // [1, 2, 3, 4]`}</pre>
                </div>

                <div className="section">
                    <h3 className="h3">map vs forEach</h3>
                    <p className="p">
                        map returns a new array with transformed values. forEach
                        does not return a new array, it is used for doing an
                        action like logging or updating something outside.
                    </p>

                    <pre className="code">{`const nums = [1, 2, 3];

// map - returns a new array
const doubled = nums.map((n) => n * 2);
console.log(doubled); // [2, 4, 6]
console.log(nums);    // [1, 2, 3]

// forEach - returns undefined
const result = nums.forEach((n) => n * 2);
console.log(result);  // undefined`}</pre>
                </div>

                <div className="section">
                    <h3 className="h3">Pure functions</h3>
                    <p className="p">
                        A pure function always gives the same output for the
                        same input and does not change anything outside it. Pure
                        functions are easier to debug and test.
                    </p>

                    <pre className="code">{`// Pure - depends only on input
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5

// Not pure - uses outside value
let tax = 10;
const addTax = (price) => price + tax;

console.log(addTax(100)); // 110
tax = 20;
console.log(addTax(100)); // 120`}</pre>
                </div>

                <div className="section">
                    <h3 className="h3">Side effects</h3>
                    <p className="p">
                        A side effect is when a function changes something
                        outside itself, like updating a global variable, making
                        an API call, writing to localStorage, or changing the
                        DOM. Side effects are not always bad, but should be
                        controlled and kept in clear places.
                    </p>

                    <pre className="code">{`// Side effect - changes outside state
let count = 0;

const increment = () => {
  count = count + 1;
  console.log(count); // logs output as a side effect
};

increment(); // 1
increment(); // 2

// No side effect - returns a value
const incrementPure = (n) => n + 1;

console.log(incrementPure(1)); // 2
console.log(incrementPure(2)); // 3`}</pre>
                </div>

                <div className="summary">
                    <div className="summaryRow">
                        <span className="chip">
                            <FiShield /> immutability
                        </span>
                        <span className="chip">
                            <FiRepeat /> map returns new array
                        </span>
                        <span className="chip">
                            <FiZap /> pure functions
                        </span>
                    </div>

                    <p className="p muted">
                        Quick rule - prefer returning new values instead of
                        changing existing values. Keep side effects separate.
                    </p>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default FunctionalProgrammingConcepts;
