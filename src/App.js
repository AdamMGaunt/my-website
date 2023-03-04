import logo from './logo.svg';
import './App.scss';
//import MyButton from './components/buttons/Button';
import MyAppbar from './components/appbar/appbar';
//import MyShoppingList from './components/lists/lists';
//import MySortComponent from './components/sort';
import MyButton from './components/buttons/Button';
import ContentBlock from './components/content/block';
import Footer from './components/footer/footer';


function App() {
  
  return (
    <div className="App">
      <MyAppbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Blind Munk Studios</h1>
        <p>A new version of my website is currently being created :)</p>
        <p>And yes, it is going to be a React App.</p>
        <MyButton name="I am a Button" variant="contained" />
      </header>
      <ContentBlock />
      <Footer />
    </div>
  );
}

export default App;
