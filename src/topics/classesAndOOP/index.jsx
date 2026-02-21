import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiBox } from "react-icons/fi";

const ClassesAndOOP = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper className={open ? "open" : ""}>
            <button
                type="button"
                className="topicHeader"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiBox />
                </span>

                <span className="title">Classes and OOP</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                {/* Class syntax */}
                <div className="section">
                    <h3>Class syntax</h3>
                    <p>
                        A class is a blueprint for creating objects. It groups
                        properties and methods together. Classes were introduced
                        in ES6 to make object oriented programming clearer.
                    </p>

                    <pre className="code">
                        {`class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hello " + this.name;
  }
}

const user = new Person("Ashish");
console.log(user.greet());
// Hello Ashish`}
                    </pre>
                </div>

                {/* Constructor */}
                <div className="section">
                    <h3>Constructor</h3>
                    <p>
                        The constructor is a special method that runs
                        automatically when a new object is created using new. It
                        initializes properties.
                    </p>

                    <pre className="code">
                        {`class Car {
  constructor(brand) {
    this.brand = brand;
  }
}

const c = new Car("Tesla");
console.log(c.brand);
// Tesla`}
                    </pre>
                </div>

                {/* Methods */}
                <div className="section">
                    <h3>Methods</h3>
                    <p>
                        Methods are functions defined inside a class. They
                        describe behavior of the object.
                    </p>

                    <pre className="code">
                        {`class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counter = new Counter();
counter.increment();
console.log(counter.count);
// 1`}
                    </pre>
                </div>

                {/* Inheritance */}
                <div className="section">
                    <h3>Inheritance</h3>
                    <p>
                        Inheritance allows one class to reuse properties and
                        methods of another class using extends.
                    </p>

                    <pre className="code">
                        {`class Animal {
  speak() {
    return "Animal sound";
  }
}

class Dog extends Animal {
}

const d = new Dog();
console.log(d.speak());
// Animal sound`}
                    </pre>
                </div>

                {/* super */}
                <div className="section">
                    <h3>super</h3>
                    <p>
                        The super keyword is used to call the parent class
                        constructor or methods.
                    </p>

                    <pre className="code">
                        {`class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

const dog = new Dog("Tommy", "Labrador");
console.log(dog.name);
// Tommy`}
                    </pre>
                </div>

                {/* Encapsulation */}
                <div className="section">
                    <h3>Encapsulation concept</h3>
                    <p>
                        Encapsulation means hiding internal details and exposing
                        only what is necessary. In modern JavaScript, private
                        fields are defined using #.
                    </p>

                    <pre className="code">
                        {`class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(1000);
console.log(acc.getBalance());
// 1000

// console.log(acc.#balance);
// SyntaxError - private field not accessible`}
                    </pre>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ClassesAndOOP;
