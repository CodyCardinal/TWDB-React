import { useState } from "react";
import "./HappySad.css";

export default function HappySad() {
    const [isHappy, setIsHappy] = useState(true);
    const toggleIsHappy         = () => setIsHappy(!isHappy);
    return (
        <>
        <div className = "happySad" onClick = {toggleIsHappy}>
            {isHappy ? "😁" : "😭"}
        </div>
        </>
    )
}