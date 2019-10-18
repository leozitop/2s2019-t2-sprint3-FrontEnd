import React,{Component} from 'react';

import logo from '../../assets/img/OpFlix_logo.png';

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

    // componentDidMount(){
    //     this.listaAtualizada();
    // }

    // listaAtualizada = () =>{
    //     fetch('http://localhost:5000/api/categorias')
    //         .then(response => response.json())
    //         .then(data => this.setState({lista: data}));
    // }

    // adicionaItem = (event) =>{
    //     event.preventDefault();
    //     console.log(this.state.nome);
    //     // localhost:5000
    //     fetch('http://localhost:5000/api/eventos', {
    //         method: 'POST',
    //         body: JSON.stringify({nome: this.state.nome, email: this.state.email,
    //         senha: this.state.senha, tipoUsuario: this.state.tipoUsuario}),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(this.listaAtualizada())
    //     .catch(error => console.log(error))
    // }

    // adicionaEvento = () =>{
    //     let valores_lista = this.state.lista;
    //     let usuario = {idUsuario: this.state.lista.length,
    //         nome: this.state.nome,
    //         email: this.state.email,
    //         senha: this.state.senha,
    //         tipoUsuario: this.state.tipoUsuario
    //         }

    //     valores_lista.push(usuario);
    //     this.setState({lista: valores_lista});
    // }

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
                        name="password"
                        id="cadastro__password"
                    />
                    <p 
                        className="text__cadastro"
                        style={{color: "red", textAlign: "center"}}
                    >
                    </p>
                    </div>
                    <div className="item">
                    <button  
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