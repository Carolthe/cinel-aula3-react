import './App.css'
import DriveCart from './DriveCard'
import Greetings from './Greetings'
import Rating from './Rating'


function App() {
  

  return (
    <div>
      <Greetings idioma="en"/>
      <Rating  />
      <div>
<Rating>1.49</Rating>  {/* Mostra 1 estrela */}
<Rating>1.5</Rating>   {/* Mostra 2 estrelas */}
<Rating>3</Rating>     {/* Mostra 3 estrelas */}
<Rating>4</Rating>   {/* Mostra 5 estrelas */}
<Rating>5</Rating>     {/* Mostra 5 estrelas */}
</div>
<DriveCart img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg" name="Travis Kalanick" paragrafo="Audi A3 - BE33ER" />

    </div>
  )
}

export default App
