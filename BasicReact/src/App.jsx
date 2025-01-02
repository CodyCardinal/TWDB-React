import './App.css';
// import RandomPokemon from './RandomPokemon.jsx';
// import Greeter from './Greeter.jsx';
// import GreeterWithStyles from './GreeterWithStyles.jsx';
// import Die from './Die.jsx';
// import ShoppingList from './ShoppingList.jsx';
// import Clicker from './Clicker.jsx';
// import Form from './Form.jsx';
import Counter from './Counter.jsx';
import HappySad from './HappySad.jsx';
import ColorBoxGrid from './ColorBoxGrid.jsx';
import ColorList from './ColorList.jsx';

function App() {
  const colors = ColorList();
  return (
    <>
      <ColorBoxGrid colors={colors}/>
      <HappySad />
      <Counter />
      {/*<Clicker />
      <Form />
       <Die numSides={[20, 12, 10, 8, 6, 4]} />
      <Greeter name='Cody' from='Greeter' />
      <GreeterWithStyles name='Cody' from='Greeter' />
      <RandomPokemon />
      <ShoppingList /> */}
    </>
  );
}

export default App;