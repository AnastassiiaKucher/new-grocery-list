import './App.css';
import image from './shopping.PNG';
import imageTwo from './man.PNG';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="app">
      <div className='container'>
      <img className='Man'  src={ image } width="200px" alt="shopping"/>
      </div>
      <div className="container">
      <h1>Grocery List</h1>
      </div>
      <GroceryList/>
      <div className='container'>
      <img className='Man' src={ imageTwo } width="200px" alt="man"/>
      </div>
    </div>
  );
}

export default App;
