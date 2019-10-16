import React,{Component} from 'react';

import logo from '../../assets/img/OpFlix_logo.png'

export default class Cadastro extends Component{
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
                    <button className="btn btn__cadastro" id="btn__cadastro">
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