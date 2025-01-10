exampleofGeneratedTwoPlayerArray = [
    { "id": 1, "name": "Player1", "score": 0, "msg": "" },
    { "id": 2, "name": "Player2", "score": 0, "msg": "" }
]

// example component
import { useState } from "react";

export default function PlayerScoreKeeper({ numPlayers, winner }) {
    let playerArray = []

    for (let i = 1; i <= numPlayers; i += 1) {
        let PlayerName = "Player".concat(i.toString());
        playerArray.push({ "id": i, "name": PlayerName, "score": 0, "msg": "" });
    }

    const [players, setPlayers] = useState(playerArray);

    const increaseScore = (id) => setPlayers((old) => old.map((player) => player.id === id ? { ...player, score: player.score + 1, msg: player.score + 1 === winner ? "WINNER!!" : player.msg, } : player));

    function increaseScoreLong(id) {
        setPlayers(
            function returnNewPlayers(oldPlayers) {
                const newPlayers = [];
                for (let i = 0; i < oldPlayers.length; i++) {
                    const player = oldPlayers[i];
                    if (player.id === id) {
                        const newScore = player.score + 1;
                        let newMsg;
                        if (newScore === winner) {
                            newMsg = "WINNER!!";
                        } else {
                            newMsg = player.msg;
                        }
                        const updatedPlayer = {
                            id: player.id,
                            name: player.name,
                            score: newScore,
                            msg: newMsg
                        };
                        newPlayers.push(updatedPlayer);
                    } else {
                        newPlayers.push(player);
                    }
                }
                return newPlayers;
            });
    }

    return (
        <>
            <ul>
                {players.map(({ player }) => (
                    <li key={player.id}>
                        {player.name} {player.score} {player.msg}
                        <button onClick={increaseScore(player.id)}></button>
                    </li>
                ))}
            </ul>
        </>
    )
}
