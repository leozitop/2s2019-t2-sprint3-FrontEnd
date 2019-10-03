import React,{Component} from 'react';

export default class Titulo extends Component{
    render(){
        return(
            // acessa as propriedades do h1 e escreve o titulo
            <h1 className="conteudoPrincipal-cadastro-titulo">{this.props.titulo}</h1>
        );
    }
}