import React, { useState } from 'react';
import { TextField, Box, Button } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

const NoteForm = ({ onSave, onUpdate, note }) => {
  const [title, setTitle] = useState(note ? note.title : '');
  const [description, setDescription] = useState(note ? note.description : '');

  const handleSave = () => {
    // Perform validation
    if (title.trim() === '') {
      alert('Please enter a title');
      return;
    }

    const newNote = {
      id: note ? note.id : uuidv4(),
      title: title.trim(),
      description: description.trim(),
    };

    if (note) {
      onUpdate(newNote); // Call onUpdate if it's an existing note
    } else {
      onSave(newNote); // Call onSave if it's a new note
    }

    // Clear the form
    setTitle('');
    setDescription('');
  };

  const handleUpdate = () => {
    // Perform validation
    if (title.trim() === '') {
      alert('Please enter a title');
      return;
    }

    const updatedNote = {
      ...note,
      title: title.trim(),
      description: description.trim(),
    };

    onUpdate(updatedNote);

    // Clear the form
    setTitle('');
    setDescription('');
  };


  const formContainerStyle = {
    maxWidth: '100vh',
    maxHeight: '100vh',
    border: '1px solid #fff',
    margin:'20px auto',
    borderRadius: '8px',
    padding: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    overflow:'hidden',
  };

  const inputStyle = {
    marginBottom: '16px',
  };

  const buttonStyle = {
    marginTop: '16px',
  };

  return (
    <Box>
      <Box style={formContainerStyle}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />
        {title.length < 10 && (
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={inputStyle}
          />
        )}
       <Button
  variant="contained"
  color="primary"
  onClick={note ? handleUpdate : handleSave}
  style={buttonStyle}
>
  {note ? 'Update' : 'Save'}
</Button>
      </Box>
    </Box>
  );
};

export default NoteForm;
