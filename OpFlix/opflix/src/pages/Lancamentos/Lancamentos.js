import React,{Component} from 'react';

import logo from '../../assets/img/OpFlix_logo.png'
import Titulo from '../../components/Titulo/Titulo'

import Axios from 'axios';

export default class Lancamentos extends Component{

    constructor(){
        super();
        this.state = {
            lista: [],
            lancamento: '',
            sinopse: '',
            categoria: '',
            duracao: '',
            tipo: '',
            data: '',
            plataforma: ''
        };
    }

    componentDidMount(){
        this.listaAtualizada();
    }

    listaAtualizada = () =>{
        Axios.get('http://localhost:5000/api/lancamentos')
            .then(data => {
                this.setState({lista: data.data});
            })
            .catch(erro => {
                console.log(erro);
            });
    }

    render(){
        return(
            <div>
                <div className="item">
                    <img src= {logo} />
                </div>



                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                    <Titulo titulo="Lancamentos"/>
                    {/* <h1 className="conteudoPrincipal-cadastro-titulo">Eventos</h1> */}
                    <div className="container" id="conteudoPrincipal-lista">
                        <form>
                            <select>
                                <option>Categorias</option>
                            </select>

                            <select>
                                <option>Plataformas</option>
                            </select>

                            <select>
                                <option>Tipo</option>
                            </select>
                        </form>

                        <table id="tabela-lista">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Lancamento</th>
                                <th>Sinopse</th>
                                <th>Categoria</th>
                                <th>Duracao</th>
                                <th>Tipo</th>
                                <th>Data</th>
                                <th>Plataforma</th>
                            </tr>
                        </thead>

                        <tbody id="tabela-lista-corpo">
                            {
                                // map retorna algo, funciona como se fosse um foreach
                                this.state.lista.map(element =>{
                                    return(
                                        <tr>
                                            <td key={element.idLancamento}></td>
                                            <td>{element.idLancamento}</td>
                                            <td>{element.lancamento}</td>
                                            <td>{element.sinopse}</td>
                                            <td>{element.idCategoriaNavigation.nome}</td>
                                            <td>{element.duracao}</td>
                                            <td>{element.idTipoNavigation.nome}</td>
                                            <td>{element.data}</td>
                                            <td>{element.plataforma}</td>
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