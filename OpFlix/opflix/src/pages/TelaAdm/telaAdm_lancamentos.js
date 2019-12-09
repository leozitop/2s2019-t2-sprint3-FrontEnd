
import React,{Component} from 'react';
import logo from '../../assets/img/OpFlix_logo_adm.png';
import { parseJwt } from "../../auth/auth";

export default class telaAdm_lancamentos extends Component{
    constructor(){
        super();
        this.state = {
            Permissao : ''
        };this.state = {
            lista: [],
            lancamento: '',
            sinopse: '',
            duracao: '',
            dataLancamento: ''
        };
        this.cadastrarLancamento = this.cadastrarLancamento.bind(this);
    }

    cadastrarLancamento(event) {
        event.preventDefault();
        fetch("http://192.168.4.199:5000/api/lancamentos", {
            method: "POST",
            body: JSON.stringify({ lancamento: this.state.lancamento, sinopse: this.state.sinopse, 
                duracao: this.state.duracao, data: this.state.dataLancamento}),
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json"
            }
        })
        .then(response => response.json())
        .catch(error => console.log(error));
   }

   atualizarTitulo(event) {
        this.setState({ lancamento: event.target.value })
    }

    atualizarSinopse(event) {
        this.setState({ sinopse: event.target.value })
    }

    atualizarTempoDuracao(event) {
        this.setState({ duracao: event.target.value })
    }

    atualizarDataLancamento(event) {
        this.setState({ dataLancamento: event.target.value })
    } 

    componentDidMount(){
    this.setState({Permissao: parseJwt().Permissao})
    }

    render(){   
        return(
        <div>
                <div className="container">
                    <img className="icone__cadastro" src={logo} />

                </div>

                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                    {/* <div className="container" id="conteudoPrincipal-lista">
                        <table id="tabela-lista">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Lançamento</th>
                            </tr>
                        </thead>

                        <tbody id="tabela-lista-corpo"></tbody>
                        </table>
                    </div> */}
                   
                        <div className="container" id="conteudoPrincipal-cadastro">
                        <form class="form-group" onSubmit={this.cadastrarLancamento }>
                        <div className="container">
                            <input
                            type="text"
                            className="className__titulo"
                            id="input__titulp"
                            placeholder="Título"
                            value={this.state.lancamento}
                            onChange={this.atualizarTitulo.bind(this)}
                            />
                            <input
                            type="text"
                            className="className__sinopse"
                            id="input__sinopse"
                            placeholder="Sinopse"
                            value={this.state.sinopse}
                            onChange={this.atualizarSinopse.bind(this)}
                            />
                            <input
                            type="text"
                            className="className__tempoduracao"
                            id="input__tempoduracao"
                            placeholder="Tempo de Duração"
                            value={this.state.duracao}
                            onChange={this.atualizarTempoDuracao.bind(this)}
                            />
                            <input
                            type="text"
                            className="className__datalancamento"
                            id="input__datalancamento"
                            placeholder="Data de Lançamento"
                            value={this.state.dataLancamento}
                            onChange={this.atualizarDataLancamento.bind(this)}
                            />
                            <button
                            id="btn__cadastrar"
                            className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                            >
                            Cadastrar
                            </button>
                        </div>
                        </form>
                    </div>
                    
                    </section>
                </main>
                </div>        
        );
    }
}