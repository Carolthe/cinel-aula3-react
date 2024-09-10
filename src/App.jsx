import './App.css'
import DriveCart from './DriveCard'
import Greetings from './Greetings'
import Rating from './Rating'


function App() {
  

  return (
    <div className='page'>
    {/* Primeiro exercicio */}
    <Greetings idioma="es"/>

    {/* Segundo exercicio */}
    
    <Rating>1.49</Rating>  {/* Mostra 1 estrela */}
    <Rating>1.5</Rating>   {/* Mostra 2 estrelas */}
    <Rating>3</Rating>     {/* Mostra 3 estrelas */}
    <Rating>4</Rating>   {/* Mostra 5 estrelas */}
    <Rating>5</Rating>     {/* Mostra 5 estrelas */}

    {/* Terceiro exercicio */}

    <DriveCart img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428" name="Travis Kalanick" rating="5" paragrafo="Toyota Corolla Altis - CO42DE" />
    <DriveCart img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg" name="Dara Khosrowshahi" rating="3" paragrafo="Audi A3 - BE33ER"  />
    </div>
  )
}

export default App
