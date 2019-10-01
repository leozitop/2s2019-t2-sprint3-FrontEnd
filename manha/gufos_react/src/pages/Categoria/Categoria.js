// puxa o Component dentro da biblioteca react importada
import React,{Component} from 'react';

// img
import logo from '../../assets/img/icon-login.png';

// component
import Rodape from '../../components/Rodape/Rodape';

// criar um componente - classNamee categoria usando Component
class Categoria extends Component{

    // estrutura de state => atributos
    // constrói a estrutura
    constructor(){
        // herda tudo o que estiver em component
        super();
        this.state = {
            // a lista é como se fosse um atributo
            lista: [
                // {idCategoria: 1, nome: "Design"},
                // {idCategoria: 2, nome: "Jogos"},
                // {idCategoria: 3, nome: "Meetup"}
            ],
            nome: ''
        };
    }

    // fetch depois que o componente for renderizado
    componentDidMount(){
        fetch('http://localhost:5000/api/categorias')
            // converte em json
            .then(response => response.json())
            // lista vai receber os valores de data depois que for convertido em json
            .then(data => this.setState({lista: data}));
    }

    // a arrow function serve pra procurar a função na própria clase
    adicionaItem = (event) =>{
        event.preventDefault();

        fetch('http://localhost:5000/api/categorias', {
            method: 'POST',
            body: JSON.stringify({nome: this.state.nome }),// valor do input
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => console.log(response.json()))
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    adicionaCategoria = () =>{
        // pega os valores da lista
        let valores_lista = this.state.lista;
        let categoria = {idCategoria: this.state.lista.length,
            nome: this.state.nome}

        // adiciona
        valores_lista.push(categoria);
        this.setState({lista: valores_lista});
        // this referencía Categoria
    }

    atualizarNome = (event) =>{
        // setState toda vez que for alterar o estado
        // captura o que a pessoa está digitando no input
        this.setState({nome: event.target.value});
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <header className="cabecalhoPrincipal">
                    <div className="container">
                    <img src={logo}/>
                    <nav className="cabecalhoPrincipal-nav">
                        Administrador
                    </nav>
                    </div>
                </header>

                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                    <h1 className="conteudoPrincipal-cadastro-titulo">Categorias</h1>
                    <div className="container" id="conteudoPrincipal-lista">
                        <table id="tabela-lista">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Título</th>
                            
                            </tr>
                        </thead>

                        <tbody id="tabela-lista-corpo">
                            {this.state.lista.map(element =>{
                                return(
                                    <tr>
                                        <td>{element.idCategoria}</td>
                                        <td>{element.nome}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        </table>
                    </div>

                    <div className="container" id="conteudoPrincipal-cadastro">
                        <h2 className="conteudoPrincipal-cadastro-titulo">
                        Cadastrar Categoria
                        </h2>
                        <form>
                        <div className="container">
                            <input
                            type="text"
                            className="className__categoria"
                            id="input__categoria"
                            placeholder="tipo do evento"
                            value={this.state.nome}
                            onInput={this.atualizarNome}
                            />
                            <button
                            onClick={this.adicionaItem.bind(this)}
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

                <Rodape />
            </div>
        )
    }
}

export default Categoria;