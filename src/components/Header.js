import React, { Component } from "react";
import { user_type } from "../datas/userList.js";
import ListUsers from "./ListUsers";
import "./App.css";
import "../styles/Style.css";

function Header() {
  return (
    <>
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo" style={{ marginLeft: "20px" }}>
            DoKaction
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <a
            className="dropdown-trigger btn right hide-on-med-and-down"
            href="#"
            data-target="dropdown1"
          >
            S'inscrire | Se connecter
          </a>
          <ul id="dropdown1" className="dropdown-content">
            {user_type.map(
              ({ id, name, src, alt, height, width, className }) => (
                <ListUsers
                  key={id}
                  name={name}
                  src={src}
                  alt={alt}
                  height={height}
                  width={width}
                  className={className}
                />
              )
            )}
          </ul>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab">
              <a href="#test1">ACTUALITES</a>
            </li>
            <li className="tab">
              <a className="active" href="#test2">
                QUI SOMMES-NOUS ?
              </a>
            </li>
            <li className="tab">
              <a href="#test3">NOUS CONTACTER</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <p style={{ marginLeft: "20px", fontWeight: "bold" }}>
            Se connecter en tant que
          </p>
        </li>
        {user_type.map(({ id, name, src, alt, height, width, className }) => (
          <ListUsers
            key={id}
            name={name}
            alt={alt}
            src={src}
            height={height}
            width={width}
            className={className}
          />
        ))}
      </ul>
    </>
  );
}
export default Header;
