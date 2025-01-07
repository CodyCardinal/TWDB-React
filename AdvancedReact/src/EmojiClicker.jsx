import { v4 as uuid } from "uuid";
import { useState } from "react";

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😁" }]);

    const addEmoji = () => setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: "😘" }]);

    const deleteEmoji = (id) => setEmojis((oldEmojis) => oldEmojis.filter((each) => each.id !== id));

    return (
        <>
            {emojis.map((id, emoji) => (
                <span onClick={() => deleteEmoji(id)} key={id} style={{ fontSize: "4rem" }}>
                    {emoji}
                </span>
            ))}
            <div></div>
            <button onClick={addEmoji}>Add Emoji</button>
        </>
    );
}