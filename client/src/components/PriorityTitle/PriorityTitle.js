// React
import React from "react";
import Button from '../Button/Button';
// Styles
import './priority_title.css'


const PriorityTitle = (props) => {
  return (
    <div onClick={() => props.on_click_function(props.priority, props.list_id)} className="title" style={{ borderBottom: props.border, padding: "2px", justifyContent: "space-between" }}>
      <h2 style={{ margin: props.margin, fontSize: props.fontSize }}>{props.children}</h2>
      <Button margin="1px 3px 0px 0px" padding="0px 2px 7px 0px" on_click_function={props.on_click_function} list_id={props.list_id} priority={props.priority}><i className="fas fa-sort-up"></i></Button>
    </div >
  );
}

export default PriorityTitle;
