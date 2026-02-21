// events/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiZap,
    FiMousePointer,
    FiCornerDownRight,
    FiShare2,
    FiSlash,
    FiStopCircle,
    FiCode,
} from "react-icons/fi";

const Events = () => {
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

                <span className="title">Events</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">Events</h3>
                    <p className="p">
                        Events are signals that something happened - like a
                        click, key press, scroll, submit, or page load.
                        JavaScript listens to events and runs code when they
                        happen.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiMousePointer />
                        </span>
                        addEventListener
                    </h3>
                    <p className="p">
                        addEventListener attaches a function to run when an
                        event happens on an element.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Basic click listener
                        </div>
                        <pre className="code">
                            {`const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log("clicked"); // output - clicked
});`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiShare2 />
                        </span>
                        Event object
                    </h3>
                    <p className="p">
                        The event object is passed to your listener. It contains
                        details like what type of event happened and which
                        element triggered it.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Reading event data
                        </div>
                        <pre className="code">
                            {`document.addEventListener("click", (e) => {
  console.log(e.type); // output - click
  console.log(e.target.tagName); // output - BUTTON (example)
});`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCornerDownRight />
                        </span>
                        Event bubbling
                    </h3>
                    <p className="p">
                        Bubbling means the event starts at the target element
                        and then moves upward through its parent elements. This
                        is the default behavior.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Bubbling example
                        </div>
                        <pre className="code">
                            {`const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

parent.addEventListener("click", () => {
  console.log("parent"); // output - parent
});

child.addEventListener("click", () => {
  console.log("child"); // output - child
});

// click on .child
// output order - child then parent`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiCornerDownRight />
                        </span>
                        Event capturing
                    </h3>
                    <p className="p">
                        Capturing means the event travels from the top
                        (document) down to the target element. It happens before
                        bubbling. You enable it using the third parameter or
                        capture option.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Capturing enabled
                        </div>
                        <pre className="code">
                            {`parent.addEventListener("click", () => {
  console.log("parent capture"); // output - parent capture
}, true);

child.addEventListener("click", () => {
  console.log("child"); // output - child
});

// click on .child
// output order - parent capture then child`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiShare2 />
                        </span>
                        Event delegation
                    </h3>
                    <p className="p">
                        Delegation means you attach one listener to a parent and
                        handle events for its children using e.target. This is
                        useful for dynamic lists where items are added later.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            One listener for many buttons
                        </div>
                        <pre className="code">
                            {`const list = document.querySelector(".list");

list.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    console.log("button clicked"); // output - button clicked
  }
});`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiSlash />
                        </span>
                        preventDefault
                    </h3>
                    <p className="p">
                        preventDefault stops the browser's default action.
                        Example: stop a form from submitting or stop a link from
                        navigating.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Stop form submit
                        </div>
                        <pre className="code">
                            {`const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("blocked submit"); // output - blocked submit
});`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">
                        <span className="hIcon">
                            <FiStopCircle />
                        </span>
                        stopPropagation
                    </h3>
                    <p className="p">
                        stopPropagation stops the event from moving further in
                        the bubbling or capturing chain. Use it when you do not
                        want parent listeners to run.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Stop bubbling to parent
                        </div>
                        <pre className="code">
                            {`parent.addEventListener("click", () => {
  console.log("parent"); // output - parent
});

child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("child only"); // output - child only
});

// click on .child
// output - child only`}
                        </pre>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Events;
