import React, { Component } from 'react';

import logo from '../../assets/img/OpFlix_logo.png';
import { Link } from 'react-router-dom';
import '../../assets/css/login.css';
//import 'bootstrap / dist / css / bootstrap.css' ;
import '../../assets/css/bootstrap/bootstrap-4.4.1-dist/bootstrap-4.4.1-dist/css/bootstrap.css'


// axios
import Axios from 'axios';

class Login extends Component {

  constructor() {
    // faz referencia ao Component
    super();
    this.state = {
      email: "",
      senha: "",
      erro: ""
    }
  }

  atualizaEstadoEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  atualizaEstadoSenha = (event) => {
    this.setState({ senha: event.target.value });
  }

  efetuarLogin = (event) => {
    event.preventDefault();

    Axios.post("http://192.168.4.199:5000/api/login", {
      email: this.state.email,
      senha: this.state.senha
    })
      .then(response => {
        if (response.status === 200) {
          // props => propriedades => herança
          localStorage.setItem("usuario-opflix", response.data.token);
          console.log(response.data.token);
          this.props.history.push('/telaAdm');
        } else {
          console.log('vish deu ruim');
        }
      })
      .catch(erro => {
        this.setState({ erro: "Usuário ou senha inválidos" });
        console.log(erro);
      });
  }

  render() {
    return (
      <section className="container flex">
        <div className="img__login"><div className="img__overlay"></div></div>

        <div className="item__login">
          <div className="item">
            <img width='400px'  src={logo} className="icone__login" />
          </div>

          <form class="form-group" onSubmit={this.efetuarLogin}>
            <div className="item" id="item__title">
              <p className="text__login" id="item__description">
                Login
                        </p>
            </div>
            <div className="item">
              <p>Email</p>
              <input
                className="input__login"
                placeholder="email"
                onInput={this.atualizaEstadoEmail}
                type="text"
                name="username"
                id="login__email"
              />
            </div>

            <br />

            <br />

            <div className="item">
              <p>Senha</p>
              <input
                className="input__login"
                placeholder="senha"
                onInput={this.atualizaEstadoSenha}
                type="password"
                name="password"
                id="login__password"
              />
              <p
                className="text__login"
                style={{ color: "red", textAlign: "center" }}
              >
              </p>
            </div>
            <div className="item">
              <button className="btn btn-danger" id="btn__login">
                Entrar
                    </button>

              <div className="item">
                <p>Faça seu cadastro
                        <br />caso ainda não tenha</p>
              </div>

            </div>
            <Link className="btn btn-danger" id="btn__cadastro__link" to='/cadastro'>
              Cadastrar
                    </Link>
          </form>
        </div>
      </section>
    );

  }

}

export default Login;