import React, { Component } from 'react';

import logo from '../../assets/img/OpFlix_logo.png'
import Titulo from '../../components/Titulo/Titulo'

import Axios from 'axios';

export default class Lancamentos extends Component {

  constructor() {
    super();
    this.state = {
      lista: [],
      imagem: '',
      lancamento: '',
      sinopse: '',
      // categoria: '',
      duracao: '',
      // tipo: '',
      dataLancamento: ''
      // plataforma: ''
    };
  }

  listaLancamentos = (event) => {
    Axios.get('http://192.168.3.160:5000/api/lancamentos')
      .then(data => {
        this.setState({ lista: data.data });
      })
      .catch(erro => {
        console.log(erro);
      });
  }

  render() {
    return (
      <div className="lancamentos">
        <div className="logo_lancamentos">
          <img width='300px' src={logo} />
        </div>



        <main className="conteudoPrincipal">
          <section className="conteudoPrincipal-cadastro">
            <Titulo titulo="Lancamentos" />
            {/* <h1 className="conteudoPrincipal-cadastro-titulo">Eventos</h1> */}
            <div className="container" id="conteudoPrincipal-lista">
              <table class="table table-dark" id="tabela-lista">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Lancamento</th>
                    <th>Sinopse</th>
                    {/* <th>Categoria</th> */}
                    <th>Duracao</th>
                    {/* <th>Tipo</th> */}
                    <th>Data</th>
                    {/* <th>Plataforma</th> */}
                    <th>Cartaz</th>
                  </tr>
                </thead>


                <tbody  id="tabela-lista-corpo">
                  {
                    // map retorna algo, funciona como se fosse um foreach
                    this.state.lista.map(element => {
                      return (
                        
                          <tr>
                            {/* <td key={element.idLancamento}></td> */}
                            <td>{element.idLancamento}</td>
                            <td>{element.lancamento}</td>
                            <td>{element.sinopse}</td>
                            <td>{element.duracao}</td>
                            <td>{element.dataLancamento}</td>
                            <div className='imagemLancamentos'>
                              <img width='100px' src={element.imagem}></img>
                            </div>
                          </tr>
                        
                      )
                    })
                  }
                </tbody>
              </table>
              <button className="btn btn-danger" onClick={this.listaLancamentos}>Listar Lancamento</button>

            </div>
          </section>
        </main>
      </div>
    );
  }
}

//

{/* <div class="cartaz1">
<img src={cartaz1}/>
<p>Joker</p>
<p>categoria: </p>
<p>182 min</p>
<p>tipo: filme</p>
<p>03/10/2019</p>
<p>cinema</p>
</div> */}

// class LancamentosAdmin extends Component{
//   constructor(){
//       super();
//       this.state = {
//           Permissao : ''
//       };this.state = {
//           lista: [
//               // {IdUsuario: 1, Nome: "Erik", Email: "erik@email.com", Senha: "123456", Permissao: "ADMINISTRADOR"},
//               // {IdUsuario: 2, Nome: "Cassiana", Email: "cassiana@email.com", Senha: "123456", Permissao: "ADMINISTRADOR"},
//               // {IdUsuario: 3, Nome: "Helena", Email: "helena@email.com", Senha: "123456", Permissao: "ADMINISTRADOR"}
//           ],
//           Titulo : '',
//           Sinopse : '',
//           IdCategoria : '',
//           TempoDuracao : '',
//           FilmeSerie : '',
//           DataLancamento : ''
//       };
//       this.cadastrarLancamento = this.cadastrarLancamento.bind(this);
//   }

//   cadastrarLancamento(event) {
//       event.preventDefault();
//       fetch("http://192.168.4.209:5000/api/lancamentos", {
//           method: "POST",
//           body: JSON.stringify({ Titulo: this.state.Titulo, Sinopse: this.state.Sinopse, IdCategoria: this.state.IdCategoria,  TempoDuracao: this.state.TempoDuracao, FilmeSerie: this.state.FilmeSerie, DataLancamento: this.state.DataLancamento }),
//           headers: {
//               "Content-Type": "application/json",
//               "Accept" : "application/json"
//           }
//       })
//       .then(response => response.json())
//       .catch(error => console.log(error));
//  }

//  atualizarTitulo(event) {
//       this.setState({ Titulo: event.target.value })
//   }

//   atualizarSinopse(event) {
//       this.setState({ Sinopse: event.target.value })
//       }

//   atualizarIdCategoria(event) {
//       this.setState({ IdCategoria: event.target.value })
//   }

//   atualizarTempoDuracao(event) {
//       this.setState({ TempoDuracao: event.target.value })
//   }
  
//   atualizarFilmeSerie(event) {
//       this.setState({ FilmeSerie: event.target.value })
//   } 

//   atualizarDataLancamento(event) {
//       this.setState({ DataLancamento: event.target.value })
//   } 

//   componentDidMount(){
//   this.setState({Permissao: parseJwt().Permissao})
//   }

//   render(){   
//       return(
//       <div>
//               <header className="cabecalhoPrincipal">
//                   <div className="container">
//                   <img src={logosimples} />

//                   <nav className="cabecalhoPrincipal-nav">
//                       {this.state.Permissao}
//                   </nav>
//                   </div>
//               </header>

//               <main className="conteudoPrincipal">
//                   <section className="conteudoPrincipal-cadastro">
//                   <h1 className="conteudoPrincipal-cadastro-titulo">Lançamentos</h1>
//                   <div className="container" id="conteudoPrincipal-lista">
//                       <table id="tabela-lista">
//                       <thead>
//                           <tr>
//                           <th>#</th>
//                           <th>Lançamento</th>
//                           </tr>
//                       </thead>

//                       <tbody id="tabela-lista-corpo"></tbody>
//                       </table>
//                   </div>
                 
//                       <div className="container" id="conteudoPrincipal-cadastro">
//                       <h2 className="conteudoPrincipal-cadastro-titulo">
//                       Cadastrar Lançamento
//                       </h2>
//                       <form onSubmit={this.cadastrarLancamento }>
//                       <div className="container">
//                           <input
//                           type="text"
//                           className="className__titulo"
//                           id="input__titulp"
//                           placeholder="Título"
//                           value={this.state.Titulo}
//                           onChange={this.atualizarTitulo.bind(this)}
//                           />
//                           <input
//                           type="text"
//                           className="className__sinopse"
//                           id="input__sinopse"
//                           placeholder="Sinopse"
//                           value={this.state.Sinopse}
//                           onChange={this.atualizarSinopse.bind(this)}
//                           />
//                           <input
//                           type="text"
//                           className="className__idcategoria"
//                           id="input__idcategoria"
//                           placeholder="IdCategoria"
//                           value={this.state.IdCategoria}
//                           onChange={this.atualizarIdCategoria.bind(this)}
//                           />
//                           <input
//                           type="text"
//                           className="className__tempoduracao"
//                           id="input__tempoduracao"
//                           placeholder="Tempo de Duração"
//                           value={this.state.Categoria}
//                           onChange={this.atualizarTempoDuracao.bind(this)}
//                           />
//                           <input
//                           type="text"
//                           className="className__filmeserie"
//                           id="input__filmeserie"
//                           placeholder="Filme ou Série"
//                           value={this.state.FilmeSerie}
//                           onChange={this.atualizarFilmeSerie.bind(this)}
//                           />
//                           <input
//                           type="text"
//                           className="className__datalancamento"
//                           id="input__datalancamento"
//                           placeholder="Data de Lançamento"
//                           value={this.state.DataLancamento}
//                           onChange={this.atualizarDataLancamento.bind(this)}
//                           />
//                           <button
//                           id="btn__cadastrar"
//                           className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
//                           >
//                           Cadastrar
//                           </button>
//                       </div>
//                       </form>
//                       {/* <Link to="/login">Login</Link> */}
//                   </div>
                  
//                   </section>
//               </main>

//               <footer className="rodapePrincipal">
//                   <section className="rodapePrincipal-patrocinadores">
//                   <div className="container">
//                       <p>Escola SENAI de Informática - 2019</p>
//                   </div>
//                   </section>
//               </footer>
//               </div>        );
//   }
// }

// export default LancamentosAdmin;