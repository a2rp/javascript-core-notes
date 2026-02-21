// controlFlow/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiShuffle,
    FiCode,
    FiCornerDownRight,
} from "react-icons/fi";

const ControlFlow = () => {
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
                    <FiShuffle />
                </span>

                <span className="title">Control Flow</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <p className="p">
                        Control flow decides what code runs, when it runs, and
                        how many times it runs. Most logic in JavaScript comes
                        from conditions and loops.
                    </p>
                </div>

                {/* if else */}
                <div className="section">
                    <h3 className="h3">if else</h3>
                    <p className="p">
                        Use if else when you want to run code based on a
                        condition.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`const age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// output - Adult`}
                        </pre>
                    </div>
                </div>

                {/* switch */}
                <div className="section">
                    <h3 className="h3">switch</h3>
                    <p className="p">
                        switch is useful when you have multiple exact matches
                        for the same value.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`const role = "admin";

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "user":
    console.log("Limited access");
    break;
  default:
    console.log("No access");
}

// output - Full access`}
                        </pre>
                    </div>

                    <div className="hint">
                        <span className="hintIcon">
                            <FiCornerDownRight />
                        </span>
                        break is important - without it, execution continues to
                        the next case.
                    </div>
                </div>

                {/* for */}
                <div className="section">
                    <h3 className="h3">for</h3>
                    <p className="p">
                        Use for when you know how many times you want to loop.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// output - 1
// output - 2
// output - 3`}
                        </pre>
                    </div>
                </div>

                {/* while */}
                <div className="section">
                    <h3 className="h3">while</h3>
                    <p className="p">
                        while runs as long as the condition stays true. Use it
                        when you do not know the exact number of iterations in
                        advance.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`let n = 3;

while (n > 0) {
  console.log(n);
  n--;
}

// output - 3
// output - 2
// output - 1`}
                        </pre>
                    </div>
                </div>

                {/* do while */}
                <div className="section">
                    <h3 className="h3">do while</h3>
                    <p className="p">
                        do while runs the code at least once, even if the
                        condition is false at the start.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`let x = 0;

do {
  console.log("Runs once");
} while (x > 0);

// output - Runs once`}
                        </pre>
                    </div>
                </div>

                {/* break */}
                <div className="section">
                    <h3 className="h3">break</h3>
                    <p className="p">
                        break stops the current loop or switch immediately.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

// output - 1
// output - 2`}
                        </pre>
                    </div>
                </div>

                {/* continue */}
                <div className="section">
                    <h3 className="h3">continue</h3>
                    <p className="p">
                        continue skips the current iteration and moves to the
                        next one.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`for (let i = 1; i <= 4; i++) {
  if (i === 2) continue;
  console.log(i);
}

// output - 1
// output - 3
// output - 4`}
                        </pre>
                    </div>
                </div>

                {/* Nested loops */}
                <div className="section">
                    <h3 className="h3">Nested loops</h3>
                    <p className="p">
                        A loop inside another loop. Useful for grids and pairs.
                        Be careful - nested loops can get slow for large sizes.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`for (let row = 1; row <= 2; row++) {
  for (let col = 1; col <= 3; col++) {
    console.log(\`row \${row} col \${col}\`);
  }
}

// output - row 1 col 1
// output - row 1 col 2
// output - row 1 col 3
// output - row 2 col 1
// output - row 2 col 2
// output - row 2 col 3`}
                        </pre>
                    </div>
                </div>

                {/* Guard clauses */}
                <div className="section">
                    <h3 className="h3">Guard clauses</h3>
                    <p className="p">
                        Guard clauses exit early to avoid deep nesting. This
                        keeps code cleaner and easier to read.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`const getDiscount = (isMember) => {
  if (!isMember) return 0; // guard clause - exit early
  return 10;
};

console.log(getDiscount(false));
console.log(getDiscount(true));

// output - 0
// output - 10`}
                        </pre>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ControlFlow;
