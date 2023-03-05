import logo from './logo.svg';
import './App.scss';
//import MyButton from './components/buttons/Button';
import MyAppbar from './components/appbar/appbar';
//import MyShoppingList from './components/lists/lists';
//import MySortComponent from './components/sort';
import MyButton from './components/buttons/Button';
import ContentBlock from './components/content/block';
import Footer from './components/footer/footer';

// Content
import Projects from './content/Projects'


function App() {
  
  return (
    <div className="App">
      <MyAppbar/>
      <header className="App-header">
        <h1>Blind Munk Studios</h1>
        <div className="Colour-Bar"></div>
      </header>
      <ContentBlock CardContent={Projects}/>
      <Footer />
    </div>
  );
}

export default App;
