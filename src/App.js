import './App.css';

function App() {
  const object = {};
  return (
    <div className="App">
      {/* Linha para gerar erro */}
      {object.type.name}
    </div>
  );
}

export default App;
