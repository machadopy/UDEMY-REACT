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
      },
      {
        nome: 'juca',
        email:'juca@emial.com',
        data: new Date(2026,9,9),
        mensagem: '2 comentario',
      }
    ]
  }

  adicionarComentario = () =>{
    console.log("ok")

    const novoComentario = {
      nome: 'torvi',
      email: 'torvi@md.com',
      data: new Date(),
      mensagem: 'jaz aqui um comentario.'

    }

    

    this.setState({
      comentarios: [...this.state.comentarios, novoComentario ]
  })

  }

  render(){
    return (
      <div className="App">
        <h1>Meu Projecto</h1>

        {this.state.comentarios.map((comentario, indice) =>{
          return(
            <Comentario
              key={indice}
              nome={comentario.nome}
              email={comentario.email}
              data={comentario.data}>
              {comentario.mensagem}
            </Comentario>

          )})}
        <button onClick={this.adicionarComentario}>Adicionar comentario</button>
      </div>
  );
  }
  
}

export default App;