import React, { useState } from "react";
import { Styled } from "./styled";
import { FiChevronDown, FiChevronRight, FiList } from "react-icons/fi";

const Arrays = () => {
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
                    <FiList />
                </span>

                <span className="title">Arrays</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                {/* Array Basics */}
                <div className="section">
                    <h3>Array Basics</h3>
                    <p>
                        An array is an ordered collection of values. It can
                        store numbers, strings, objects, or even other arrays.
                    </p>

                    <pre className="code">{`const numbers = [10, 20, 30];
console.log(numbers);
// [10, 20, 30]`}</pre>
                </div>

                {/* Creating Arrays */}
                <div className="section">
                    <h3>Creating Arrays</h3>

                    <pre className="code">{`const arr1 = [1, 2, 3];

const arr2 = new Array(4, 5, 6);

console.log(arr1);
// [1, 2, 3]`}</pre>
                </div>

                {/* Indexing */}
                <div className="section">
                    <h3>Indexing</h3>
                    <p>
                        Arrays are zero-indexed. The first element is at index
                        0.
                    </p>

                    <pre className="code">{`const fruits = ["apple", "banana", "mango"];

console.log(fruits[0]);
// "apple"`}</pre>
                </div>

                {/* Length */}
                <div className="section">
                    <h3>Length</h3>

                    <pre className="code">{`const items = [1, 2, 3, 4];

console.log(items.length);
// 4`}</pre>
                </div>

                {/* push */}
                <div className="section">
                    <h3>push</h3>
                    <p>Add element to end.</p>

                    <pre className="code">{`const arr = [1, 2];
arr.push(3);

console.log(arr);
// [1, 2, 3]`}</pre>
                </div>

                {/* pop */}
                <div className="section">
                    <h3>pop</h3>
                    <p>Remove last element.</p>

                    <pre className="code">{`const arr = [1, 2, 3];
arr.pop();

console.log(arr);
// [1, 2]`}</pre>
                </div>

                {/* shift */}
                <div className="section">
                    <h3>shift</h3>
                    <p>Remove first element.</p>

                    <pre className="code">{`const arr = [1, 2, 3];
arr.shift();

console.log(arr);
// [2, 3]`}</pre>
                </div>

                {/* unshift */}
                <div className="section">
                    <h3>unshift</h3>
                    <p>Add element to beginning.</p>

                    <pre className="code">{`const arr = [2, 3];
arr.unshift(1);

console.log(arr);
// [1, 2, 3]`}</pre>
                </div>

                {/* slice */}
                <div className="section">
                    <h3>slice</h3>
                    <p>Returns a shallow copy. Does not modify original.</p>

                    <pre className="code">{`const arr = [1, 2, 3, 4];
const newArr = arr.slice(1, 3);

console.log(newArr);
// [2, 3]`}</pre>
                </div>

                {/* splice */}
                <div className="section">
                    <h3>splice</h3>
                    <p>Modifies array. Can remove or insert elements.</p>

                    <pre className="code">{`const arr = [1, 2, 3];
arr.splice(1, 1);

console.log(arr);
// [1, 3]`}</pre>
                </div>

                {/* map */}
                <div className="section">
                    <h3>map</h3>
                    <p>Returns new array after transformation.</p>

                    <pre className="code">{`const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);

console.log(doubled);
// [2, 4, 6]`}</pre>
                </div>

                {/* filter */}
                <div className="section">
                    <h3>filter</h3>

                    <pre className="code">{`const nums = [1, 2, 3, 4];

const even = nums.filter(n => n % 2 === 0);

console.log(even);
// [2, 4]`}</pre>
                </div>

                {/* reduce */}
                <div className="section">
                    <h3>reduce</h3>

                    <pre className="code">{`const nums = [1, 2, 3];

const sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum);
// 6`}</pre>
                </div>

                {/* forEach */}
                <div className="section">
                    <h3>forEach</h3>

                    <pre className="code">{`const nums = [1, 2, 3];

nums.forEach(n => {
    console.log(n);
});

// 1
// 2
// 3`}</pre>
                </div>

                {/* find */}
                <div className="section">
                    <h3>find</h3>

                    <pre className="code">{`const nums = [5, 10, 15];

const result = nums.find(n => n > 8);

console.log(result);
// 10`}</pre>
                </div>

                {/* some */}
                <div className="section">
                    <h3>some</h3>

                    <pre className="code">{`const nums = [1, 3, 5];

const hasEven = nums.some(n => n % 2 === 0);

console.log(hasEven);
// false`}</pre>
                </div>

                {/* every */}
                <div className="section">
                    <h3>every</h3>

                    <pre className="code">{`const nums = [2, 4, 6];

const allEven = nums.every(n => n % 2 === 0);

console.log(allEven);
// true`}</pre>
                </div>

                {/* includes */}
                <div className="section">
                    <h3>includes</h3>

                    <pre className="code">{`const arr = ["a", "b", "c"];

console.log(arr.includes("b"));
// true`}</pre>
                </div>

                {/* sort */}
                <div className="section">
                    <h3>sort</h3>
                    <p>
                        Sort converts elements to strings by default. Always
                        provide compare function for numbers.
                    </p>

                    <pre className="code">{`const nums = [10, 5, 20];

nums.sort((a, b) => a - b);

console.log(nums);
// [5, 10, 20]`}</pre>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Arrays;
