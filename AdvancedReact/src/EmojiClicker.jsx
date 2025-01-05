import { v4 as uuid } from "uuid";
import { useState } from "react";

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😁" }]);

    const addEmoji = () => {
        setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: "😘" }]);
    };

    return (
        <>
            {emojis.map((each) => (
                <span key={each.id} style={{ fontSize: "4rem" }}>{each.emoji}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
        </>
    );
}