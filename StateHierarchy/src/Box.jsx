import "./Box.css";
import { useState } from "react";

export default function Box() {
    const [isActive, setActive] = useState(false);
    const toggle = () => {
        setActive(!isActive);
    }
    return (
        <>
            <div
                className="Box"
                onClick={toggle}
                style={isActive ? { backgroundColor: "black" } : { backgroundColor: "white" }}
            ></div>
        </>
    )
}