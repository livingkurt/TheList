// React
import React, { useState } from "react";
// Components
import { ButtonSymbol } from '../../UtilityComponents';
import { BlockContainer } from "../../ContainerComponents";
import { TodoModal } from '../../TodoComponents';
// Styles
import './note.css'
// Utils
import { API } from "../../../utils";



const Note = (props) => {

  const [modal_state, set_modal_state] = useState("none")

  const update_note = async (e) => {
    e.persist();
    const todo_id = e.target.id
    const todo_data = e.target.value
    try {
      const res = await API.get_note(todo_id)
      const update_todo = { ...res.data, title: todo_data }
      API.update_note(todo_id, update_todo)
    }
    catch (err) {
      console.log(err);
    }
  }

  const show_modal = async (e) => {
    const todo_id = props.id
    console.log(todo_id)
    if (modal_state === "none") {
      set_modal_state("flex")
    }
    else {
      set_modal_state("none")
    }
  }

  return (
    <div className="note zoom">
      {/* <Checkbox /> */}
      <BlockContainer styles={{ fontSize: "20px", color: "silver", transform: "rotate(270deg)", paddingBottom: "10px" }}>
        <i className="fas fa-sort-up"></i>
      </BlockContainer>
      <input
        defaultValue={props.children}
        className="note_input"
        placeholder="Title"
        id={props.id}
        onBlur={e => update_note(e)} />
      <ButtonSymbol styles={{ margin: "0px", padding: "0px" }} on_click_function={show_modal} ><i className="fas fa-bars"></i></ButtonSymbol>
      {/* <ButtonSymbol margin="0px" padding="0px" on_click_function={show_modal} ><i className="fas fa-sort-up"></i></ButtonSymbol> */}
      <TodoModal id={props.id} show_modal={show_modal} show_modal_state={modal_state} get_all_notes_by_list_id={props.get_all_notes_by_list_id}></TodoModal>
    </div>
  );
}

export default Note;
