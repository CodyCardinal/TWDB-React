import { useState } from "react";

export default function ScoreKeeper() {
    const [scores, setScores] = useState({ Team1Score: 0, Team2Score: 0 });

    function increaseTeam1ScoreDirectStateUpdate() {
        const newScores = { ...scores, Team1Score: scores.Team1Score + 1 };
        setScores(newScores);
    }

    function increaseTeam1ScoreFunctionalStateUpdate() {
        setScores((oldScores) => ({
            ...oldScores, Team1Score: oldScores.Team1Score + 1
        }));
    }

    return (
        <div>
            <p>Team 1: {scores.Team1Score}</p>
            <p>Team 2: {scores.Team2Score}</p>
            <button onClick={increaseTeam1ScoreFunctionalStateUpdate}>+1 Team 1 FUNCTIONAL STATE UPDATE</button>
            <button onClick={increaseTeam1ScoreDirectStateUpdate}>+1 Team 1 DIRECT STATE UPDATE</button>
            <button>+1 Team 2</button>
        </div>
    );
}