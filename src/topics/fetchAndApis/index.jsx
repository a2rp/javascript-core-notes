// fetchAndApis/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiCloud,
    FiCode,
    FiAlertTriangle,
    FiSend,
    FiDatabase,
} from "react-icons/fi";

const FetchAndApis = () => {
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
                    <FiCloud />
                </span>

                <span className="title">Fetch and APIs</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3>Fetch and APIs</h3>
                    <p>
                        An API is a way for your app to talk to another service
                        over the internet. Most web APIs use HTTP and send data
                        as JSON. In the browser, the most common way to call an
                        API is using fetch().
                    </p>
                </div>

                <div className="section">
                    <h3>Fetch API</h3>
                    <p>
                        fetch() makes an HTTP request and returns a Promise. The
                        first await gives you a Response object. The second
                        await reads the body data, usually with response.json().
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Basic GET request
                        </div>
                        <pre className="code">
                            {`async function loadUser() {
  const res = await fetch('https://api.example.com/user/1');
  const data = await res.json();

  console.log(data);
  // output - { id: 1, name: 'Alex' }
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>HTTP methods</h3>
                    <p>
                        HTTP methods describe what action you want to perform on
                        a resource.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            GET - read data
                        </li>
                        <li>
                            <span className="dot" />
                            POST - create new data
                        </li>
                        <li>
                            <span className="dot" />
                            PUT - replace data
                        </li>
                        <li>
                            <span className="dot" />
                            PATCH - update part of data
                        </li>
                        <li>
                            <span className="dot" />
                            DELETE - remove data
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiSend />
                            </span>
                            POST request example
                        </div>
                        <pre className="code">
                            {`async function createUser() {
  const res = await fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'Sam' }),
  });

  const data = await res.json();
  console.log(data);
  // output - { id: 101, name: 'Sam' }
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>JSON</h3>
                    <p>
                        JSON stands for JavaScript Object Notation. It is a text
                        format used to send data between systems. You usually
                        convert objects to JSON using JSON.stringify and convert
                        JSON text back to objects using JSON.parse.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiDatabase />
                            </span>
                            JSON stringify and parse
                        </div>
                        <pre className="code">
                            {`const obj = { name: 'Riya', age: 22 };

const jsonText = JSON.stringify(obj);
console.log(jsonText);
// output - {"name":"Riya","age":22}

const backToObj = JSON.parse(jsonText);
console.log(backToObj);
// output - { name: 'Riya', age: 22 }`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>Handling API responses</h3>
                    <p>
                        fetch() resolves even for many HTTP errors like 404 or
                        500. So you should check response.ok or response.status
                        before reading data. Also remember that response.json()
                        can throw if the body is not valid JSON.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Checking status properly
                        </div>
                        <pre className="code">
                            {`async function getProducts() {
  const res = await fetch('https://api.example.com/products');

  if (!res.ok) {
    console.log('Request failed');
    // output - Request failed
    return;
  }

  const data = await res.json();
  console.log(data);
  // output - [ { id: 1, title: 'Phone' } ]
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>Error handling</h3>
                    <p>
                        Use try/catch to handle network failures, JSON parsing
                        failures, and your own thrown errors. For a clean flow,
                        throw a custom error when response.ok is false.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiAlertTriangle />
                            </span>
                            try/catch with custom error
                        </div>
                        <pre className="code">
                            {`async function loadProfile() {
  try {
    const res = await fetch('https://api.example.com/profile');

    if (!res.ok) {
      throw new Error('Server returned an error');
    }

    const data = await res.json();
    console.log('Profile loaded', data);
    // output - Profile loaded { id: 7, name: 'Neha' }
  } catch (err) {
    console.log('Something went wrong', err.message);
    // output - Something went wrong Server returned an error
  }
}`}
                        </pre>
                    </div>

                    <div className="tip">
                        <div className="tipTitle">Tip</div>
                        <div className="tipText">
                            Network error - fetch rejects and goes to catch.
                            HTTP error - fetch does not reject, so check res.ok.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default FetchAndApis;
