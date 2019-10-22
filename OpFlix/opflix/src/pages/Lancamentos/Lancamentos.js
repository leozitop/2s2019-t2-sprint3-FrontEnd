import React, { Component } from 'react';

import logo from '../../assets/img/OpFlix_logo.png'
import Titulo from '../../components/Titulo/Titulo'

import cartaz1 from '../../assets/img/cartaz_joker.jpg'

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
      data: ''
      // plataforma: ''
    };
  }

  listaLancamentos = (event) => {
    Axios.get('http://localhost:5000/api/lancamentos')
      .then(data => {
        this.setState({ lista: data.data });
      })
      .catch(erro => {
        console.log(erro);
      });
  }

  render() {
    return (
      <div>
        <div className="item">
          <img src={logo} />
        </div>



        <main className="conteudoPrincipal">
          <section className="conteudoPrincipal-cadastro">
            <Titulo titulo="Lancamentos" />
            {/* <h1 className="conteudoPrincipal-cadastro-titulo">Eventos</h1> */}
            <div className="container" id="conteudoPrincipal-lista">
              <table id="tabela-lista">
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
                  </tr>
                </thead>


                <tbody id="tabela-lista-corpo">
                  {
                    // map retorna algo, funciona como se fosse um foreach
                    this.state.lista.map(element => {
                      return (
                        <div>
                          <tr>
                            <td key={element.idLancamento}></td>
                            <td>{element.idLancamento}</td>
                            <td>{element.lancamento}</td>
                            <td>{element.sinopse}</td>
                            <td>{element.duracao}</td>
                            <td>{element.data}</td>
                          </tr>
                            <div>
                              <img src={element.imagem}></img>
                            </div>
                        </div>
                      )
                    })
                  }
                </tbody>
              </table>

              <button onClick={this.listaLancamentos}>Listar Lancamento</button>

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