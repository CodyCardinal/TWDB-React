import { useState } from "react";

export default function Counter() {
    const [num, setNum] = useState(0);
    const incrementNum = () => {
        setNum(num + 1);
        console.log(`What is Num? ${num}`);
    };
    return (
        <>
            <p>The count is {num}</p>
            <button onClick={incrementNum}>Increment</button>
        </>
    )
}