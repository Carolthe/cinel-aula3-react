export default function DriveCart (props){
    return(
        <div className="card">
            <img className="foto" src={props.img} />
          <div>
            <h1>{props.name}</h1>
            <p>{props.rating}</p>
            <p>{props.paragrafo}</p>
       </div> 
       </div>
    )
}