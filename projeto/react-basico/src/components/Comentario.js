import React from 'react';
import './Comentario.css'
import imagem from './user.png'

const Comentario = (props) => {
	return(

	<div className="Comentario">
		<img className='imagem' src={imagem}></img>

		<h2 className='nome'>{props.nome}</h2>
		<p className='email'>{props.email}</p>
		<p className='mensagem'>{props.children}</p>
		<p className='data'>{props.data.toString()}</p>
		<button className='nome' onClick={props.onRemove}>&times;</button>
	</div>	
)};

export default Comentario;
