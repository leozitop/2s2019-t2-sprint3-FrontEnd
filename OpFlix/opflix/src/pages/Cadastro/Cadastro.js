import React,{Component} from 'react';

import logo from '../../assets/img/OpFlix_logo.png';
import Axios from 'axios';

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
    }

    componentDidMount(){
        this.listaAtualizada();
    }

    listaAtualizada = () =>{
        fetch('http://localhost:5000/api/usuarios', {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')
                // 'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({lista: data}));
        // Axios.get('http://localhost:5000/api/usuarios', {
        //     headers: {
        //         Authorization: 'Bearer ' + localStorage.getItem('usuario-opflix')
        //     }
        // })
        // .then(data =>{
        //     console.log(data);
        // })
    }

    adicionaItem = (event) =>{
        event.preventDefault();
        console.log(this.state.nome);
        fetch('http://localhost:5000/api/usuarios', {
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

    render(){
        return(
            <section className="container flex">
            <div className="item__cadastro">
                <div className="row">
                <div className="item">
                    <img src= {logo} className="icone__cadastro" />
                </div>
                
                <form>
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
                        onInput={this.atualizarNome}
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
                        onInput={this.atualizarEmail}
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
                        onInput={this.atualizarSenha}
                        name="password"
                        id="cadastro__password"
                    />
                    </div>

                    <div className="item">
                    <p>Tipo do Usuario</p>
                    <select>
                        <option value='0' disabled>permissao</option>
                        <option value={this.state.tipoUsuario}>Administrador</option>
                        <option value={this.state.tipoUsuario}>Cliente</option>
                    </select>
                    </div>


                    <div className="item">
                    <button  
                            onClick={this.adicionaItem}
                            id="btn__cadastrar"
                            className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                            >
                        Cadastrar
                    </button>

                    </div>
                </form>
                </div>
            </div>
        </section>
        );
    }
}