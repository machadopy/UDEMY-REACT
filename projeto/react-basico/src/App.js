import { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {

  state={
    comentarios: [
      {

        nome: 'Joao',
        email:'joao@email.com',
        data: new Date(2026,9,9),
        mensagem: 'mensagem 1',

      },
      {
        nome: 'juca',
        email:'juca@email.com',
        data: new Date(2026,9,9),
        mensagem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam alias excepturi ratione ex illum quibusdam facilis sapiente quam autem nisi nam, placeat eos odio dicta. Cupiditate illo temporibus dicta.',
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

  removerComentario = comentario =>{
    let lista = this.state.comentarios;
    lista = lista.filter(c=> c !== comentario)

    this.setState({comentarios:lista})
  }


  typeValue = evento =>{
    const {name, value}= evento.target;
    this.setState({novoComentario:{...this.state.novoComentario, [name]:value}})
  }

  render(){
    return (
      <div className="App">
        <h1>Comentarios</h1>

        {this.state.comentarios.map((comentario, indice) =>{
          return(
            <Comentario
              key={indice}
              nome={comentario.nome}
              email={comentario.email}
              data={comentario.data}
              onRemove={this.removerComentario.bind(this, comentario)}>
              {comentario.mensagem}
              
            </Comentario>

          )})}
        <form className='Novo-Comentario' method="post" onSubmit={this.adicionarComentario}>
          <h2>Enviar Comentario</h2>

          <div>
            <input required type="text" name="nome" value={this.state.novoComentario.nome} onChange={this.typeValue} placeholder='Seu nome:' />
          </div>

          <div>
            <input required type="email" name="email" value={this.state.novoComentario.email}onChange={this.typeValue} placeholder='Seu email:' />
          </div>

          <div>
            <textarea required name="mensagem" value={this.state.novoComentario.mensagem} onChange={this.typeValue}rows="4"></textarea>
          </div>
          <button type="submit">Enviar</button>

        </form>
      </div>
  );
  }
  
}

export default App;