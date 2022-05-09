import logo from './logo.svg';
import './App.scss';
import MyButton from './components/buttons/Button';

function MainButton(props) {
  return <MyButton name={props.name}/>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Blind Munk Studios</h1>
        <p>A new version of my website is currently being created :)</p>
        <p>And yes, it is going to be a React App.</p>
        <MainButton name="primary"/>
      </header>
    </div>
  );
}

export default App;
