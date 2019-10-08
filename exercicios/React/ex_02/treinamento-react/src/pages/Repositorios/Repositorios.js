import React,{Component} from 'react';
import Axios from 'axios';

export default class Repositorios extends Component{

    
  constructor(){
    super();
    this.state = {
        lista: [],
        name: "",
        descricao: "",
        dataCriacao: "",
        size: ""

        }   
    }   

    componentDidMount(){
        this.listaAtualizada();
    }

    listaAtualizada = () =>{
        Axios.get('https://api.github.com/')
        // sempre q faço uma requisição eu envio e recebo algo (ata)
            .then(data => {
                // o meu data será meu json, dentro dele eu vou ter uma chve chamada data
                this.setState({lista: data.data});
            })
            .catch(erro => {
                console.log(erro);
            });
    }

    adicionaItem = (event) =>{
        event.preventDefault();
        console.log(this.state.name);
        fetch('https://api.github.com/', {
            method: 'POST',
            body: JSON.stringify({titulo: this.state.name, descricao: this.state.descricao,
            dataCriacao: this.state.dataCriacao, size: this.state.size}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(this.listaAtualizada())
        .catch(error => console.log(error))
    }

    adicionaEvento = () =>{
        let valores_lista = this.state.lista;
        let repositorio = {idRepositorio: this.state.lista.length,
            name: this.state.name,
            dataCriacao: this.state.dataCriacao,
            }

        valores_lista.push(repositorio);
        this.setState({lista: valores_lista});
    }

    render(){
        return(
            <div>
                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                    <div className="container" id="conteudoPrincipal-lista">

                        <table id="tabela-lista">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Descricao</th>
                            <th>dataCriacao</th>
                            <th>Tamanho</th>
                            </tr>
                        </thead>

                        <tbody id="tabela-lista-corpo">
                            {
                                // map retorna algo, funciona como se fosse um foreach
                                this.state.lista.map(element =>{
                                    return(
                                        <tr>
                                            <td>{element.name}</td>
                                            <td>{element.descricao}</td>
                                            <td>{element.dataCriacao}</td>
                                            <td>{element.size}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        </table>

                    </div>
                    </section>
                </main>
            </div>
        );
    }
}