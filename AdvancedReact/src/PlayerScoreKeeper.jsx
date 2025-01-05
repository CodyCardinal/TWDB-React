import { useState } from "react";

export default function PlayerScoreKeeper({ numPlayers }) {
    let playerArray = [];
    for (let i = 1; i <= numPlayers; i += 1) {
        let PlayerName = "Player".concat(i.toString());
        playerArray.push({ "id": i, "name": PlayerName, "score": 0 });
    }

    const [players, setPlayers] = useState(playerArray);

    const increaseScore = (id) => {
        setPlayers((oldPlayers) =>
            oldPlayers.map((player) =>
                player.id === id ? { ...player, score: player.score + 1 } : player
            )
        );
    };

    return (
        <>
            {players.map((each) => (
                <div key={each.id}>
                    <span>
                        <div style={{ fontSize: "4rem" }}>{each.name} &gt;&gt; Score {each.score} <button onClick={() => increaseScore(each.id)}>{each.name} + 1</button></div>
                    </span>
                    <br></br>
                </div>
            ))}
        </>
    );
}