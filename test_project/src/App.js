import logo from './logo.svg';
import './App.css';
import './components/FirstComponent'
import Hello from './components/FirstComponent';
function App() {
  return (
    <div className="App">
      <Hello name="Mohnish" lastName="Bhamra"></Hello>
      <p>The pragraph which is automatically the children property</p>
    </div>
  );
}

export default App;
