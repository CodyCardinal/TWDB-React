import { useState } from "react";

export default function ScoreKeeper() {
    const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });

    function increaseP1ScoreDirectStateUpdate() {
        const newScores = { ...scores, p1Score: scores.p1Score + 1 };
        setScores(newScores);
    }

    function increaseP1ScoreFunctionalStateUpdate() {
        setScores((oldScores) => ({
            ...oldScores, p1Score: oldScores.p1Score + 1
        }));
    }

    return (
        <div>
            <p>Player 1: {scores.p1Score}</p>
            <p>Player 2: {scores.p2Score}</p>
            <button onClick={increaseP1ScoreFunctionalStateUpdate}>+1 Player 1 FUNCTIONAL STATE UPDATE</button>
            <button onClick={increaseP1ScoreDirectStateUpdate}>+1 Player 1 DIRECT STATE UPDATE</button>
            <button>+1 Player 2</button>
        </div>
    );
}