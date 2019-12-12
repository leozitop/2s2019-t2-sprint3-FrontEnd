import React,{Component} from 'react';

import logo from '../../assets/img/OpFlix_logo.png';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import {parseJwt} from '../../auth/auth';

export default class Cadastro extends Component{

    constructor(){
        super();
        this.state = {
            lista: [],
            nome: '',
            email: '',
            senha: '',
            tipoUsuario: ''
        };
        this.adicionaItem = this.adicionaItem.bind(this);
    }

    adicionaItem = (event) =>{
        event.preventDefault();
        console.log(this.state.nome);
        fetch('http://192.168.3.160:5000/api/usuarios', {
            method: 'POST',
            body: JSON.stringify({nome: this.state.nome, email: this.state.email,
            senha: this.state.senha, tipoUsuario: this.state.tipoUsuario}),
            headers: {
                Authorization: 'Bearer' + localStorage.getItem('usuario-opflix'),
                'Content-Type': 'application/json'
            }
        })
        .then(this.listaAtualizada())
        .catch(error => console.log(error))
    }

    atualizarNome = (event) =>{
        this.setState({nome: event.target.value});
    }

    atualizarEmail = (event) =>{
        this.setState({email: event.target.value});
    }

    atualizarSenha = (event) =>{
        this.setState({senha: event.target.value});
    }

    atualizarPermissao = (event) =>{
        this.setState({tipoUsuario: event.target.value});
    }

    adicionaUsuario = () =>{
        let valores_lista = this.state.lista;
        let usuario = {idUsuario: this.state.lista.length,
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
            tipoUsuario: this.state.tipoUsuario
            }

        valores_lista.push(usuario);
        this.setState({lista: valores_lista});
    }

    componentWillMount(){
        this.setState({tipoUsuario: parseJwt().tipoUsuario})
    }

    render(){
        return(
            <section className="container flex">
            <div className="item__cadastro">
                <div className="item">
                    <img width='300px' src= {logo} className="icone__cadastro" />
                </div>
                
                <form class="form-group">
                    <div className="item" id="item__title">
                        <p className="text__cadastro" id="item__description">
                        Cadastro
                        </p>
                    </div>
                    <div className="item">
                    <p>Nome</p>
                    <input
                        className="input__cadastro"
                        placeholder="nome"
                        type="text"
                        value={this.state.nome}
                        onChange={this.atualizarNome.bind(this)}
                        name="username"
                        id="cadastro__nome"
                    />
                    </div>

                    <br/>
                    
                    <br/>

                    <div className="item">
                    <p>Email</p>
                    <input
                        className="input__cadastro"
                        placeholder="email"
                        type="text"
                        value={this.state.email}
                        onChange={this.atualizarEmail.bind(this)}
                        name="username"
                        id="cadastro__email"
                    />
                    </div>

                    <br/>
                    
                    <br/>

                    <div className="item">
                    <p>Senha</p>
                    <input
                        className="input__cadastro"
                        placeholder="senha"
                        type="password"
                        value={this.state.senha}
                        onChange={this.atualizarSenha.bind(this)}
                        name="password"
                        id="cadastro__password"
                    />
                    </div>
                    
                    <br/>
                    
                    <br/>

                    <div className="item">
                    <p>Permissao</p>
                    <input
                        className="input__cadastro"
                        placeholder="permissão"
                        type="text"
                        value={this.state.tipoUsuario}
                        onChange={this.atualizarPermissao.bind(this)}
                        name="tipoUsuario"
                        id="cadastro__permissao"
                    />
                    </div>

                    <br/>

                    <div className="item">
                        <button   
                            onClick={this.adicionaItem}
                            id="btn__cadastrar"
                            className="btn btn-danger"
                            >Cadastrar</button>
                    </div>
                </form>
            </div>
        </section>
        );
    }
}