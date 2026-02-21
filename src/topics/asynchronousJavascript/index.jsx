// asynchronousJavascript/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiClock,
    FiZap,
    FiCode,
    FiActivity,
} from "react-icons/fi";

const AsynchronousJavascript = () => {
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
                    <FiClock />
                </span>

                <span className="title">Asynchronous JavaScript</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3>Basics</h3>
                    <p>
                        JavaScript runs code in a single main thread. Async code
                        lets you start a task now and handle its result later,
                        without freezing the UI or blocking other work.
                    </p>
                </div>

                <div className="section">
                    <h3>Synchronous vs asynchronous</h3>
                    <p>
                        Synchronous code runs line by line and waits for each
                        step to finish. Asynchronous code starts a task and
                        continues running the next lines, then comes back when
                        the task is done.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Sync vs async example
                        </div>
                        <pre className="code">
                            {`console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

// output:
// A
// C
// B`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>Blocking vs non blocking</h3>
                    <p>
                        Blocking means the main thread cannot do anything else
                        until a task finishes. Non-blocking means the task is
                        handled in the background and the main thread keeps
                        running.
                    </p>

                    <div className="note">
                        <span className="noteIcon">
                            <FiActivity />
                        </span>
                        In the browser, network requests and timers are handled
                        by Web APIs, so your UI stays responsive.
                    </div>
                </div>

                <div className="section">
                    <h3>Timers</h3>
                    <p>
                        Timers schedule code to run later or repeatedly. They do
                        not pause JavaScript. They register a callback and
                        JavaScript continues running.
                    </p>
                </div>

                <div className="section">
                    <h3>setTimeout</h3>
                    <p>
                        setTimeout runs a function once after a delay in
                        milliseconds.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiClock />
                            </span>
                            Run once after delay
                        </div>
                        <pre className="code">
                            {`console.log("Start");

setTimeout(() => {
  console.log("After 1 second");
}, 1000);

console.log("End");

// output:
// Start
// End
// After 1 second`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>setInterval</h3>
                    <p>
                        setInterval runs a function repeatedly after every given
                        delay. You should clear it when you are done.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiClock />
                            </span>
                            Repeat every second
                        </div>
                        <pre className="code">
                            {`let count = 0;

const id = setInterval(() => {
  count += 1;
  console.log("Tick:", count);

  if (count === 3) {
    clearInterval(id);
  }
}, 1000);

// output:
// Tick: 1
// Tick: 2
// Tick: 3`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>Promises</h3>
                    <p>
                        A Promise represents a value that will be available in
                        the future. It can be pending, fulfilled, or rejected.
                    </p>
                </div>

                <div className="section">
                    <h3>Creating promises</h3>
                    <p>
                        You create a Promise using new Promise with resolve and
                        reject functions.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiZap />
                            </span>
                            Create a promise
                        </div>
                        <pre className="code">
                            {`const p = new Promise((resolve, reject) => {
  const ok = true;

  setTimeout(() => {
    if (ok) resolve("Done");
    else reject("Failed");
  }, 500);
});

p.then((msg) => console.log(msg));
// output:
// Done`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>then</h3>
                    <p>
                        then runs when the Promise is fulfilled and gives you
                        the resolved value.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            then example
                        </div>
                        <pre className="code">
                            {`Promise.resolve(10)
  .then((n) => n * 2)
  .then((n) => console.log(n));

// output:
// 20`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>catch</h3>
                    <p>
                        catch runs when the Promise is rejected. It is used for
                        error handling.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            catch example
                        </div>
                        <pre className="code">
                            {`Promise.reject("Oops")
  .catch((err) => console.log("Error:", err));

// output:
// Error: Oops`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>finally</h3>
                    <p>
                        finally runs after the Promise settles, whether it is
                        fulfilled or rejected. Useful for cleanup.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            finally example
                        </div>
                        <pre className="code">
                            {`Promise.resolve("OK")
  .then((v) => console.log(v))
  .finally(() => console.log("Cleanup"));

// output:
// OK
// Cleanup`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>Async Await</h3>
                    <p>
                        async and await are a cleaner way to work with Promises.
                        async makes a function return a Promise. await pauses
                        inside that async function until the Promise resolves.
                    </p>
                </div>

                <div className="section">
                    <h3>async function</h3>
                    <p>
                        An async function always returns a Promise, even if you
                        return a normal value.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiZap />
                            </span>
                            async returns a promise
                        </div>
                        <pre className="code">
                            {`async function getNumber() {
  return 5;
}

getNumber().then((v) => console.log(v));

// output:
// 5`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>await keyword</h3>
                    <p>
                        await waits for a Promise to resolve and gives you the
                        resolved value. You can only use await inside an async
                        function.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiZap />
                            </span>
                            await example
                        </div>
                        <pre className="code">
                            {`const wait = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function run() {
  console.log("A");
  await wait(300);
  console.log("B");
}

run();

// output:
// A
// B`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>try catch</h3>
                    <p>
                        Use try catch with async await to handle rejected
                        Promises in a clean way.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Error handling with try catch
                        </div>
                        <pre className="code">
                            {`const fail = () =>
  Promise.reject("Network error");

async function load() {
  try {
    const res = await fail();
    console.log(res);
  } catch (err) {
    console.log("Caught:", err);
  }
}

load();

// output:
// Caught: Network error`}
                        </pre>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default AsynchronousJavascript;
