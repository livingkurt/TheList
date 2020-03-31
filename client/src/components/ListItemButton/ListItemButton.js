// React
import React, { useState } from "react";
import API from "../../utils/API";
// Styles
import './list_item_button.css'


function DeleteButton(props) {

  // const [modal_state, set_modal_state] = useState(false)

  const show_modal = async (e) => {
    const todo_id = e.target.id
    // set_modal_state(true)

    try {
      const res = await API.get_note(todo_id)
    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <button index={props.index} id={props.id} onClick={e => show_modal(e)} className="delete_button"></button>
    </div>
  );
}

export default DeleteButton;

// );