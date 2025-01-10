import { useState } from "react";

export default function Input({ label }) {
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <label>
            {label}
            {' '}
            <input
                value={text}
                onChange={handleChange}
            />
        </label>
    );
}
