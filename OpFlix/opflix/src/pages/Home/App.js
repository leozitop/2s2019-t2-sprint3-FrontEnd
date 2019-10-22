import React from 'react';

// import '../../assets/css/flexbox.css';
// import '../../assets/css/login.css';
import '../../assets/css/style.css';
// import '../../assets/css/reset.css';

import logo from '../../assets/img/OpFlix_logo.png';
import face from '../../assets/img/OpFlix_facebook.jpg';
import insta from '../../assets/img/OpFlix_instagram.jpg';
import twitter from '../../assets/img/OpFlix_twitter.png';
import destaque_1 from '../../assets/img/Coringa_destaque.jpg';
//import play from '../../assets/img/';

import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
      <header className="cabecalhoPrincipal">
        <div className="container">
          {/* referente ao java script */}
          <img src={logo} />

          <div className="cabecalhoPrincipal-nav">
          <nav>
            <a>Home</a>
            <Link className="cabecalhoPrincipal-nav-lancamentos" to="/lancamentos">Lancamentos</Link>
            <Link className="cabecalhoPrincipal-nav-login" to="/login">Login</Link>
          </nav>
          </div>
        </div>
      </header>

      <section className="conteudoImagem">
        <div className="conteudoPrincipal-banner">
          {/* <img src={play}/> */}
          {/* <h1>Gufos</h1> */}
          <h2>Dê um play no que te deixa feliz com o OpFlix.</h2>
        </div>
      </section>
      
      <main className="conteudoPrincipal">
        <section id="conteudoPrincipal-destaque">
          <h2>Destaques</h2>
          <div>
          <img src={destaque_1}/>
          <p>Coringa interpretado por Joaquim Phoenix
            <br/>ganha grande destaque e ator é cogitado para
            <br/>receber um Oscar</p>
          </div>
        </section>

        <section id="conteudoPrincipal-eventos">
          <h2 id="conteudoPrincipal-eventos-titulo">Opiniões</h2>
          <div className="container">
            <nav>
              <ul className="conteudoPrincipal-dados">
                <li className="conteudoPrincipal-dados-link eventos">
                  <h3>Usuario 1</h3>
                  <p>
                    O app funciona muito bem, ele é ágil.
                  </p>
                  
                </li>

                <li className="conteudoPrincipal-dados-link eventos">
                  <h3>Usuario 2</h3>
                  <p>
                    Com ele eu consegui ver filmes que acabaram de sair do cinema,
                    <br/>como o Godzilla, isso sem custo algum.
                  </p>
                  
                </li>

                <li className="conteudoPrincipal-dados-link eventos">
                  <h3>Usuario 3</h3>
                  <p>
                    Adorei o app, recomendo, é muito bom para os amantes de séries.
                  </p>
                  
                </li>
              </ul>
            </nav>
          </div>
        </section>

        <section id="conteudoPrincipal-visao">
          <h1 id="conteudoPrincipal-visao-titulo">Informações do OpFlix</h1>
          <div className="container">
            <p className="visao-texto">
              Com o OpFlix você tem segurança das suas informações<br />
              O OpFlix oferece pra você filmes e séries fresquinhos qie acabaram de ser lançados<br />
              Ele é rápido e eficaz<br />
              </p>
          </div>
        </section>

        <section id="conteudoPrincipal-contato">
          <h1 id="conteudoPrincipal-contato-titulo">Contato</h1>
          <div className="container conteudo-contato-titulo">
            <div className="contato-mapa conteudo-contato-mapa"></div>
            <div className="contato-endereco conteudo-contato-endereco">
              Alameda Barão de Limeira, 539 <br />
              São Paulo - SP
            </div>
          </div>
        </section>
      </main>

      <footer className="rodapePrincipal">
        <section className="rodapePrincipal-patrocinadores">
          <div className="container">
            <p>OpFlix</p>
          </div>
          <div className="container">
            <p>Siga nossas redes sociais:</p>
            <img src= {face}/>
            <img src= {insta}/>
            <img src= {twitter}/>
          </div>
        </section>
      </footer>
    </div>
    </div>
  );
}

export default App;
