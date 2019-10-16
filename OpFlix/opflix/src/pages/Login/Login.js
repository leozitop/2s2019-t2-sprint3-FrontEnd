import React,{Component} from 'react';

import logo from '../../assets/img/OpFlix_logo.png';

// axios
import Axios from 'axios';

class Login extends Component{

    // constructor(){
    //     // faz referencia ao Component
    //     super();
    //     this.state = {
    //         email: "",
    //         senha: "",
    //         erro: ""
    //     }
    // }

    // atualizaEstadoEmail = (event) =>{
    //     this.setState({email: event.target.value});
    // }

    // atualizaEstadoSenha = (event) =>{
    //     this.setState({senha: event.target.value});
    // }

    // efetuarLogin = (event) =>{
    //     event.preventDefault();

    //     Axios.post("http://:5000/api/login", {
    //         email: this.state.email,
    //         senha: this.state.senha
    //     })
    //     .then(response => {
    //         if(response.status === 200){
    //             console.log(response.data.token);
    //             // props => propriedades => herança
    //             localStorage.setItem("usuario-opflix", response.data.token);
    //             this.props.history.push('/categoria');
    //         }else{
    //             console.log('vish deu ruim parça');
    //         }
    //     })
    //     .catch(erro => {
    //         this.setState({erro: "Usuário ou senha inválidos"});
    //         console.log(erro);
    //     });
    // }

    render(){
        return(
            <section className="container flex">
            <div className="img__login"><div className="img__overlay"></div></div>

            <div className="item__login">
                <div className="row">
                <div className="item">
                    <img src= {logo} className="icone__login" />
                </div>
                
                <form>
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
                        type="text"
                        name="username"
                        id="login__email"
                    />
                    </div>

                    <br/>
                    
                    <br/>

                    <div className="item">
                    <p>Senha</p>
                    <input
                        className="input__login"
                        placeholder="senha"
                        type="password"
                        name="password"
                        id="login__password"
                    />
                    <p 
                        className="text__login"
                        style={{color: "red", textAlign: "center"}}
                    >
                    </p>
                    </div>
                    <div className="item">
                    <button className="btn btn__login" id="btn__login">
                        Entrar
                    </button>

                    <div className="item">
                        <p>Faça seu cadastro 
                        <br/>caso ainda não tenha</p>
                    </div>
                    <div className="item">
                        <li>Cadastrar</li>
                    </div>
                    </div>
                </form>
                </div>
            </div>
        </section>
        );
        
    }

}

export default Login;