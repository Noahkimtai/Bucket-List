import './App.css';
import BucketList from './BucketList';
import { CategoryFilter } from './CategoryFilter';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Login/>
      <CategoryFilter />
      <div>Cheap Thrills</div>
      <p>Share your thrilling experiences and desires</p>
      <BucketList />
    </div>
  );
}

export default App;
