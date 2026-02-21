import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiRefreshCcw } from "react-icons/fi";

const EventLoopConcurrency = () => {
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
                    <FiRefreshCcw />
                </span>

                <span className="title">Event Loop and Concurrency Model</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                {/* Call Stack */}
                <div className="section">
                    <h3>Call Stack</h3>
                    <p>
                        The call stack is where JavaScript executes functions.
                        It follows LIFO - last in first out.
                    </p>

                    <pre className="code">
                        {`function one() {
  console.log("one");
}

function two() {
  one();
  console.log("two");
}

two();

// Output:
// one
// two`}
                    </pre>

                    <p>
                        two goes into stack first, then one runs, then stack
                        clears.
                    </p>
                </div>

                {/* Web APIs */}
                <div className="section">
                    <h3>Web APIs</h3>
                    <p>
                        Web APIs are provided by the browser, not JavaScript
                        itself. Examples include setTimeout, fetch, DOM events.
                    </p>

                    <pre className="code">
                        {`console.log("start");

setTimeout(() => {
  console.log("timer");
}, 1000);

console.log("end");

// Output:
// start
// end
// timer`}
                    </pre>

                    <p>
                        setTimeout runs in Web APIs and waits outside the call
                        stack.
                    </p>
                </div>

                {/* Task Queue */}
                <div className="section">
                    <h3>Task Queue</h3>
                    <p>
                        Also called macrotask queue. setTimeout and setInterval
                        callbacks go here after Web APIs finish.
                    </p>
                </div>

                {/* Microtask Queue */}
                <div className="section">
                    <h3>Microtask Queue</h3>
                    <p>
                        Promises and queueMicrotask use the microtask queue. It
                        has higher priority than the task queue.
                    </p>

                    <pre className="code">
                        {`console.log("start");

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end");

// Output:
// start
// end
// promise`}
                    </pre>
                </div>

                {/* Promise Queue */}
                <div className="section">
                    <h3>Promise Queue</h3>
                    <p>
                        Promise callbacks are stored in the microtask queue.
                        They always run before setTimeout callbacks.
                    </p>

                    <pre className="code">
                        {`setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

// Output:
// promise
// timeout`}
                    </pre>
                </div>

                {/* Event Loop Visual */}
                <div className="section">
                    <h3>Event Loop Visual Model</h3>
                    <p>
                        The event loop constantly checks: 1 - Is call stack
                        empty 2 - If yes, run microtasks 3 - Then run next task
                        from task queue
                    </p>

                    <p>
                        Order of execution: Call Stack - Microtasks - Macrotasks
                    </p>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default EventLoopConcurrency;
