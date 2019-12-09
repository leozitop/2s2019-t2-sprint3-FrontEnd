import React, { Component } from 'react';

import logo from '../../assets/img/OpFlix_logo_adm.png';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default class TelaAdm extends Component {

  constructor() {
    super();
    this.state = {
      lista: [],
      nome: ''
    };
    // this.adicionaItem = this.adicionaItem.bind(this);
  }

  componentDidMount() {
    this.listaCagtegoria();
  }

 // *CATEGORIAS* 
  listaCagtegoria = (event) => {
    Axios.get('http://192.168.4.199:5000/api/categorias', {
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
    fetch('http://192.168.4.199:5000/api/categorias', {
      method: 'POST',
      body: JSON.stringify({ nome: this.state.nome }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('usuario-opflix')
      }
    })
      .then(response => response.json())
      .then(this.componentDidMount())
      .catch(erro => console.log(erro));
  }

  adicionaCategoria = () => {
    let valores_lista = this.state.lista;
    let categoria = { nome: this.state.nome }

    valores_lista.push(categoria);

    this.setState({ lista: valores_lista });
  }

  atualizarNome = (event) => {
    this.setState({ nome: event.target.value })
  }

  render() {
    return (
      <section className="container flex">
        <div className="item__cadastro">
            <div className="item">
              <img src={logo} className="icone__cadastro" />
            </div>

            <div className="telaAdmin">

              <div  class="table table-dark" >
                <table id="tabela-lista-categorias">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nome</th>
                    </tr>
                  </thead>

                  <tbody id="tabela-lista-corpo">
                    {
                      // map retorna algo, funciona como se fosse um foreach
                      this.state.lista.map(element => {
                        return (
                          <tr>
                            <td>{element.idCategoria}</td>
                            <td>{element.nome}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>

              </div>

            
              <form class="form-group" onSubmit={this.adicionaItem}>
                  <div className="container">
                    <input type="text"
                      onInput={this.atualizarNome}
                      value={this.state.nome}
                      id="categoria__titulo"
                      placeholder="nome" />
                  </div>

                    <br/>

                  <button className="btn btn-danger"
                  >Cadastrar</button>

                    <br/>

                    <br/>

                  <button className="btn btn-danger" OnClick={this.listaCategoria}>Listar Categorias</button>

                  <br/>

                  <br/>

                  <Link className='link-telaUsuarios' to='/telaAdmUser'>Ir para Usuarios</Link>
                  <br/>
                  <Link className='link-telaLancamentos' to='/telaAdmLancamentos'>Ir para Lancamentos</Link>
                </form>

              </div>

            
        </div>
      </section>
    );
  }
}