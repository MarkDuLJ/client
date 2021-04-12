import React from "react";
const PlayerSingle = (props) => {
  // console.log(props);
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src="Apple-Pie.jpg" alt="should be a player" />
            <span className="card-title">{props.player.firstName}</span>
          </div>
          <div className="card-content">
            <p>Email:{props.player.email}</p>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSingle;
