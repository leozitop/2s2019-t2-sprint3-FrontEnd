import React,{Component} from 'react';

import logo from '../../assets/img/OpFlix_logo.png'
import Titulo from '../../components/Titulo/Titulo'

import cartaz1 from '../../assets/img/cartaz_joker.jpg'

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
        Axios.get('http://localhost:5000/api/lancamentos')
            .then(data => {
                this.setState({lista: data.data});
            })
            .catch(erro => {
                console.log(erro);
            });
    }

    // listaAtualizada = () =>{
        
    // }

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
                                <option value='1'>Ação</option>
                                <option value='2'>Terror</option>
                                <option value='3'>Romance</option>
                                <option value='4'>Ficçãoo</option>
                                <option value='5'>Comédia</option>
                                <option value='6'>Drama</option>
                                <option value='7'>Suspense</option>
                                <option value='8'>Aventura</option>
                                <option value='9'>Documentário</option>
                                <option value='10'>Animação</option>
                                <option value='11'>Bio</option>
                            </select>

                            <select>
                                <option value='1'>Netflix</option>
                                <option value='2'>Cinema</option>
                                <option value='3'>Amazon</option>
                            </select>

                            <select>
                                <option value='1'>Filme</option>
                                <option value='2'>Serie</option>
                            </select>
                        </form>

                        {/* <table id="tabela-lista">
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
                        </table> */}
                        <br></br>

                        <br></br>

                        <div class="cartaz1">
                            <img src={cartaz1}/>
                            <p>Joker</p>
                            <p>categoria: </p>
                            <p>182 min</p>
                            <p>tipo: filme</p>
                            <p>03/10/2019</p>
                            <p>cinema</p>
                        </div>

                    </div>
                    </section>
                </main>
            </div>
        );
    }
}