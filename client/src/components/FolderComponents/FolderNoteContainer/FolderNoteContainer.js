// React
import React from "react";
// Styles
import './folder_note_container.css'


const FolderNoteContainer = (props) => {




  return (
    <div className="folder_note_container" style={{ height: props.height }}>
      {props.children}
    </div>
  );
}

export default FolderNoteContainer;