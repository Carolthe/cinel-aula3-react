import React from "react";

const Saudacao = ({ idioma }) => {
    const saudacao = idioma === 'pt' ? 'Olá' :
                     idioma === 'en' ? 'Hello' :
                     idioma === 'es' ? 'Hola' :
                     idioma === 'fr' ? 'Bonjour' :
                     'Idioma não suportado';
  
    return (
      <div>
        <button>
        {saudacao}</button>
      </div>
    );
  };
  
  export default Saudacao;