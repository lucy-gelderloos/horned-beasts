// The Main component needs to pass title, imageUrl, and description into each HornedBeast component. For the purpose of today’s lab, you can pass whatever title, url and description that you want into each HornedBeast commponent.

// The HornedBeast component needs to contain an <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description.



const HornedBeast = (props) => {
    return (        
        <div class="animal">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
        );

  }

export default HornedBeast;
