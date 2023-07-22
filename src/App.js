import logo from './logo.svg';
import './App.css';
import Header from '/Users/tajagrayson/bootcamp/TG-React-Portfolio/src/css/Header.css';
import About from './components/About'; 

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <About />
      </header>
    </div>
  );
}

export default App;
