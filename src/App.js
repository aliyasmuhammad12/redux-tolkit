import Cards from './components/Cards';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
    <Cards name={"aliyas muhammad"}  price={"2000"}  text={"hello everyone"}/>
    <Cards name={"aliyas muhammad"}  price={"2000"}  text={"hello everyone"}/>
    <Cards name={"Gulbaz khan"}  price={"4000"}  text={"hello everyone"}/>
    <Cart/>
    </div>
  );
}

export default App;
