import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-error-code">404</h1>
      <p className="notfound-message">Página no encontrada</p>
      <Link to="/" className="notfound-button">
        Volver a Inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
