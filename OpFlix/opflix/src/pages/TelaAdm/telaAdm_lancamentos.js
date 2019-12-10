
import React,{Component} from 'react';
import logo from '../../assets/img/OpFlix_logo_adm.png';
// import { parseJwt } from "../../auth/auth";
import Axios from 'axios';

export default class telaAdm_lancamentos extends Component{
    constructor(){
        super();
        // this.state = {
        //     Permissao : ''
        // };
        this.state = {
            lista: [],
            nome: '',
            sinopse: '',
            duracao: '',
            dataLancamento: ''
        };
        //this.cadastrarLancamento = this.cadastrarLancamento.bind(this);
    }

    componentDidMount() {
        this.listaLancamentos();
      }
    
    listaLancamentos = (event) => {
      Axios.get('http://192.168.4.199:5000/api/lancamentos', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer' + localStorage.getItem('usuario-opflix')
        }
      })
        .then(resposta => {
          console.log(resposta);
          this.setState({ lista: resposta.data });
        })
        .catch(erro => {
          console.log(erro);
        });
    }

    //criar uma funcao para enviar os dados para a api
    adicionaItem = (event) => {
      event.preventDefault();
      fetch('http://192.168.4.199:5000/api/lancamentos', {
        method: 'POST',
        body: JSON.stringify({ nome: this.state.nome, sinopse: this.state.sinopse, 
            duracao: this.state.duracao, data: this.state.dataLancamento }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix')
        }
      })
        .then(response => response.json())
        .then(this.componentDidMount())
        .catch(erro => console.log(erro));
    }

    adicionaLancamento = () => {
        let valores_lista = this.state.lista;
        let lancamentos = { nome: this.state.nome, sinopse: this.state.sinopse, 
            duracao: this.state.duracao, data: this.state.dataLancamento }
    
        valores_lista.push(lancamentos);
    
        this.setState({ lista: valores_lista });
      }

   atualizarNome(event) {
        this.setState({ nome: event.target.value })
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

    // componentDidMount(){
    // this.setState({Permissao: parseJwt().Permissao})
    // }

    render(){   
        return(
        <div>
                <div className="icone__cadastro">
                    <img className="logo_admLancamentos" src={logo} />
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
                        <form class="form-group" onSubmit={this.adicionaItem}>
                            <input
                            type="text"
                            className="className__titulo"
                            id="input__titulp"
                            placeholder="Título"
                            value={this.state.nome}
                            onInput={this.atualizarNome.bind(this)}
                            />
                            
                            <br/>

                            <br/>

                            <input
                            type="text"
                            className="className__sinopse"
                            id="input__sinopse"
                            placeholder="Sinopse"
                            value={this.state.sinopse}
                            onInput={this.atualizarSinopse.bind(this)}
                            />
                            
                            <br/>

                            <br/>

                            <input
                            type="text"
                            className="className__tempoduracao"
                            id="input__tempoduracao"
                            placeholder="Tempo de Duração"
                            value={this.state.duracao}
                            onInput={this.atualizarTempoDuracao.bind(this)}
                            />

                            <br/>

                            <br/>

                            <input
                            type="text"
                            className="className__datalancamento"
                            id="input__datalancamento"
                            placeholder="Data de Lançamento"
                            value={this.state.dataLancamento}
                            onInput={this.atualizarDataLancamento.bind(this) }
                            />
                            
                            <br/>

                            <br/>  

                            <button
                            id="btn__cadastrar"
                            className="btn btn-danger"
                            >
                            Cadastrar
                            </button>
                        </form>
                    </div>
                    
                    </section>
                </main>
                </div>        
        );
    }
}
