import React from 'react';
//import './App.css';
import Axios from 'axios';

class LogarCep extends Component {

  constructor(){
    super();
    this.state = {
      lista: [

      ],
      cep: "",
      logradouro: "",
      complemento: "",
      bairro: "",
      localidade: "",
      uf: ""
    }
  }

  // ComponentDidMOunt(){
  //   fetch('https://viacep.com.br/')
  //     .then(response => response.json())
  //     .then(data => this.setState({lista: data}));
  // }

  InsereCep = (event) =>{
    this.setState({cep: event.target.value});
  }

  PreencherCampos = (event) =>{
    event.preventDefault();

    Axios.get('https://viacep.com.br/'+this.state.cep+'/json')
    .then(response => {
      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.log('Errrrrooou');
      }
    })
    .catch(erro => {
      this.setState({erro: "Cep inválido fioti"})
      console.log(erro);
    });
  }

  addCampos = () =>{
    let valores_lista = this.state.lista;
    let cep = {cep: this.state.cep,
      logradouro: this.state.logradouro,
      complemento: this.state.complemento,
      bairro: this.state.bairro,
      localidade: this.state.localidade,
      uf: this.state.uf
    }
  }

  render(){
    return (
      <div className="App">
        <h1>ViaCEP</h1>

        <p>Digite se CEP aqui</p>
        <form>
          <div className="item">
            <input
              className="input__cep"
              placeholder="cep"
              onInput={this.InsereCep}
              type="text"
              name="username"
              id="cep"
            />
          </div>


          <div className="item">
            <input
              className="input__logradouro"
              placeholder="logradouro"
              type="text"
              name="text"
              id="logradouro"
            />
            <p 
              className="text__login"
              style={{color: "red", textAlign: "center"}}
            >
              {this.state.erro}
            </p>
          </div>


          <div className="item">
            <input
              className="input__complemento"
              placeholder="complemento"
              type="text"
              name="text"
              id="complemento"
            />
            <p 
              className="text__login"
              style={{color: "red", textAlign: "center"}}
            >
              {this.state.erro}
            </p>
          </div>


          <div className="item">
            <input
              className="input__bairro"
              placeholder="bairro"
              type="text"
              name="text"
              id="bairro"
            />
            <p 
              className="text__login"
              style={{color: "red", textAlign: "center"}}
            >
              {this.state.erro}
            </p>
          </div>


          <div className="item">
            <input
              className="input__localidade"
              placeholder="localidade"
              type="text"
              name="text"
              id="localidade"
            />
            <p 
              className="text__login"
              style={{color: "red", textAlign: "center"}}
            >
              {this.state.erro}
            </p>
          </div>


          <div className="item">
            <input
              className="input__uf"
              placeholder="uf"
              type="text"
              name="text"
              id="uf"
            />
            <p 
              className="text__login"
              style={{color: "red", textAlign: "center"}}
            >
              {this.state.erro}
            </p>
          </div>


          <div className="item">
            <button className="btn btn__login" id="btn__login">
              Login
            </button>
          </div>
        </form>

        <footer className="rodapePrincipal">
          <section className="rodapePrincipal-patrocinadores">
            <div className="container">
              <p>ViaCEP Brasil - 2019</p>
            </div>
          </section>
        </footer>
      </div>
    );
  }
}

export default LogarCep;
