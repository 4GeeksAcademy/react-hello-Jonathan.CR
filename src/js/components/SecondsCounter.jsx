import React from "react";

function SecondsCounter(props) {
  return (
    <div>
      <div className="secondsCounter">
        <span className="textoSegundos">Han pasado</span>{props.seconds} <span className="textoSegundos">segundos desde que has abierto la pagina</span>
    </div> 
    </div> );
}

export default SecondsCounter;
