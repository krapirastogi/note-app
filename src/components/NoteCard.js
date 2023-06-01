import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import './css/NoteCard.css'; // Import the CSS file

const NoteCard = ({ note, onDelete }) => {
  const { title, description } = note;

  return (
    <Card className="card">
      <CardContent className="cardContent"> 
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography color="textSecondary">{description}</Typography>
        <Button
          color="secondary"
          onClick={() => onDelete(note.id)}
          className="button"        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
