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
    ],
    novoComentario:{
      nome:'',
      email:'',
      mensagem: ''
    }
  }

  adicionarComentario = (evento) =>{
    
    evento.preventDefault();
    console.log("ok")

    const novoComentario = {...this.state.novoComentario,data: new Date()}


    this.setState({
      comentarios: [...this.state.comentarios, novoComentario ],
      novoComentario:{nome:'', email:'', mensagem:''}
  })

  }

  typeValue = evento =>{
    const {name, value}= evento.target;
    this.setState({novoComentario:{...this.state.novoComentario, [name]:value}})
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
        <form method="post" onSubmit={this.adicionarComentario}>
          <h2>Enviar Comentario</h2>

          <div>
            <input type="text" name="nome" value={this.state.novoComentario.nome} onChange={this.typeValue} placeholder='Seu nome:' />
          </div>

          <div>
            <input type="email" name="email" value={this.state.novoComentario.email}onChange={this.typeValue} placeholder='Seu email:' />
          </div>

          <div>
            <textarea name="mensagem" value={this.state.novoComentario.mensagem} onChange={this.typeValue}rows="4"></textarea>
          </div>
          <button type="submit">Enviar</button>

        </form>
      </div>
  );
  }
  
}

export default App;