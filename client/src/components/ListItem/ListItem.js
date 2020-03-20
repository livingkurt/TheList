// React
import React from "react";
// Styles
import './list_item.css'


const ListItem = ({ children }) => {



  return (
    <div className="list_item">
      {children}
    </div>
  );
}

export default ListItem;