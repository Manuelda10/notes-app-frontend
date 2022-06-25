import React, {useEffect, useState} from 'react'
import { getCategoriesById } from '../../services/getCategories'
import Modal from '../Modal/Modal'
import { NoteEdit } from '../NoteEditCreate/NoteEditCreate'
import { ReactComponent as EditIcon } from '../../assets/edit.svg'
import { ReactComponent as ArchiveIcon } from '../../assets/archive.svg'
import { ReactComponent as DeleteIcon } from '../../assets/delete.svg'
import { ReactComponent as ActiveIcon } from '../../assets/active.svg'

import '../../App.css'
import './index.css'

const Note = ({ id, title, content, date, active, handleDeleteNote, handleUpdateNote, handleNotes }) => {
    const [showModal, setShowModal] = useState(false)
    const [categories, setCategories] = useState([])

    const handleOpenModal = () => {
        setShowModal(true)
    } 
    const handleCloseModal = () => {
        setShowModal(false)
    }

    const handleGetCategoriesById = (id) => {
        getCategoriesById(id).then(data => setCategories(data))
    }

    useEffect(() => {
        handleGetCategoriesById(id)
    }, [id, handleNotes])

    return (
        <div className='note'>
            <div className='note-content'>
                <h3>Title: {title}</h3>
                <p>Content: {content}</p>
                <p>Date: {date.split('T')[0].split('-').reverse().join('-')}</p>
                <p>{active}</p>
                <p>Categories: {categories.map(cat => cat.name).join(', ')}</p>
            </div>

            <div className='note-buttons'>
                <button className='note-btn' onClick={() => handleUpdateNote(id, { active: !active })}> 
                {
                    active === true
                            ? <ArchiveIcon className='icon-btn icon-archive' ></ArchiveIcon>
                            : <ActiveIcon className='icon-btn icon-archive' ></ActiveIcon>
                } </button>
                <button className='note-btn' onClick={handleOpenModal}><EditIcon className='icon-btn icon-edit'></EditIcon></button>
                <button className='note-btn' onClick={handleDeleteNote} ><DeleteIcon className='icon-btn icon-delete'></DeleteIcon></button>
            </div>

            {showModal && <Modal><NoteEdit
                info={{ id, title, content }}
                categories={categories}
                handleUpdateNote={handleUpdateNote}
                onClose={handleCloseModal}>
            </NoteEdit> </Modal>}
            
        </div>
    )
}

export default Note;