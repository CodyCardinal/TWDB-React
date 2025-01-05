import { useState } from "react";

export default function PlayerScoreKeeper({ numPlayers, winner }) {
    let playerArray = [];
    for (let i = 1; i <= numPlayers; i += 1) {
        let PlayerName = "Player".concat(i.toString());
        playerArray.push({ "id": i, "name": PlayerName, "score": 0, "msg": "" });
    }

    const [players, setPlayers] = useState(playerArray);

    const increaseScore = (id) => {
        setPlayers((oldPlayers) =>
            oldPlayers.map((player) => {
                if (player.id === id) {
                    const newScore = player.score + 1;
                    return {
                        ...player,
                        score: newScore,
                        msg: newScore === winner ? "WINNER!!" : player.msg
                    };
                }
                return player;
            })
        );
    };

    const resetScore = () => {
        setPlayers((oldPlayers) =>
            oldPlayers.map((player) => ({
                ...player, score: 0, msg: ""
            }))
        );
    };

    return (
        <>
            <h2>PlayerScoreKeeper</h2>
            {players.map((each) => (
                <div key={each.id}>
                    <span>
                        <div style={{ fontSize: "3rem" }}>
                            {each.name} &gt;&gt; Score {each.score} {each.msg}
                            <button onClick={() => increaseScore(each.id)}>
                                {each.name} + 1
                            </button>
                        </div>
                    </span>
                    <br></br>
                </div>
            ))}
            <button onClick={resetScore}>RESET</button>
        </>
    );
}