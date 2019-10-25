import React, { Component } from 'react';

import logo from '../../assets/img/OpFlix_logo_adm.png';
import Axios from 'axios';

export default class TelaAdm_User extends Component {

  constructor() {
    super();
    this.state = {
      lista: [],
      nome: '',
      permissao: '',
      email: '',
      senha: ''
    }
  }

  listaUsuarios = (event) => {
    event.preventDefault();
    Axios.get('http://localhost:5000/api/usuarios', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + localStorage.getItem('usuario-opflix')
      }
    })
      .then(resposta => {
        console.log(resposta)
        this.setState({ lista: resposta.data })
      })
      .catch(erro => {
        console.log(erro);
      });
  }

  render() {
    return (
      <section>
        <div className="item">
          <img src={logo} className="icone__cadastro" />
        </div>

        <h1>Cadastrar novo Usuário</h1>

        <table id="tabela-lista">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Permissao</th>
              <th>Email</th>
              <th>Senha</th>
            </tr>
          </thead>

          <tbody id="tabela-lista-corpo">
            {
              // map retorna algo, funciona como se fosse um foreach
              this.state.lista.map(element => {
                return (
                  <tr>
                    <td>{element.idUsuario}</td>
                    <td>{element.nome}</td>
                    <td>{element.permissao}</td>
                    <td>{element.email}</td>
                    <td>{element.senha}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

        <form>
          <h2>Usuario</h2>

          <div className="item">
            <p>Nome</p>
            <input
              className="input__cadastro"
              placeholder="Nome"
              type="text"
              name="user_name"
            />
          </div>

          <div className="item">
            <p>Permissao</p>
            <input
              className="input__cadastro"
              placeholder="Permissão"
              type="text"
              name="user_permissao"
            />
          </div>

          <div className="item">
            <p>Email</p>
            <input
              className="input__cadastro"
              placeholder="Email"
              type="email"
              name="user_email"
            />
          </div>

          <div className="item">
            <p>Senha</p>
            <input
              className="input__cadastro"
              placeholder="Senha"
              type="password"
              name="user_password"
            />
          </div>

          <div className="item">
            <button
              className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
            >
              Cadastrar
                        </button>
            <button onClick={this.listaUsuarios}>Listar Usuarios</button>

          </div>
        </form>
      </section>
    );
  }
}