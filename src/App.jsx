import './App.css';
import RandomPokemon from './RandomPokemon.jsx';
import Greeter from './Greeter.jsx';
import GreeterWithStyles from './GreeterWithStyles.jsx';
import Die from './Die.jsx';
import ShoppingList from './ShoppingList.jsx';

function App() {
  return (
    <>
      <Die numSides={[20, 12, 10, 8, 6, 4]} />
      <Greeter name='Cody' from='Greeter' />
      <GreeterWithStyles name='Cody' from='Greeter' />
      <RandomPokemon />
      <ShoppingList />
    </>
  );
}

export default App;