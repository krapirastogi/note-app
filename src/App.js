import React, { useState,useEffect} from 'react';
import { CssBaseline, createTheme, ThemeProvider } from '@material-ui/core';
import "./components/css/App.css";
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5e72e4',
      dark: '#412fbf',
      light: '#7e9af9',
    },
    secondary: {
      main: '#6f42c1',
    },
  },
});

const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    // Retrieve notes from local storage
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    // Store notes in local storage
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleSaveNote = (newNote) => {
    const isDuplicate = notes.some((note) => note.title === newNote.title);
    if (isDuplicate) {
      alert('Note with the same title already exists');
      return false;
    }

    setNotes([...notes, newNote]);
    setSelectedNote(null);
    return true;
  };

  const handleDeleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
    setSelectedNote(null);
  };
  const handleEditNote = (note) => {
    setSelectedNote(note);
  };
  

  const handleUpdateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
    setSelectedNote(null);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          height: '100vh',
          backgroundColor: '#bdd4e7',
          backgroundImage: 'linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)',
        }}
      >
       <NoteForm onSave={handleSaveNote} onUpdate={handleUpdateNote} note={selectedNote} />

        
<NotesList
  notes={notes}
  onDelete={handleDeleteNote}
  onEdit={handleEditNote} // Pass the note object instead of note.id
/>
      </div>
    </ThemeProvider>
  );
};

export default App;
