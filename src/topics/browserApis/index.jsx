import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiGlobe } from "react-icons/fi";

const BrowserApis = () => {
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
                    <FiGlobe />
                </span>

                <span className="title">Browser APIs</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                {/* Browser APIs */}
                <div className="section">
                    <h3>What are Browser APIs</h3>
                    <p>
                        Browser APIs are built-in features provided by the
                        browser. JavaScript itself does not include storage, URL
                        handling, or DOM access. The browser provides these
                        capabilities.
                    </p>
                    <p>
                        Examples include localStorage, sessionStorage, fetch,
                        and URLSearchParams.
                    </p>
                </div>

                {/* localStorage */}
                <div className="section">
                    <h3>localStorage</h3>
                    <p>
                        localStorage stores data in the browser with no
                        expiration. The data remains even after page refresh or
                        browser restart.
                    </p>

                    <pre className="code">
                        {`localStorage.setItem("name", "Ashish");

const value = localStorage.getItem("name");
console.log(value); 
// Output: Ashish

localStorage.removeItem("name");`}
                    </pre>
                </div>

                {/* sessionStorage */}
                <div className="section">
                    <h3>sessionStorage</h3>
                    <p>
                        sessionStorage works like localStorage but data exists
                        only for the current browser tab session. Closing the
                        tab clears the data.
                    </p>

                    <pre className="code">
                        {`sessionStorage.setItem("token", "12345");

const token = sessionStorage.getItem("token");
console.log(token);
// Output: 12345`}
                    </pre>
                </div>

                {/* JSON methods */}
                <div className="section">
                    <h3>JSON methods</h3>
                    <p>
                        localStorage stores only strings. To store objects, we
                        convert them using JSON.stringify and JSON.parse.
                    </p>

                    <pre className="code">
                        {`const user = { name: "Ashish", age: 25 };

const stringified = JSON.stringify(user);
console.log(stringified);
// Output: {"name":"Ashish","age":25}

const parsed = JSON.parse(stringified);
console.log(parsed.name);
// Output: Ashish`}
                    </pre>
                </div>

                {/* URLSearchParams */}
                <div className="section">
                    <h3>URLSearchParams</h3>
                    <p>
                        URLSearchParams helps read and modify query parameters
                        in a URL.
                    </p>

                    <pre className="code">
                        {`const params = new URLSearchParams("?id=10&name=ashish");

console.log(params.get("id"));
// Output: 10

console.log(params.get("name"));
// Output: ashish`}
                    </pre>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default BrowserApis;
