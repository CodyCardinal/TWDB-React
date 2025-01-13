import Box from './Box.jsx';
import { useState } from "react";

export default function BoxGrid() {
    const toggle = (idx) => {
        setBoxes(oldBoxes => {
            return oldBoxes.map((v, i) => {
                if (i === idx) {
                    return !v
                } else {
                    return v
                }
            });
        });
    };
    const [boxes, setBoxes] = useState([
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false
    ]);

    const toggleAll = () => setBoxes([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ]);


    return (
        <>
            {boxes.map((box, idx) => (<Box key={idx} toggle={() => toggle(idx)} isActive={box} />))}
            <button onClick={toggleAll}>Reset Boxes</button>
        </>
    )
}