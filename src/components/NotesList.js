import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  card: {
    maxWidth: '300px', // Adjust the max width as per your requirement
    margin: '10px auto', // Center the card horizontally
  },
});

const NoteCard = ({ note, onDelete, onEdit }) => {
  const classes = useStyles();

  const handleDelete = () => {
    onDelete(note.id);
  };

  const handleEdit = () => {
    onEdit(note.id);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {note.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {note.description}
        </Typography>
        <IconButton aria-label="edit" onClick={handleEdit}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

const NotesList = ({ notes, onDelete, onEdit }) => {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default NotesList;
