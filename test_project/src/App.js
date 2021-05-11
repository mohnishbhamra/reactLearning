import logo from './logo.svg';
import './App.css';
import './components/FirstComponent'
import Hello from './components/FirstComponent';
import Welcome from './components/MyClassComponent';
import ComponentForState from './components/ComponentForState';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Hello name="Mohnish" lastName="Bhamra">
      <p>The pragraph which is automatically the children property</p>
      </Hello>
      
      <Welcome name="testuser"></Welcome>

      <ComponentForState/> */}

      <h1>passing method from parent to class component</h1>
      <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
