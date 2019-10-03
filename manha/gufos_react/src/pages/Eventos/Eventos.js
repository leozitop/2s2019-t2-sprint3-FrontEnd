import React,{Component} from 'react';

import Rodape from '../../components/Rodape/Rodape';

import logo from '../../assets/img/icon-login.png';
import Axios from 'axios';

import Titulo from '../../components/Titulo/Titulo';

export default class Eventos extends Component{

    constructor(){
        super();
        this.state = {
            lista: [],
            titulo: '',
            dataEvento: ''
        };
    }

    // requisição
    componentDidMount(){
            this.listaAtualizada();
        }

    listaAtualizada = () =>{
        Axios.get('http://192.168.7.85/api/eventos')
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
        console.log(this.state.titulo);
        // localhost:5000
        fetch('http://192.168.7.85/api/eventos', {
            method: 'POST',
            body: JSON.stringify({titulo: this.state.titulo, dataEvento: this.state.dataEvento}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(this.listaAtualizada())
        .catch(error => console.log(error))
    }

    adicionaEvento = () =>{
        let valores_lista = this.state.lista;
        let evento = {idEvento: this.state.lista.length,
            titulo: this.state.titulo,
            dataEvento: this.state.dataEvento,
            }

        valores_lista.push(evento);
        this.setState({lista: valores_lista});
    }

    render(){
        return (
            <div>
                <header className="cabecalhoPrincipal">
                    <div className="container">
                    <img src={logo} />

                    <nav className="cabecalhoPrincipal-nav">
                        Administrador
                    </nav>
                    </div>
                </header>

                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                    <Titulo titulo="Eventos"/>
                    {/* <h1 className="conteudoPrincipal-cadastro-titulo">Eventos</h1> */}
                    <div className="container" id="conteudoPrincipal-lista">

                        <table id="tabela-lista">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Evento</th>
                            <th>Data</th>
                            <th>Acesso Livre</th>
                            <th>Tipo do Evento</th>
                            </tr>
                        </thead>

                        <tbody id="tabela-lista-corpo">
                            {
                                // map retorna algo, funciona como se fosse um foreach
                                this.state.lista.map(element =>{
                                    return(
                                        <tr>
                                            <td>{element.idEvento}</td>
                                            <td>{element.titulo}</td>
                                            <td>{element.dataEvento}</td>
                                            <td>{element.ativo ? 'ativo' : 'inativo'}</td>
                                            <td>{element.idCategoriaNavigation.nome}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        </table>

                    </div>

                    <div className="container" id="conteudoPrincipal-cadastro">
                        <h2 className="conteudoPrincipal-cadastro-titulo">Cadastrar Evento</h2>
                        <div className="container">

                        <input type="text" id="evento__titulo" placeholder="título do evento" />
                        <input type="text" id="evento__localizacao" placeholder="localização" />
                        <input type="text" id="evento__data" placeholder="dd/MM/yyyy" />
                        <select id="option__acessolivre">
                            <option value="1">Ativo</option>
                            <option value="0">Desativo</option>
                        </select>
                        <select id="option__tipoevento">
                            <option value="0" disabled>Categoria do Evento</option>
                            {this.state.lista.map(element => {
                                return(<option value={element.idCategoria}>element.idCategoriaNavigation.nome</option>)
                            })}
                        </select>
                        <textarea rows="3" cols="50" placeholder="descrição do evento" id="evento__descricao"></textarea>

                        </div>
                        <button 
                        className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                        onClick={this.adicionaItem.bind(this)}
                        >
                        Cadastrar
                        </button>
                    </div>
                    </section>
                </main>

                <Rodape />
            </div>
        );
    }
}