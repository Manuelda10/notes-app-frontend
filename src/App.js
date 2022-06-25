import React, {useState, useEffect, useCallback} from 'react'
import Menu from './components/Menu/Menu'
import NotesContainer from './components/NotesContainer/NotesContainer';
import {getActiveNotes, getArchivedNotes, getActiveNotesByCategory, getArchivedNotesByCategory } from './services/getNotes';
import deleteNote from './services/deleteNote';
import createNote from './services/createNote';
import updateNote from './services/updateNote';
import './App.css';

function App() {

  const [notes, setNotes] = useState([])
  const [active, setActive] = useState(true)
    
  const handleNotes = useCallback(() => {
    if (active === true) {
        getActiveNotes().then(data => setNotes(data))
    } else {
        getArchivedNotes().then(data => setNotes(data))
    }
  }, [active])

  const handleDeleteNote = (id) => {
      deleteNote(id).then(res => handleNotes())
  }

  const handleCreateNote = (note) => {
      createNote({note}).then(res => handleNotes())
  }

  const handleUpdateNote = (id, note) => {
      updateNote(id, {note}).then(res => handleNotes())
  }

  const handleNotesByCategory = (id, isActive) => {
    if (isActive === true) {
      getActiveNotesByCategory(id).then(data => setNotes(data))
    } else {
      getArchivedNotesByCategory(id).then(data => setNotes(data))
    }
  }

  const handleActive = (isActive) => {
    setActive(isActive)
  }

  useEffect(() => {
    handleNotes()
  }, [handleNotes])

  return (
    <div className='app'>
      <h1 className='title-page'>Notes ✏️</h1>
      <Menu handleCreateNote={handleCreateNote}
        handleNotes={() => handleNotes()}
        handleNotesByCategory={handleNotesByCategory}
        active={active}
        handleActive={handleActive}></Menu>
      <NotesContainer
        notes={notes}
        handleNotes={handleNotes}
        handleDeleteNote={handleDeleteNote}
        handleUpdateNote={handleUpdateNote}></NotesContainer>
    </div>
  )
}

export default App;
