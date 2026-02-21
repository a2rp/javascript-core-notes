// bestPractices/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCheckCircle,
    FiCode,
    FiShield,
    FiTerminal,
    FiTool,
    FiLayers,
} from "react-icons/fi";

const BestPractices = () => {
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
                    <FiCheckCircle />
                </span>

                <span className="title">Best Practices</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">Clean code</h3>
                    <p className="p">
                        Write code that another developer can understand fast.
                        Use clear names, small functions, and avoid clever hacks
                        that confuse future you.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Naming and small functions
                        </div>
                        <pre className="code">{`function calcTotal(price, qty) {
  return price * qty;
}

const total = calcTotal(499, 2);
console.log(total); // 998`}</pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Avoid global pollution</h3>
                    <p className="p">
                        Avoid creating variables in the global scope. Globals
                        are easy to overwrite and cause hard to debug issues.
                        Keep variables inside functions or modules.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiShield />
                            </span>
                            Keep scope local
                        </div>
                        <pre className="code">{`// bad - global variable
// userName = "ash"; // creates global in sloppy code, avoid

// good - local variable inside function
function setUserName() {
  const userName = "ash";
  return userName;
}

console.log(setUserName()); // "ash"`}</pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Avoid callback hell</h3>
                    <p className="p">
                        Deep nested callbacks make code unreadable and error
                        handling painful. Prefer promises and async - await.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiLayers />
                            </span>
                            Async - await example
                        </div>
                        <pre className="code">{`async function loadUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    console.log(data.name); // "Leanne Graham"
  } catch (err) {
    console.log("error:", err);
  }
}

loadUser();`}</pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Avoid unnecessary re renders</h3>
                    <p className="p">
                        In React, avoid re rendering components when nothing
                        changed. Keep props stable, avoid creating new objects
                        and functions on every render unless needed.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Stable values with useMemo
                        </div>
                        <pre className="code">{`import React, { useMemo } from "react";

const PriceBox = ({ price, qty }) => {
  const total = useMemo(() => price * qty, [price, qty]);

  return <div>Total: {total}</div>;
};

// result - total recalculates only when price or qty changes`}</pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Defensive coding</h3>
                    <p className="p">
                        Assume data can be missing or wrong. Validate inputs,
                        handle null and undefined, and avoid breaking the UI on
                        bad values.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiShield />
                            </span>
                            Safe access and fallback
                        </div>
                        <pre className="code">{`function getCity(user) {
  const city = user?.address?.city ?? "Unknown";
  return city;
}

console.log(getCity({ address: { city: "Bangalore" } })); // "Bangalore"
console.log(getCity(null)); // "Unknown"`}</pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Debugging with console</h3>
                    <p className="p">
                        Use console tools properly. console.log is fine, but
                        console.table, console.time, and console.group make
                        debugging faster.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiTerminal />
                            </span>
                            Useful console tools
                        </div>
                        <pre className="code">{`const users = [
  { id: 1, name: "ash" },
  { id: 2, name: "neha" },
];

console.table(users); 
// result - table view in console

console.time("load");
// do something
console.timeEnd("load");
// result - prints time taken`}</pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">DevTools basics</h3>
                    <p className="p">
                        Browser DevTools help you inspect DOM, CSS, network
                        calls, storage, and performance. Learn the basics and
                        debugging becomes 10x easier.
                    </p>

                    <ul className="list">
                        <li>
                            <span className="dot" /> Elements - inspect HTML and
                            CSS
                        </li>
                        <li>
                            <span className="dot" /> Console - logs and errors
                        </li>
                        <li>
                            <span className="dot" /> Network - API requests and
                            timing
                        </li>
                        <li>
                            <span className="dot" /> Application - storage and
                            cookies
                        </li>
                        <li>
                            <span className="dot" /> Performance - slow renders
                            and bottlenecks
                        </li>
                    </ul>

                    <div className="tip">
                        <span className="tipIcon">
                            <FiTool />
                        </span>
                        <span className="tipText">
                            Shortcut - Press F12 or Ctrl - Shift - I to open
                            DevTools.
                        </span>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default BestPractices;
