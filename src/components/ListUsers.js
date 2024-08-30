import React from "react";

function handleClick(userTypeName) {
  document.querySelector(".title_user").innerHTML =
    "Escpace de connexion des " + userTypeName;
}

function ListUsers({ name, src, alt, height, width, className }) {
  return (
    <>
      <li className="links_connexion" onClick={() => handleClick(name)}>
        <img
          src={src}
          alt={alt}
          height={height}
          width={width}
          className={className}
        ></img>
        <a>{name}</a>
      </li>
    </>
  );
}
export default ListUsers;
