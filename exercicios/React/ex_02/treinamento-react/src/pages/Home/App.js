import React,{Component} from 'react';
import Axios from 'axios';
import logo from '../../assets/img/logo_git.png';
import './App.css';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      nome: "",
      erro: ""
    }
  }

  capturarCampo = (event) =>{
    this.setState({nome: event.target.value});
  }

  Requisicao = (event) =>{
    event.preventDefault();

    Axios.post("https://api.github.com/", {
      nome: this.state.nome
    })
    .then(response => {
      if (response.status === 200) {
        console.log(response.data);
        localStorage.setItem("repositorio-git", response.data);
      }else{
        console.log("Deu ruim parça...");
      }
    })
    .catch(erro => {
      this.setState({erro: "username inválido"});
      console.log(erro);
    })
  }

  render(){
    return (
      <div className="App">
        <div>
          <h1>GitHub</h1>
          {/* <img src= {logo} className="icone_logo"/> */}
        </div>
        <div className="item" id="item__title">
          <p className="text__login" id="item__description">
            Digite seu nome de usuário para acessar ao seu repositório Git-hub
          </p>
        </div>
        <form onSubmit={this.Requisicao}>
          <div className="item">
            <input
              className="input__login"
              placeholder="username git-hub"
              onInput={this.capturarCampo}
              type="text"
              name="username"
              id="login__username"
            />
          </div>
             <div className="item">
              <button className="btn btn__login" id="btn__login">
                IR
              </button>
            </div> 
        </form>
      </div>
    );
  }
}