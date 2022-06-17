import React from 'react'
import Note from '../Note/Note'
import './index.css'

const NotesContainer = ({notes, handleDeleteNote, handleUpdateNote, handleNotes}) => {
    return (
        <div className='notes-container'>
            {
                !notes
                    ? <h1>Cargando</h1>
                    :
                    notes.map(note => {
                        return (
                            <Note
                                key={note.id}
                                id={note.id}
                                title={note.title}
                                content={note.content}
                                date={note.date}
                                active={note.active}
                                handleNotes={() => handleNotes()}
                                handleDeleteNote={() => handleDeleteNote(note.id)}
                                handleUpdateNote={handleUpdateNote}
                            ></Note>
                        )
                    })
            }
        </div>
    )
}

export default NotesContainer