import './App.css'
import TMDBConsole from './TMDBConsole.jsx';
import BoxGrid from './BoxGrid.jsx';
import SyncedInputs from './SyncedInputs.jsx';

function App() {

  return (
    <>
      <BoxGrid />
      <SyncedInputs />
      <TMDBConsole />
    </>
  );
}

export default App
