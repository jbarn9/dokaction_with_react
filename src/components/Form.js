import React, { Component } from "react";
import "../styles/Form.css";

class Form extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="forms-container">
            <h3 className="title_user"></h3>
            <div className="signin-signup">
              <form action="signup.php" method="POST" className="sign-in-form">
                <div className="content">
                  <h3>Se connecter</h3>
                </div>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" id="login-input" className="login" />
                  <label htmlFor="login-input">Login</label>
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type="text" id="password-input" className="password" />
                  <label htmlFor="password-input">Mot de passe</label>
                </div>
                <button type="button" className="btn_docation solid">
                  Se connecter
                </button>

                <p className="social-text">OU se connecter avec</p>
                <div className="social-media">
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </form>
              <form action="signin.php" method="POST" className="sign-up-form">
                <h2 className="title">S'inscrire</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nom d'utilisateur"
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input type="email" name="email" placeholder="Email" />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Mot de passe"
                  />
                </div>
                <button className="btn transparent">S'inscrire</button>

                <p className="social-text">
                  Ou se connecter avec les réseaux sociaux
                </p>
                <div className="social-media">
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>Pas encore inscrits ?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  minus natus est.
                </p>
                <button className="btn_docation" id="sign-up-btn">
                  S'inscrire
                </button>
              </div>
              <img src="../assets/img/logo/log.svg" className="image" alt="" />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>Déjà parmi nous?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  minus natus est.
                </p>
                <button className="btn transparent" id="sign-in-btn">
                  Se connecter
                </button>
              </div>
              <img
                src="../assets/img/logo/register.svg"
                className="image"
                alt=""
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Form;
