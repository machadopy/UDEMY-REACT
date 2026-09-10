import { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {

  state={
    comentarios: [
      {
        nome: 'Joao',
        email:'joao@emial.com',
        data: new Date(2026,9,9),
        mensagem: 'Um comentario',
        pk:13
      },
      {
        nome: 'juca',
        email:'juca@emial.com',
        data: new Date(2026,9,9),
        mensagem: '2 comentario',
        pk:43
      }
    ]
  }

  render(){
    return (
      <div className="App">
        <h1>Meu Projecto</h1>

        {this.state.comentarios.map((comentario, indice) =>{
          return(
            <Comentario
              key={comentario.pk}
              nome={comentario.nome}
              email={comentario.email}
              data={comentario.data}>
              {comentario.mensagem}
            </Comentario>

          )})}

      </div>
  );
  }
  
}

export default App;