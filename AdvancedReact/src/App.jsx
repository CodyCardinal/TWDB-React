import './App.css';
// import Counter from './Counter.jsx';
// import ScoreKeeper from './ScoreKeeper.jsx';
// import MovingDot from './MovingDot.jsx';
// import ListComponent from './ListComponent.jsx';
// import EmojiClicker from './EmojiClicker.jsx';
import PlayerScoreKeeper from './PlayerScoreKeeper.jsx';
import Library from './Library.jsx';

function App() {
  return (
    <>
      <h1>Advanced State Demo</h1>
      {/* <Counter />
      <ScoreKeeper />
      <MovingDot />
      <ListComponent />
      <EmojiClicker /> */}
      <PlayerScoreKeeper numPlayers={4} winner={5} />
      <Library />
    </>
  )
}

export default App
