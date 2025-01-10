import Input from './Input.jsx';
import { useState } from "react";

export default function SyncedInputs() {
    // These two inputs are independent. Make them stay in sync: editing one 
    // input should update the other input with the same text, and vice versa.

    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <>
            <Input label="First input" text={text} handleChange={handleChange} />
            <Input label=" Mirrored input" text={text} handleChange={handleChange} />
        </>
    );
}