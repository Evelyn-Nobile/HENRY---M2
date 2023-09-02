import React from "react";
import Card from "./Card";

function Cards({ characters}) {
  const startIndex = 1;
  return (
    <div>
      {characters.slice(startIndex).map((characters) => (
        <Card
          
          key={characters.id}
          name={characters.name}
          status={characters.status}
          species={characters.species}
          gender={characters.gender}
          origin={characters.origin.name}
          image={characters.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      ))}
    </div>
  );
}

export default Cards;
