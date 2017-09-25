import React from 'react';

export const Body = (props) => {
return (
      <div>
        <h3>{props.itemName}</h3>
        <button onClick={props.greet} className="btn btn-secondary">Greet</button>
      </div>
    );
}
