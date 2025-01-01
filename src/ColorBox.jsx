import { useState } from "react";
import "./ColorBox.css";

function randomFromList(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
};

export default function ColorBox({ colors }) {
    const [color, setColor] = useState(randomFromList(colors));
    const changeColor = () => {
        const randomColor = randomFromList(colors);
        setColor(randomColor);
    }
    return (
        <div className="ColorBox"
            onClick={changeColor}
            style={{ backgroundColor: color }}>
        </div>
    )
}