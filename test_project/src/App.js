import logo from './logo.svg';
import './App.css';
import './components/FirstComponent'
import Hello from './components/FirstComponent';
import Welcome from './components/MyClassComponent';

function App() {
  return (
    <div className="App">
      <Hello name="Mohnish" lastName="Bhamra"></Hello>
      <p>The pragraph which is automatically the children property</p>

      <Welcome></Welcome>
    </div>
  );
}

export default App;
