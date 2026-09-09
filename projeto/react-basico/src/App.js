import './App.css';
import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <h1>Meu Projecto</h1>
          <Comentario nome="joao" email="joao@emial.com" data={new Date(2026,9,9)}>
            comentario = "Um comentario"
          </Comentario>

          <Comentario nome="joao" email="joao@emial.com" data={new Date(2026,9,9)}>
            comentario = "Um comentario"
          </Comentario>

          <Comentario nome="joao" email="joao@emial.com" data={new Date(2026,9,9)}>
            comentario = "Um comentario"
          </Comentario>
    </div>
  );
}

export default App;