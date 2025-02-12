import React, { useState } from 'react';
import Note from './Note';
import AddNote from './AddNote';
import './NotesApp.css';

const NotesApp = () => {
  const [notes, setNotes] = useState([]);

  // Función para añadir una nueva nota
  const addNote = (title, description) => {
    const newNote = {
      id: Date.now(),
      title,
      description,
    };
    setNotes([...notes, newNote]);
  };

  // Función para eliminar una nota
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  // Función para editar una nota
  const editNote = (id, newTitle, newDescription) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, title: newTitle, description: newDescription } : note
    ));
  };

  return (
    <div className="notes-app">
      <h1>Gestión de Notas</h1>
      <AddNote onAdd={addNote} />
      <div className="notes-list">
        {notes.map(note => (
          <Note
            key={note.id}
            note={note}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesApp;
