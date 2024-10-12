import './App.css';
import Slider from './Slider';

function App() {
  return (
    <div className="App">
    <Slider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}
    />
    </div>
  );
}

export default App;
