import "./HornedBeast.css"

const HornedBeast = (props) => {
    return (        
        <div className="animal">
            <h2>{props.title}</h2>
            <img src={props.image_url} alt={props.description} title={props.title} />
            <p>{props.description}</p>
        </div>
        );

  }

export default HornedBeast;
