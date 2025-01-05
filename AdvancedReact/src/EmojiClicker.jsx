import { v4 as uuid } from "uuid";
import { useState } from "react";

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😁" }]);

    const addEmoji = () => {
        setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: "😘" }]);
    };

    const deleteEmoji = (id) => {
        setEmojis((oldEmojis) => {
            return oldEmojis.filter((each) => each.id !== id);
        });
    }
    

    return (
        <>
            {emojis.map((each) => (
                <span onClick={() => deleteEmoji(each.id)} key={each.id} style={{ fontSize: "4rem" }}>{each.emoji}</span>
            ))}
            <div></div>
            <button onClick={addEmoji}>Add Emoji</button>
        </>
    );
}