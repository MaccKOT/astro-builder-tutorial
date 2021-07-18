import React from 'react';

function Characters({ characters }) {
  return (
    <ul>
      {characters.map((character) => {
        return (
          <li>
            {character.name}
            <img
              width={160}
              src={character.img_url}
              alt={`Photo of ${character.name}`}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Characters;
