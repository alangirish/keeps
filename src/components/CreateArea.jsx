import React from "react";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

function CreateArea(props) {
  const [note, setNote] = React.useState({ title: "", content: "" });

  function handleChange(e) {
    const { value, name } = e.target;
    setNote((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function submitNotes(e) {
    props.addNote(note);
    setNote({ title: "", content: "" });
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNotes}><AddCircleRoundedIcon/></button>
      </form>
    </div>
  );
}

export default CreateArea;
