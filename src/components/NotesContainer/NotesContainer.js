import React from 'react'
import Note from '../Note/Note'
import notesImg from '../../assets/notes-for-container.png'
import './index.css'

const NotesContainer = ({ notes, handleDeleteNote, handleUpdateNote, handleNotes }) => {
    
    console.log(notes);

    return (
        <div className='notes-container'>
            {
                notes.length === 0
                    ? <img src={notesImg} alt='Notes' style={{
                            width: "20rem",
                            marginLeft: "calc(50% - 10rem)"
                        }} />
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