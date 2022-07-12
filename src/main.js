// The Main component needs to render at least two copies of a component called HornedBeast

// The Main component needs to pass title, imageUrl, and description into each HornedBeast component. For the purpose of today’s lab, you can pass whatever title, url and description that you want into each HornedBeast commponent.
  
const Main = () => {
   return (
        <main>
            <p>Animals</p>
            <hornedBeast />
            <hornedBeast />
        </main>
    );
}

export default Main;
