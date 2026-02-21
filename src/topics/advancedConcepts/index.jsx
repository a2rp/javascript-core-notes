// advancedConcepts/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiZap,
    FiCode,
    FiLink,
    FiTarget,
} from "react-icons/fi";

const AdvancedConcepts = () => {
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

                <span className="title">Advanced Concepts - Must Know</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                {/* Closures */}
                <div className="section">
                    <h3 className="h3">Closures</h3>

                    <p className="p">
                        A closure happens when a function remembers variables
                        from its outer scope, even after the outer function has
                        finished executing. This is why inner functions can
                        access outer variables later.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Closure example
                        </div>
                        <pre className="code">
                            {`function makeCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3`}
                        </pre>
                    </div>

                    <p className="p">
                        Practical use cases - data privacy, function factories,
                        memoization, and keeping state without global variables.
                    </p>
                </div>

                {/* this keyword */}
                <div className="section">
                    <h3 className="h3">this keyword</h3>

                    <p className="p">
                        this is a special keyword that usually points to the
                        object that is calling the function. The value of this
                        depends on how a function is called, not where it is
                        written.
                    </p>

                    <div className="subSection">
                        <h4 className="h4">Global context</h4>
                        <p className="p">
                            In a browser, this in global scope typically refers
                            to window. In modules, top-level this is undefined.
                        </p>

                        <div className="codeBlock">
                            <div className="codeTop">
                                <span className="codeIcon">
                                    <FiCode />
                                </span>
                                Global this
                            </div>
                            <pre className="code">
                                {`// Browser script (not module)
console.log(this === window); // true`}
                            </pre>
                        </div>
                    </div>

                    <div className="subSection">
                        <h4 className="h4">Function context</h4>
                        <p className="p">
                            When a function is called normally, this depends on
                            strict mode. In strict mode, this is undefined.
                        </p>

                        <div className="codeBlock">
                            <div className="codeTop">
                                <span className="codeIcon">
                                    <FiCode />
                                </span>
                                Function this
                            </div>
                            <pre className="code">
                                {`function show() {
  'use strict';
  console.log(this); // undefined
}

show();`}
                            </pre>
                        </div>
                    </div>

                    <div className="subSection">
                        <h4 className="h4">Arrow function behavior</h4>
                        <p className="p">
                            Arrow functions do not have their own this. They
                            inherit this from the surrounding scope. This makes
                            them useful for callbacks.
                        </p>

                        <div className="codeBlock">
                            <div className="codeTop">
                                <span className="codeIcon">
                                    <FiCode />
                                </span>
                                Arrow this
                            </div>
                            <pre className="code">
                                {`const user = {
  name: 'Ash',
  sayLater: function () {
    setTimeout(() => {
      console.log(this.name); // 'Ash'
    }, 10);
  },
};

user.sayLater();`}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* call apply bind */}
                <div className="section">
                    <h3 className="h3">call - apply - bind</h3>

                    <p className="p">
                        call and apply invoke a function immediately with a
                        chosen this value. bind returns a new function with this
                        fixed permanently.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiTarget />
                            </span>
                            call - apply - bind
                        </div>
                        <pre className="code">
                            {`function greet(city, role) {
  console.log('Hi ' + this.name + ' from ' + city + ' - ' + role);
}

const person = { name: 'Ash' };

greet.call(person, 'Bangalore', 'Developer');
// Hi Ash from Bangalore - Developer

greet.apply(person, ['Bangalore', 'Developer']);
// Hi Ash from Bangalore - Developer

const boundGreet = greet.bind(person);
boundGreet('Bangalore', 'Developer');
// Hi Ash from Bangalore - Developer`}
                        </pre>
                    </div>
                </div>

                {/* Prototypes */}
                <div className="section">
                    <h3 className="h3">Prototypes</h3>

                    <p className="p">
                        JavaScript objects can inherit properties from other
                        objects using prototypes. When you access a property,
                        JavaScript first checks the object, then checks its
                        prototype chain.
                    </p>

                    <div className="subSection">
                        <h4 className="h4">Prototype chain</h4>
                        <p className="p">
                            If a property is not found on the object, JavaScript
                            searches on its prototype, then that prototype's
                            prototype, and so on, until it reaches null.
                        </p>

                        <div className="codeBlock">
                            <div className="codeTop">
                                <span className="codeIcon">
                                    <FiLink />
                                </span>
                                Prototype chain lookup
                            </div>
                            <pre className="code">
                                {`const base = { canRun: true };
const user = Object.create(base);

user.name = 'Ash';

console.log(user.canRun); // true
// not found on user, found on base`}
                            </pre>
                        </div>
                    </div>

                    <div className="subSection">
                        <h4 className="h4">__proto__</h4>
                        <p className="p">
                            __proto__ points to an object's prototype. It is
                            mostly used for learning and debugging. Prefer
                            Object.getPrototypeOf in real code.
                        </p>

                        <div className="codeBlock">
                            <div className="codeTop">
                                <span className="codeIcon">
                                    <FiCode />
                                </span>
                                proto check
                            </div>
                            <pre className="code">
                                {`const base = { canRun: true };
const user = Object.create(base);

console.log(user.__proto__ === base); // true
console.log(Object.getPrototypeOf(user) === base); // true`}
                            </pre>
                        </div>
                    </div>

                    <div className="subSection">
                        <h4 className="h4">constructor function</h4>
                        <p className="p">
                            Before classes, constructor functions were used to
                            create objects. Shared methods are placed on the
                            constructor's prototype so all instances can use
                            them without duplication.
                        </p>

                        <div className="codeBlock">
                            <div className="codeTop">
                                <span className="codeIcon">
                                    <FiCode />
                                </span>
                                Constructor + prototype
                            </div>
                            <pre className="code">
                                {`function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log('Hi ' + this.name);
};

const p1 = new Person('Ash');
const p2 = new Person('Neha');

p1.sayHi(); // Hi Ash
p2.sayHi(); // Hi Neha`}
                            </pre>
                        </div>

                        <p className="p">
                            Key idea - methods on Person.prototype are shared,
                            but properties created inside Person are per
                            instance.
                        </p>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default AdvancedConcepts;
