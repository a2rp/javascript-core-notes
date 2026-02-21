import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiGitBranch } from "react-icons/fi";

const ScopeExecutionContext = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper className={open ? "open" : ""}>
            <button
                type="button"
                className="topicHeader"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiGitBranch />
                </span>

                <span className="title">Scope & Execution Context</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3>Global scope</h3>
                    <p>
                        Variables declared outside any function or block belong
                        to global scope. They are accessible everywhere in the
                        program.
                    </p>

                    <pre className="code">
                        {`let name = "Ash";

function greet() {
  console.log(name);
}

greet();`}
                    </pre>
                </div>

                <div className="section">
                    <h3>Function scope</h3>
                    <p>
                        Variables declared inside a function are only accessible
                        inside that function.
                    </p>

                    <pre className="code">
                        {`function test() {
  let age = 25;
  console.log(age);
}

test();
// console.log(age); // Error`}
                    </pre>
                </div>

                <div className="section">
                    <h3>Block scope</h3>
                    <p>
                        Variables declared with let and const inside {} are
                        block scoped.
                    </p>

                    <pre className="code">
                        {`if (true) {
  let x = 10;
  const y = 20;
}

// console.log(x); // Error`}
                    </pre>
                </div>

                <div className="section">
                    <h3>Lexical scope</h3>
                    <p>
                        Functions remember the scope where they were created.
                        This is called lexical scope.
                    </p>

                    <pre className="code">
                        {`function outer() {
  let count = 5;

  function inner() {
    console.log(count);
  }

  inner();
}

outer();`}
                    </pre>
                </div>

                <div className="section">
                    <h3>Scope chain</h3>
                    <p>
                        When a variable is used, JavaScript looks in the current
                        scope, then outer scopes, until it finds it.
                    </p>
                </div>

                <div className="section">
                    <h3>Execution context</h3>
                    <p>
                        Every time a function runs, JavaScript creates an
                        execution context. It contains variables, arguments, and
                        the value of this.
                    </p>
                </div>

                <div className="section">
                    <h3>Call stack</h3>
                    <p>
                        The call stack keeps track of function calls. Functions
                        are pushed when called and popped when finished.
                    </p>

                    <pre className="code">
                        {`function one() {
  two();
}

function two() {
  console.log("Inside two");
}

one();`}
                    </pre>
                </div>

                <div className="section">
                    <h3>Hoisting</h3>
                    <p>
                        During compilation, JavaScript moves variable and
                        function declarations to the top of their scope. This is
                        called hoisting.
                    </p>
                </div>

                <div className="section">
                    <h3>var vs let vs const hoisting</h3>
                    <p>
                        var is hoisted and initialized as undefined. let and
                        const are hoisted but not initialized. Accessing them
                        before declaration causes ReferenceError.
                    </p>

                    <pre className="code">
                        {`console.log(a); // undefined
var a = 10;

// console.log(b); // ReferenceError
let b = 20;`}
                    </pre>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ScopeExecutionContext;
