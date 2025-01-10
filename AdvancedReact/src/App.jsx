import './App.css';
// import Counter from './Counter.jsx';
// import ScoreKeeper from './ScoreKeeper.jsx';
// import MovingDot from './MovingDot.jsx';
// import ListComponent from './ListComponent.jsx';
// import EmojiClicker from './EmojiClicker.jsx';
// import PlayerScoreKeeper from './PlayerScoreKeeper.jsx';
// import Library from './Library.jsx';
import LuckyN from './LuckyN.jsx';
import { sum } from "./utils.js";

function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);
}

function App() {
  return (
    <>
      {/*<h1>Advanced State Demo</h1>
       <Counter />
      <ScoreKeeper />
      <MovingDot />
      <ListComponent />
      <EmojiClicker /> 
      <PlayerScoreKeeper numPlayers={4} winner={5} />
      <Library />
      */}
      <h1>Component and State Hierarchy</h1>
      <LuckyN winCheck={lessThan4} title="Roll less than 4" />
      <LuckyN
        winCheck={allSameValue}
        numDice={3}
        title="Roll the same number"
      />
    </>
  )
}

export default App