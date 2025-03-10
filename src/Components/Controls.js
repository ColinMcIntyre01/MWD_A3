import React from "react";
import "./Controls.css";

const Controls = ({ deal, reset, toss, regroup, addWildcard }) => {

    return(
    
    <div className="controls">

      <button onClick={() => deal(5)}>Deal 5</button>
      <button onClick={() => deal(7)}>Deal 7</button>
      <button onClick={reset}>Reset</button>
      <button onClick={toss}>Toss</button>
      <button onClick={regroup}>Regroup</button>
      <button onClick={addWildcard}>Wildcard</button>



    </div>


    );

};

export default Controls;
