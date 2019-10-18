import React,{Component} from 'react';

import logo from '../../assets/img/OpFlix_logo_adm.png';

export default class TelaAdm extends Component{
    render(){
        return(
            <section className="container flex">
                <div className="item__cadastro">
                    <div className="row">
                    <div className="item">
                        <img src= {logo} className="icone__cadastro" />
                    </div>
                    
                        <div className="item" id="item__title">
                            <h1>
                            Cadastro de:
                            </h1>
                        </div>

                    <form>
                        <h2>Categoria</h2>

                        <div className="item">
                        <p>Nome</p>
                        <input
                            className="input__cadastro"
                            placeholder="nome"
                            type="text"
                            name="name_categoria"
                        />
                        </div>

                        <br/>

                        <div>
                        <p 
                            className="text__cadastro"
                            style={{color: "red", textAlign: "center"}}
                        >
                        </p>
                        </div>
                        <div className="item">
                        <button  
                                className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                                >
                            Cadastrar
                        </button>

                        </div>
                    </form>

                    

                    <form>
                        <h2>Plataforma</h2>

                        <div className="item">
                        <p>Nome</p>
                        <input
                            className="input__cadastro"
                            placeholder="nome"
                            type="text"
                            name="name_plataforma"
                        />
                        </div>

                        <br/>

                        <div>
                        <p 
                            className="text__cadastro"
                            style={{color: "red", textAlign: "center"}}
                        >
                        </p>
                        </div>
                        <div className="item">
                        <button  
                                className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                                >
                            Cadastrar
                        </button>

                        </div>
                    </form>

                    

                    <form>
                        <h2>Lancamento</h2>

                        <div className="item">
                        <p>Nome</p>
                        <input
                            className="input__cadastro"
                            placeholder="nome"
                            type="text"
                            name="name_lancamento"
                        />
                        </div>

                        <div className="item">
                        <p>Sinopse</p>
                        <input
                            className="input__cadastro"
                            placeholder="sinopse"
                            type="text"
                            name="sinopse_lancamento"
                        />
                        </div>

                        <div className="item">
                        <p>Categoria</p>
                        <input
                            className="input__cadastro"
                            placeholder="categoria"
                            type="text"
                            name="categoria_lancamento"
                        />
                        </div>

                        <div className="item">
                        <p>Duracao</p>
                        <input
                            className="input__cadastro"
                            placeholder="duracao (min)"
                            type="text"
                            name="duracao_lancamento"
                        />
                        </div>

                        <div className="item">
                        <p>Tipo</p>
                        <input
                            className="input__cadastro"
                            placeholder="tipo"
                            type="text"
                            name="tipo_lancamento"
                        />
                        </div>

                        <div className="item">
                        <p>Data de Lancamento</p>
                        <input
                            className="input__cadastro"
                            placeholder="dd/MM/yyyy"
                            type="text"
                            name="data_lancamento"
                        />
                        </div>

                        <div className="item">
                        <p>Plataforma</p>
                        <input
                            className="input__cadastro"
                            placeholder="nome"
                            type="text"
                            name="plataforma_lancamento"
                        />
                        </div>

                        <br/>

                        <div>
                        <p 
                            className="text__cadastro"
                            style={{color: "red", textAlign: "center"}}
                        >
                        </p>
                        </div>
                        <div className="item">
                        <button  
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