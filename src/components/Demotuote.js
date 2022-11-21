import '../styles/demotuote.css'
const Demotuote = (props) => {
    return (
        <div className="demoContainer">
            <h1>Nimi: {props.name}</h1>
            <h2>Hinta: {props.price}</h2>
            <ul>
                {props.shoeSize.map((size) => 
                    <li>{size}</li>
                )}
            </ul>
        </div>
      );
}
 
export default Demotuote;