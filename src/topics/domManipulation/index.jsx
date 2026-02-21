// domManipulation/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiMousePointer,
    FiCode,
} from "react-icons/fi";

const DomManipulation = () => {
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
                    <FiMousePointer />
                </span>

                <span className="title">DOM Manipulation</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3 className="h3">DOM Manipulation</h3>
                    <p className="p">
                        DOM means Document Object Model. When the browser reads
                        HTML, it creates a tree of elements. JavaScript can
                        select elements from this tree and change them.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Selecting elements</h3>
                    <p className="p">
                        To change anything, first you select it. The most common
                        selectors are getElementById and querySelector.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">getElementById</h3>
                    <p className="p">
                        Selects one element by its id. It is fast and returns a
                        single element or null.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`// HTML
// <h1 id="title">Hello</h1>

const el = document.getElementById("title");
console.log(el.textContent);
// Output: Hello`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">querySelector</h3>
                    <p className="p">
                        Selects the first element that matches a CSS selector.
                        Works with classes, ids, tags, and combinations.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`// HTML
// <div class="card"><p class="text">Hi</p></div>

const p = document.querySelector(".card .text");
console.log(p.textContent);
// Output: Hi`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Changing content</h3>
                    <p className="p">
                        Use textContent for plain text and innerHTML for HTML.
                        Prefer textContent when possible.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`// HTML
// <p id="msg">Old</p>

const msg = document.getElementById("msg");
msg.textContent = "New";
console.log(msg.textContent);
// Output: New`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Changing styles</h3>
                    <p className="p">
                        You can change inline styles using element.style. For
                        bigger styling changes, classList is usually better.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`// HTML
// <div id="box"></div>

const box = document.getElementById("box");
box.style.width = "120px";
box.style.height = "60px";
box.style.backgroundColor = "black";
// Result: box becomes a 120x60 black rectangle`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Creating elements</h3>
                    <p className="p">
                        Use document.createElement to create a new element, then
                        append it to the page.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`// HTML
// <div id="root"></div>

const root = document.getElementById("root");

const btn = document.createElement("button");
btn.textContent = "Click me";

root.appendChild(btn);
// Result: a button appears inside #root`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Removing elements</h3>
                    <p className="p">
                        You can remove an element using element.remove(). This
                        removes it from the DOM.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`// HTML
// <p id="temp">Delete me</p>

const temp = document.getElementById("temp");
temp.remove();
// Result: the paragraph disappears`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">classList</h3>
                    <p className="p">
                        classList is the clean way to add, remove, or toggle CSS
                        classes on an element.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`// HTML
// <div id="card" class="card"></div>

const card = document.getElementById("card");

card.classList.add("active");
// Result: class becomes "card active"

card.classList.toggle("active");
// Result: removes "active" if present, otherwise adds it`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Attributes</h3>
                    <p className="p">
                        Attributes are values on HTML elements like href, src,
                        alt, and data-* values. Use getAttribute and
                        setAttribute to work with them.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`// HTML
// <a id="link" href="https://example.com">Open</a>

const link = document.getElementById("link");

console.log(link.getAttribute("href"));
// Output: https://example.com

link.setAttribute("target", "_blank");
// Result: link opens in new tab`}
                        </pre>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default DomManipulation;
