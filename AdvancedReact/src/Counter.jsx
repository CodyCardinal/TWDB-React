import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const addOne = () => {
        setCount(count + 1);
    }
    const addThree = () => {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    return (
        <>
            <div>
                <h2>{count}</h2>
                <button onClick={addOne}>+1</button>
                <button onClick={addThree}>+3</button>
            </div>
        </>
    );
}