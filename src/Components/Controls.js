//"StAuth10244: I Colin Mcintyre, 000914071 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."

import React from "react";
import "./Controls.css";

const Controls = ({ deal, reset, toss, regroup, addWildcard }) => {

    return(
    
    <div className="controls">

      <button id ="bn1" onClick={() => deal(5)}>Deal 5</button>
      <button id ="bn2" onClick={() => deal(7)}>Deal 7</button>
      <button id ="bn3" onClick={reset}>Reset</button>
      <button id ="bn4" onClick={toss}>Toss</button>
      <button id ="bn5" onClick={regroup}>Regroup</button>
      <button id ="bn6" onClick={addWildcard}>Wildcard</button>



    </div>


    );

};

export default Controls;
