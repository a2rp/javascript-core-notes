// objects/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiBox,
    FiCode,
    FiHash,
    FiCopy,
    FiLayers,
} from "react-icons/fi";

const Objects = () => {
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
                    <FiBox />
                </span>

                <span className="title">Objects</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="section">
                    <h3>Object Basics</h3>
                    <p>
                        An object stores data in key-value pairs. Keys are
                        usually strings and values can be anything like strings,
                        numbers, arrays, or even functions.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Basic object
                        </div>
                        <pre className="code">
                            {`const user = {
  name: "Ash",
  age: 25,
  isPro: true
};

console.log(user.name); // "Ash"`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>Creating objects</h3>
                    <p>
                        Most commonly we create objects using object literals
                        using curly braces. Another way is using the Object
                        constructor, but literals are preferred.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Two ways
                        </div>
                        <pre className="code">
                            {`const a = { city: "Bangalore" };
const b = new Object({ city: "Bangalore" });

console.log(a.city); // "Bangalore"
console.log(b.city); // "Bangalore"`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>Dot vs bracket notation</h3>
                    <p>
                        Dot notation is simple and common. Bracket notation is
                        needed when the key has spaces, special characters, or
                        when the key is stored in a variable.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiHash />
                            </span>
                            Access keys
                        </div>
                        <pre className="code">
                            {`const obj = { name: "Ash", "full name": "Ashish Ranjan" };

console.log(obj.name); // "Ash"
console.log(obj["full name"]); // "Ashish Ranjan"`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>Nested objects</h3>
                    <p>
                        Objects can contain other objects. You access nested
                        values using dot or bracket notation step by step.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiLayers />
                            </span>
                            Nested example
                        </div>
                        <pre className="code">
                            {`const profile = {
  name: "Ash",
  address: {
    city: "Bangalore",
    pin: 560049
  }
};

console.log(profile.address.city); // "Bangalore"`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>Dynamic keys</h3>
                    <p>
                        Sometimes you do not know the key name in advance. You
                        can create or access keys dynamically using bracket
                        notation.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiHash />
                            </span>
                            Dynamic key
                        </div>
                        <pre className="code">
                            {`const key = "role";
const user = { name: "Ash" };

user[key] = "developer";

console.log(user.role); // "developer"`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>Object Methods</h3>
                    <p>
                        A method is a function stored inside an object. Methods
                        can use "this" to access other properties of the same
                        object.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Method example
                        </div>
                        <pre className="code">
                            {`const user = {
  name: "Ash",
  greet() {
    return "Hi, " + this.name;
  }
};

console.log(user.greet()); // "Hi, Ash"`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>this keyword</h3>
                    <p>
                        In an object method, "this" usually refers to the object
                        before the dot. That is why user.greet() can access
                        user.name using this.name.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            this in method
                        </div>
                        <pre className="code">
                            {`const box = {
  label: "JS",
  show() {
    console.log(this.label);
  }
};

box.show(); // "JS"`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>Object.keys</h3>
                    <p>
                        Object.keys returns an array of keys of an object.
                        Useful when you want to loop over properties.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            keys
                        </div>
                        <pre className="code">
                            {`const obj = { a: 1, b: 2 };

console.log(Object.keys(obj)); // ["a", "b"]`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>Object.values</h3>
                    <p>
                        Object.values returns an array of values of an object.
                        Useful for totals or quick checks.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            values
                        </div>
                        <pre className="code">
                            {`const obj = { a: 1, b: 2 };

console.log(Object.values(obj)); // [1, 2]`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>Object.entries</h3>
                    <p>
                        Object.entries returns an array of [key, value] pairs.
                        Very handy for loops.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            entries
                        </div>
                        <pre className="code">
                            {`const obj = { a: 1, b: 2 };

console.log(Object.entries(obj));
// [["a", 1], ["b", 2]]`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>Destructuring</h3>
                    <p>
                        Destructuring is a shortcut to pull values from an
                        object into variables. It makes code cleaner.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            destructuring
                        </div>
                        <pre className="code">
                            {`const user = { name: "Ash", city: "Bangalore" };

const { name, city } = user;

console.log(name); // "Ash"
console.log(city); // "Bangalore"`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>Spread operator</h3>
                    <p>
                        The spread operator copies properties into a new object.
                        It is commonly used to make a shallow copy or merge
                        objects.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCopy />
                            </span>
                            spread merge
                        </div>
                        <pre className="code">
                            {`const a = { x: 1 };
const b = { y: 2 };

const merged = { ...a, ...b };

console.log(merged); // { x: 1, y: 2 }`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3>Shallow vs deep copy</h3>
                    <p>
                        A shallow copy duplicates only the first level. Nested
                        objects remain shared references. A deep copy duplicates
                        nested objects too.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCopy />
                            </span>
                            shallow copy problem
                        </div>
                        <pre className="code">
                            {`const original = {
  name: "Ash",
  address: { city: "Bangalore" }
};

const shallow = { ...original };
shallow.address.city = "Bhopal";

console.log(original.address.city); // "Bhopal" (shared reference)`}
                        </pre>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCopy />
                            </span>
                            deep copy simple way
                        </div>
                        <pre className="code">
                            {`const original = {
  name: "Ash",
  address: { city: "Bangalore" }
};

const deep = JSON.parse(JSON.stringify(original));
deep.address.city = "Bhopal";

console.log(original.address.city); // "Bangalore"
console.log(deep.address.city); // "Bhopal"`}
                        </pre>
                    </div>

                    <div className="note">
                        Note - JSON deep copy works for simple data. It breaks
                        for functions, Dates, undefined, and special types.
                        Modern environments support structuredClone for better
                        deep copying.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Objects;
