import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
  const nome = "Gabriel"

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome={nome} />
      <Pessoa
        nome= "Gabriel" 
        idade= "26" 
        profissao= "Filmmaker" 
        foto="https://via.placeholder.com/150" 
      />
      <List />
    </div>
  );
}

export default App;
