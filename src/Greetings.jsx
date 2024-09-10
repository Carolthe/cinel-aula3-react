const Saudacao = ({ idioma }) => {
    const saudacao = idioma === 'pt' ? 'Seja bem vindo!' :
                     idioma === 'en' ? 'Welcome' :
                     idioma === 'es' ? 'Bienvenido' :
                     idioma === 'fr' ? 'Accueillir' :
                     'Idioma não suportado';
  
    return (
      <div className="saudacao">
        {saudacao}
      </div>
    );
  };
  
  export default Saudacao;