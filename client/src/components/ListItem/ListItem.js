// React
import React, { useState } from "react";
// Styles
import './list_item.css'
import Checkbox from '../Checkbox/Checkbox';


const ListItem = ({ children }) => {
  const [itemState, setItemState] = useState("false")

  return (
    <div className="list_div zoom">
      <Checkbox />
      {/* <div
      // contentEditable={itemState}
      // className="list_item"
      // style={{ display: "flex" }}
      > */}
      <input
        defaultValue={children}
        // onChange={(e) => e.target.value = children}
        className="list_item list_input"
        placeholder="Title"></input>


      {/* </div> */}
    </div>
  );
}

export default ListItem;
