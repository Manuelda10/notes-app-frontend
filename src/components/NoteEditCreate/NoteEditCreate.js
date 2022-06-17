import React, { useState } from 'react'
import './index.css'

const NoteEdit = ({ onClose, handleCreateNote, info, categories, handleUpdateNote }) => {
    let initialCategories = []

    if (info !== undefined) {
        initialCategories = categories.map(cat => cat.name)
    } 
    
    const [title, setTitle] = useState(info !== undefined ? info.title : '')
    const [content, setContent] = useState(info !== undefined ? info.content : '')
    const [categoriesString, setCategoriesString] = useState(categories !== undefined ? initialCategories.join(', ') : '')

    const formatCategories = () => {
        const catsArray = categoriesString.split(/\s*[,;.]\s*/) //Separete the string depending if it has commas, dots, or  semicoloms
        return catsArray
    }

    const handleSubmit = () => {
        const categories = formatCategories()
        const note = {
            title,
            content,
            categories
        }
        if (info !== undefined) {
            handleUpdateNote(info.id, note)
        } else {
            handleCreateNote(note)
        }
        onClose()
    }

    return (
        <div className='notes-edit-container'>
            <h1>{info === undefined ? 'Create note' : 'Edit note'}</h1>
            <label>Title</label><br></br>
            <input name='title' type='text'
                placeholder='Note title'
                value={title}
                onChange={e => setTitle(e.target.value)}></input><br></br>
            <label>Content</label><br></br>
            <textarea name='content' type='text' rows={4}
                placeholder='Note content'
                value={content}
                onChange={e => setContent(e.target.value)}></textarea><br></br>
            <label>Categories</label><br></br>
            <textarea name='categories' rows={4}
                placeholder='Write categories separated by a ","'
                value={categoriesString}
                onChange={e => setCategoriesString(e.target.value)}></textarea><br></br>
            <div className='notes-edit-buttons'>
                <button onClick={handleSubmit}>Save</button>
                <button onClick={onClose} >Close</button>
            </div>
        </div>
    )
}

const NoteCreate = ({onClose, handleCreateNote}) => {
    return (
        <NoteEdit
            onClose={onClose}
            handleCreateNote={handleCreateNote}
            info={undefined}
            categories={undefined}
        ></NoteEdit>
    )
}

export {NoteCreate, NoteEdit} 