import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [input, setInput] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const submit = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setInput((prevValue) => {
      return !prevValue;
    });
    event.preventDefault();
  };
  return (
    <div>
      <form className="create-note" onSubmit={submit}>
        {input && (
          <input
            onChange={handleChange}
            value={note.title}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={() => {
            setInput(true);
          }}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={input ? "3" : "1"}
        />
        <Zoom in={input}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
