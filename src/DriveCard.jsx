export default function DriveCart (props){
    return(
        <div>
            <img className="foto" src={props.img} />
            <h1>{props.name}</h1>
            <p>{props.paragrafo}</p>
        </div>
    )
}